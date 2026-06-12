const express = require("express");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const path = require("path");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET;
const GROQ_API_KEY = process.env.GROQ_API_KEY;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not set. Add it in your environment variables.");
}

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not set. Add it in your environment variables.");
}

const GROQ_MODEL = process.env.GROQ_MODEL || "llama-3.1-8b-instant";
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

function isPreparationExpansionRequest(message) {
  const text = String(message || "").toLowerCase();
  return (
    (text.includes("expand only") && (text.includes("preparation steps") || text.includes("cooking process"))) ||
    (text.includes("detailed") && text.includes("step") && text.includes("recipe:")) ||
    (text.includes("minimum 8") && text.includes("steps") && text.includes("recipe:"))
  );
}

function buildGroqRecipePrompt(message, servings, context) {
  const assistantRole = context === "nonveg" ? "Indian non-vegetarian cooking assistant" : "expert Telugu vegetarian cooking assistant";
  const preparationExpansionOnly = context === "nonveg" && isPreparationExpansionRequest(message);
  const ingredientRule = context === "nonveg"
    ? "Use only authentic Telugu/Andhra non-veg home-style ingredients. Do not include unrelated ingredients."
    : "Use only authentic Andhra/Telugu style ingredients. Do not include unrelated ingredients.";
  const methodRule =
    "Use traditional Andhra home-cooking method only (proper tempering order, simmering style, and authentic sequence).";
  const methodChecklist =
    "Method checklist: mention prep, then popu/talimpu tempering sequence, then cooking/simmering, then final finish and serve.";

  if (preparationExpansionOnly) {
    return `You are an ${assistantRole}.

User asked:
${message}

TASK:
- Rewrite ONLY the "Preparation Steps" (or "Cooking Process") section.
- Expand it to 8 to 12 clear, realistic, step-by-step cooking steps.

STRICT RULES:
- Keep South Indian / Telugu home-style cooking.
- Keep all other sections unchanged: Recipe Name, Servings, Ingredients, Tempering, Final Garnish/Serving, Quantity Adjustment.
- Do NOT change ingredient list or quantities.
- Do NOT add new sections.
- Use simple, practical language and proper flow from prep -> saute/tempering -> simmering -> final serving.
- Each step must clearly describe the action.

OUTPUT:
- Return the full recipe text with only the Preparation Steps/Cooking Process section replaced.
- Preserve headings and section order from user input.`;
  }

  return `You are an ${assistantRole}.

User asked: ${message}
Servings: ${servings || 1}

STRICT RULES:
- Give authentic Andhra recipes only
- Do NOT mix different dishes
- If Pulihora -> use tamarind ONLY (no lemon)
- ${ingredientRule}
- ${methodRule}
- ${methodChecklist}
- ALWAYS follow the exact format with emojis. Do not change headings.
- Use simple Andhra home-style cooking. Avoid restaurant-style or North Indian masalas.
- Minimum 5 cooking steps
- Steps must be complete

FORMAT:

🍲 Recipe Name:
<name>

👥 Servings:
<servings>

🛒 Ingredients:
- item with exact quantity

👨‍🍳 Cooking Process:
1.
2.
3.
4.
5.

⚡ Tips:
- tip`;
}

const inFlightAssistantRequests = new Map();
const assistantResponseCache = new Map();
const ASSISTANT_CACHE_TTL_MS = 30 * 1000;

const greetingInputs = new Set(["hi", "hii", "hello", "hey"]);
const foodKeywords = [
  "rice",
  "pappu",
  "curry",
  "dal",
  "fry",
  "pulihora",
  "chutney",
  "pachadi",
  "recipe",
  "sabzi",
  "kura",
  "tomato",
  "potato",
  "dhondakaya",
  "dondakaya",
  "bendakaya",
  "aloo",
  "vankaya",
  "beerakaya",
  "dosakaya",
  "sorakaya",
  "pesarattu",
  "gongura",
  "rasam",
  "sambar",
  "bobbatlu",
  "curd rice",
  "tomato pappu",
  "chicken",
  "mutton",
  "fish",
  "egg",
];

const localRecipes = {
  pulihora:
    "🍲 Recipe Name:\nPulihora\n\n👥 Servings:\n2\n\n🛒 Ingredients:\n- Cooked rice - 2 cups\n- Tamarind pulp - 2 tbsp\n- Turmeric - 1/4 tsp\n- Mustard seeds - 1/2 tsp\n- Chana dal - 1 tsp\n- Urad dal - 1 tsp\n- Dry red chilies - 2\n- Curry leaves - 1 sprig\n- Peanuts - 2 tbsp\n- Sesame oil - 2 tbsp\n- Salt - to taste\n\n👨‍🍳 Cooking Process:\n1. Cook rice, spread it on a plate, and cool slightly.\n2. Soak tamarind in warm water, extract thick pulp, and keep ready.\n3. Heat sesame oil, add mustard, chana dal, urad dal, red chilies, curry leaves, and peanuts; fry till aromatic.\n4. Add turmeric, tamarind pulp, and salt; cook until raw smell is gone and paste thickens.\n5. Mix the tamarind base into rice gently and rest for 10 minutes before serving.\n\n⚡ Tips:\n- Use tamarind only for authentic pulihora taste.\n- Resting improves flavor absorption.",
  "curd rice":
    "🍲 Recipe Name:\nCurd Rice\n\n👥 Servings:\n2\n\n🛒 Ingredients:\n- Cooked rice - 2 cups\n- Thick curd - 1 cup\n- Milk - 1/4 cup\n- Ginger (finely chopped) - 1 tsp\n- Green chili (finely chopped) - 1\n- Mustard seeds - 1/2 tsp\n- Urad dal - 1 tsp\n- Curry leaves - 1 sprig\n- Coriander leaves - 1 tbsp\n- Salt - to taste\n\n👨‍🍳 Cooking Process:\n1. Mash warm cooked rice lightly and let it cool a bit.\n2. Add curd, milk, and salt; mix until creamy.\n3. Heat oil, splutter mustard, fry urad dal till golden, then add ginger, chili, and curry leaves.\n4. Pour tempering into curd rice and mix evenly.\n5. Garnish with coriander and serve fresh or slightly chilled.\n\n⚡ Tips:\n- Add milk to keep curd rice soft for longer.\n- Adjust curd based on sourness.",
  "tomato pappu":
    "🍲 Recipe Name:\nTomato Pappu\n\n👥 Servings:\n2\n\n🛒 Ingredients:\n- Toor dal - 1/2 cup\n- Tomato (chopped) - 2 medium\n- Green chili - 2\n- Turmeric - 1/4 tsp\n- Garlic cloves - 3\n- Mustard seeds - 1/2 tsp\n- Cumin - 1/2 tsp\n- Curry leaves - 1 sprig\n- Ghee - 1 tbsp\n- Salt - to taste\n\n👨‍🍳 Cooking Process:\n1. Pressure cook toor dal with tomato, turmeric, green chili, and garlic until soft.\n2. Mash dal to a smooth consistency and add salt.\n3. Heat ghee, add mustard and cumin, then curry leaves.\n4. Pour tempering over dal and simmer for 3 to 4 minutes.\n5. Serve hot with steamed rice and a little ghee.\n\n⚡ Tips:\n- Use ripe tomatoes for balanced tanginess.\n- Do not over-thin the dal for better Andhra texture.",
};

function replacePulihoraTerms(text) {
  return String(text || "")
    .replace(/lemon juice/gi, "tamarind paste")
    .replace(/lemon\s+extract/gi, "tamarind paste")
    .replace(/lemon\b/gi, "tamarind");
}

function normalizeFormattedReply(text) {
  let output = String(text || "").replace(/\r\n/g, "\n").trim();

  output = output
    .replace(/^\s*Recipe\s*Name\s*:/im, "🍲 Recipe Name:")
    .replace(/^\s*Servings\s*:/im, "👥 Servings:")
    .replace(/^\s*Ingredients\s*:/im, "🛒 Ingredients:")
    .replace(/^\s*Cooking\s*Process\s*:/im, "👨‍🍳 Cooking Process:")
    .replace(/^\s*Tips\s*:/im, "⚡ Tips:");

  output = output.replace(/^🍲\s*(?!Recipe Name:)([^\n:]+):\s*/m, "🍲 Recipe Name:\n$1\n\n");

  const firstHeader = output.indexOf("🍲 Recipe Name:");
  if (firstHeader >= 0) {
    const secondHeader = output.indexOf("🍲 Recipe Name:", firstHeader + 1);
    if (secondHeader > firstHeader) {
      output = output.slice(0, secondHeader).trim();
    }
  }

  // Remove accidental standalone number lines before servings heading (for example: a lone "2").
  output = output.replace(/(?:\n\s*)+\d+\s*(?:\n\s*)+👥\s*Servings:/g, "\n\n👥 Servings:");

  return output;
}

function applyQuerySpecificTextFixes(query, text) {
  let output = String(text || "");
  const normalizedQuery = String(query || "").toLowerCase();

  if (/dhondakaya|dondakaya/.test(normalizedQuery)) {
    output = output
      .replace(/bitter\s*gourd/gi, "tindora (dondakaya)")
      .replace(/ivy\s*gourd/gi, "tindora (dondakaya)");

    // Remove non-typical restaurant masala lines for simple Andhra home-style dondakaya curry.
    output = output.replace(/^\s*-\s*.*garam\s*masala.*$/gim, "");
    output = output.replace(/^\s*-\s*.*kasuri\s*methi.*$/gim, "");
  }

  return normalizeFormattedReply(output);
}

function applyPulihoraPostFix(message, data) {
  if (!String(message).toLowerCase().includes("pulihora") || !data) {
    return data;
  }

  if (typeof data.text === "string") {
    return { ...data, text: normalizeFormattedReply(replacePulihoraTerms(data.text)) };
  }

  if (typeof data.reply === "string") {
    return { ...data, reply: normalizeFormattedReply(replacePulihoraTerms(data.reply)) };
  }

  if (data.mode === "recipe") {
    return {
      ...data,
      title: replacePulihoraTerms(data.title),
      ingredients: (data.ingredients || []).map((item) => ({
        ...item,
        item: replacePulihoraTerms(item.item),
        quantity: replacePulihoraTerms(item.quantity),
        note: replacePulihoraTerms(item.note),
      })),
      tempering: (data.tempering || []).map((item) => ({
        ...item,
        item: replacePulihoraTerms(item.item),
        quantity: replacePulihoraTerms(item.quantity),
        note: replacePulihoraTerms(item.note),
      })),
      steps: (data.steps || []).map((step) => replacePulihoraTerms(step)),
      tips: (data.tips || []).map((tip) => replacePulihoraTerms(tip)),
    };
  }

  if (data.mode === "ingredients") {
    return {
      ...data,
      title: replacePulihoraTerms(data.title),
      possibleRecipes: (data.possibleRecipes || []).map((recipe) => ({
        ...recipe,
        name: replacePulihoraTerms(recipe.name),
        reason: replacePulihoraTerms(recipe.reason),
        ingredients: (recipe.ingredients || []).map((item) => ({
          ...item,
          item: replacePulihoraTerms(item.item),
          quantity: replacePulihoraTerms(item.quantity),
        })),
        steps: (recipe.steps || []).map((step) => replacePulihoraTerms(step)),
      })),
      tips: (data.tips || []).map((tip) => replacePulihoraTerms(tip)),
    };
  }

  return data;
}

function applyReplyNormalization(data) {
  if (!data) {
    return data;
  }

  if (typeof data.text === "string") {
    return { ...data, text: normalizeFormattedReply(data.text) };
  }

  if (typeof data.reply === "string") {
    return { ...data, reply: normalizeFormattedReply(data.reply) };
  }

  return data;
}

function applyQuerySpecificFixes(query, data) {
  if (!data) {
    return data;
  }

  if (typeof data.text === "string") {
    return { ...data, text: applyQuerySpecificTextFixes(query, data.text) };
  }

  if (typeof data.reply === "string") {
    return { ...data, reply: applyQuerySpecificTextFixes(query, data.reply) };
  }

  return data;
}

function hasUsableAssistantData(data) {
  if (!data) {
    return false;
  }

  if (typeof data.reply === "string" && data.reply.trim()) {
    return true;
  }

  if (typeof data.text === "string" && data.text.trim()) {
    return true;
  }

  if (data.mode === "recipe") {
    return Array.isArray(data.steps) && data.steps.length >= 3;
  }

  if (data.mode === "ingredients") {
    return Array.isArray(data.possibleRecipes) && data.possibleRecipes.length > 0;
  }

  return false;
}

function getLocalFallbackRecipe(query, servings, context) {
  const key = Object.keys(localRecipes).find((item) => query.includes(item));
  if (key) {
    return localRecipes[key].replace(/👥 Servings:\n\d+/i, `👥 Servings:\n${servings || 2}`);
  }

  if (context === "nonveg") {
    return "🍲 Recipe Name:\nAndhra Chicken Curry\n\n👥 Servings:\n2\n\n🛒 Ingredients:\n- Chicken - 500 g\n- Onion - 2 medium\n- Tomato - 2 medium\n- Ginger garlic paste - 1 tbsp\n- Red chili powder - 1 tsp\n- Coriander powder - 1 tsp\n- Turmeric - 1/4 tsp\n- Curry leaves - 1 sprig\n- Oil - 2 tbsp\n- Salt - to taste\n\n👨‍🍳 Cooking Process:\n1. Heat oil and saute sliced onions until golden.\n2. Add ginger garlic paste and cook till raw smell goes.\n3. Add tomatoes and spice powders, cook to a thick masala.\n4. Add chicken, salt, and cook covered with little water until tender.\n5. Finish with curry leaves and simmer 3 minutes before serving.\n\n⚡ Tips:\n- Cook on medium flame for better flavor.\n- Rest curry for 10 minutes before serving.";
  }

  return "🍲 Recipe Name:\nRecipe Not Found\n\n👥 Servings:\n2\n\n🛒 Ingredients:\n- Rice - 1 cup\n- Toor dal - 1/2 cup\n- Tomato - 2\n- Turmeric - 1/4 tsp\n- Salt - to taste\n\n👨‍🍳 Cooking Process:\n1. Wash and prep ingredients.\n2. Cook base ingredient properly.\n3. Add spices and simmer to combine flavors.\n4. Adjust consistency and seasoning.\n5. Serve hot in Andhra style.\n\n⚡ Tips:\n- Use fresh ingredients.\n- Adjust spice to taste.";
}

async function getGroqFormattedResponse(message, servings, context) {
  if (!GROQ_API_KEY) {
    throw new Error("GROQ_API_KEY is not set.");
  }

  const response = await fetch(GROQ_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      temperature: 0.2,
      messages: [
        {
          role: "system",
          content:
            "You are a traditional Andhra cooking assistant. Always use Andhra home-style method and authentic Telugu terminology like popu/talimpu where relevant.",
        },
        { role: "user", content: buildGroqRecipePrompt(message, servings, context) },
      ],
    }),
  });

  const payload = await response.json();

  if (!response.ok) {
    const errorMessage = payload?.error?.message || `Groq request failed with status ${response.status}`;
    throw new Error(errorMessage);
  }

  const text = payload?.choices?.[0]?.message?.content;

  if (!text || !String(text).trim()) {
    throw new Error("Groq returned an empty response.");
  }

  return String(text).trim();
}

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS — allow frontend dev server (port 5500) to call APIs
app.use(
  cors({
    origin: [
      "http://localhost:5500",
      "http://127.0.0.1:5500",
      "http://localhost:3000",
      "https://food-recipe-recommendation.vercel.app"
    ],
    credentials: true
  })
);

// Serve static files from the frontend folder (works when running full-stack too)
app.use(express.static(path.join(__dirname, "..", "..", "frontend")));

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const User = mongoose.model("User", userSchema);

function generateToken(user) {
  return jwt.sign(
    {
      userId: user._id.toString(),
      username: user.username,
      email: user.email,
    },
    JWT_SECRET,
    { expiresIn: "7d" }
  );
}

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;

  if (!token) {
    return res.status(401).json({ error: "Not authenticated." });
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    return next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token." });
  }
}

// ─── AUTH API ────────────────────────────────────────────────

// POST /api/signup
app.post("/api/signup", (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required." });
  }

  if (password.length < 6) {
    return res.status(400).json({ error: "Password must be at least 6 characters." });
  }

  try {
    const normalizedEmail = String(email).toLowerCase().trim();

    // Check if email already exists
    User.findOne({ email: normalizedEmail })
      .then((existing) => {
        if (existing) {
          return res.status(409).json({ error: "An account with this email already exists." });
        }

        // Hash password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        return User.create({
          username: username.trim(),
          email: normalizedEmail,
          password: hashedPassword,
        });
      })
      .then((createdUser) => {
        if (!createdUser) {
          return;
        }

        const token = generateToken(createdUser);

        console.log(`✅ New user registered: ${createdUser.username} (${createdUser.email})`);

        return res.status(201).json({
          message: "Account created successfully!",
          token,
          user: {
            id: createdUser._id,
            username: createdUser.username,
            email: createdUser.email,
            created_at: createdUser.created_at,
          },
        });
      })
      .catch((err) => {
        console.error("Signup error:", err);
        res.status(500).json({ error: "Server error during signup." });
      });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Server error during signup." });
  }
});

// POST /api/login
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  try {
    // Find user
    const user = await User.findOne({ email: String(email).toLowerCase().trim() });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    // Compare password
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    const token = generateToken(user);

    console.log(`✅ User logged in: ${user.username} (${user.email})`);

    return res.json({
      message: "Login successful!",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        created_at: user.created_at,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ error: "Server error during login." });
  }
});

// GET /api/me — get current logged-in user
app.get("/api/me", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("_id username email created_at");

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    return res.json({
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        created_at: user.created_at,
      },
    });
  } catch (err) {
    console.error("Auth check error:", err);
    return res.status(500).json({ error: "Server error." });
  }
});

// POST /api/logout
app.post("/api/logout", (_req, res) => {
  // JWT is stateless. Client removes token to logout.
  return res.json({ message: "Logged out successfully." });
});

// POST /api/assistant
app.post("/api/assistant", async (req, res) => {
  const { message, servings = 2, context = "veg" } = req.body || {};

  if (!message || !String(message).trim()) {
    return res.status(400).json({ error: "Message is required." });
  }

  const normalizedMessage = String(message).trim();
  const text = normalizedMessage.toLowerCase().trim();

  if (greetingInputs.has(text)) {
    return res.json({
      data: {
        reply: "👋 Hello boss! Please enter a recipe name.",
      },
    });
  }

  if (text.length < 3) {
    return res.json({
      data: {
        reply: "⚠️ Please enter a valid recipe name.",
      },
    });
  }

  const isFood = foodKeywords.some((word) => text.includes(word));
  if (!isFood) {
    return res.json({
      data: {
        reply: "🍲 Please enter a valid food item (e.g., tomato pappu, pulihora).",
      },
    });
  }

  const normalizedServings = Number(servings) || 2;
  const requestKey = `${context}::${normalizedServings}::${text}`;

  const cached = assistantResponseCache.get(requestKey);
  if (cached && Date.now() - cached.timestamp <= ASSISTANT_CACHE_TTL_MS) {
    return res.json({ data: cached.data });
  }

  let requestPromise = inFlightAssistantRequests.get(requestKey);

  if (!requestPromise) {
    requestPromise = (async () => {
      try {
        const groqReply = await getGroqFormattedResponse(normalizedMessage, normalizedServings, context);
        return {
          mode: "formatted",
          text: groqReply,
        };
      } catch (groqError) {
        console.error("Groq assistant error:", groqError.message);
        throw new Error(groqError.message || "Failed to get a response from Groq assistant.");
      }
    })();

    inFlightAssistantRequests.set(requestKey, requestPromise);
  }

  try {
    let data = await requestPromise;
    data = applyPulihoraPostFix(text, data);
    data = applyReplyNormalization(data);
    data = applyQuerySpecificFixes(text, data);

    if (!hasUsableAssistantData(data)) {
      data = {
        mode: "formatted",
        text: normalizeFormattedReply(getLocalFallbackRecipe(text, normalizedServings, context)),
      };
    }

    assistantResponseCache.set(requestKey, { timestamp: Date.now(), data });
    return res.json({ data });
  } catch (error) {
    const fallbackText = getLocalFallbackRecipe(text, normalizedServings, context);
    const data = {
      mode: "formatted",
      text: normalizeFormattedReply(fallbackText),
    };
    assistantResponseCache.set(requestKey, { timestamp: Date.now(), data });
    return res.json({ data });
  } finally {
    if (inFlightAssistantRequests.get(requestKey) === requestPromise) {
      inFlightAssistantRequests.delete(requestKey);
    }
  }
});

// ─── START SERVER ────────────────────────────────────────────

async function start() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Connected to MongoDB Atlas");

    const server = app.listen(PORT, () => {
      console.log(`\n  ✅ RecipeAI Backend running at:`);
      console.log(`  → API: http://localhost:${PORT}/api`);
      console.log(`  → Full-stack: http://localhost:${PORT}\n`);
    });

    server.on("error", (err) => {
      if (err && err.code === "EADDRINUSE") {
        console.log(`⚠️ Port ${PORT} is already in use. Another backend instance is already running.`);
        process.exit(0);
      }

      console.error("❌ Server startup failed:", err.message || err);
      process.exit(1);
    });
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
}

start();
