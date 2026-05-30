// ─── Non-Veg Recipe Image Map ────────────────────────────────
const recipeImages = {
  chicken:
    "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=1200&q=80",
  biryani:
    "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80",
  mutton:
    "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=1200&q=80",
  fish:
    "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80",
  prawns:
    "https://images.unsplash.com/photo-1565680018434-b513d5e6a462?auto=format&fit=crop&w=1200&q=80",
  egg:
    "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=1200&q=80",
  kebab:
    "https://images.unsplash.com/photo-1562967916-eb82221dfb36?auto=format&fit=crop&w=1200&q=80",
  tandoori:
    "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=1200&q=80",
  curry:
    "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
  rice:
    "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
  mixed:
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
};

function getRecipeImage(recipe) {
  const name = recipe.name.toLowerCase();

  if (name.includes("biryani")) return recipeImages.biryani;
  if (name.includes("prawn") || name.includes("shrimp")) return recipeImages.prawns;
  if (name.includes("fish") || name.includes("meen") || name.includes("chepala")) return recipeImages.fish;
  if (name.includes("egg") || name.includes("anda")) return recipeImages.egg;
  if (name.includes("kebab") || name.includes("seekh") || name.includes("tikka")) return recipeImages.kebab;
  if (name.includes("tandoori")) return recipeImages.tandoori;
  if (name.includes("mutton") || name.includes("lamb") || name.includes("rogan") || name.includes("gosht") || name.includes("mamsam")) return recipeImages.mutton;
  if (name.includes("chicken") || name.includes("kodi") || name.includes("murgh")) return recipeImages.chicken;
  if (name.includes("rice") || name.includes("pulao")) return recipeImages.rice;
  if (name.includes("curry") || name.includes("masala") || name.includes("korma")) return recipeImages.curry;

  // Fallback by category
  if (recipe.collections.includes("chicken")) return recipeImages.chicken;
  if (recipe.collections.includes("mutton")) return recipeImages.mutton;
  if (recipe.collections.includes("fish")) return recipeImages.fish;
  if (recipe.collections.includes("egg")) return recipeImages.egg;

  return recipeImages.mixed;
}

// ─── Non-Veg Recipes ───────────────────────────────────────

const recipes = [
  {
    name: "Grilled Chicken Fiesta",
    collections: ["chicken"],
    summary: "High protein grilled chicken platter with vibrant spices and herbs.",
    ingredients: ["chicken breast", "hung curd", "paprika", "garlic", "lemon", "olive oil", "pepper", "mixed herbs"],
    time: "32 min",
    calories: 580,
    rating: 4.6,
    difficulty: "Medium",
  },
  {
    name: "Spiced Tandoori Platter",
    collections: ["chicken"],
    summary: "Chef special tandoori assortment with smoky char and bold masala.",
    ingredients: ["chicken", "thick curd", "tandoori masala", "ginger-garlic", "kashmiri chili", "kasuri methi", "mustard oil", "lemon"],
    time: "45 min",
    calories: 690,
    rating: 4.9,
    difficulty: "Hard",
  },
  {
    name: "Honey Glazed Salmon",
    collections: ["fish"],
    summary: "Dinner favorite salmon with sweet-spicy honey glaze and herbs.",
    ingredients: ["salmon", "honey", "soy sauce", "garlic", "chili flakes", "lemon", "butter", "pepper"],
    time: "38 min",
    calories: 610,
    rating: 4.8,
    difficulty: "Medium",
  },
  {
    name: "BBQ Chicken Rice Bowl",
    collections: ["chicken"],
    summary: "Quick weekday meal bowl with smoky BBQ chicken and rice.",
    ingredients: ["chicken", "rice", "bbq sauce", "onion", "capsicum", "sweet corn", "black pepper", "olive oil"],
    time: "30 min",
    calories: 560,
    rating: 4.7,
    difficulty: "Medium",
  },
  {
    name: "Chicken Pulusu",
    image: "https://i.ytimg.com/vi/CZDlYuMXNZQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAqL70PaOjo1gsdbsaZW3B7MsSM2w",
    collections: ["chicken", "telugu"],
    summary: "Tangy Telugu chicken pulusu with tamarind-based gravy.",
    ingredients: ["chicken", "tamarind", "onion", "tomato", "red chili", "turmeric", "fenugreek", "curry leaves"],
    time: "42 min",
    calories: 510,
    rating: 4.7,
    difficulty: "Medium",
  },
  {
    name: "Mutton Curry",
    image: "https://www.licious.in/blog/wp-content/uploads/2023/02/shutterstock_2205168763.jpg",
    collections: ["mutton"],
    summary: "Traditional mutton curry slow-cooked in aromatic spices.",
    ingredients: ["mutton", "onion", "tomato", "ginger-garlic", "turmeric", "chili powder", "garam masala", "oil"],
    time: "60 min",
    calories: 620,
    rating: 4.8,
    difficulty: "Medium",
  },
  {
    name: "Mutton Fry",
    image: "https://diningwithayesha.com/wp-content/uploads/2025/07/mutton-fry-recipe.jpg",
    collections: ["mutton"],
    summary: "Peppery mutton fry with curry leaves and roasted spices.",
    ingredients: ["mutton", "onion", "black pepper", "red chili", "ginger-garlic", "fennel", "curry leaves", "oil"],
    time: "55 min",
    calories: 560,
    rating: 4.7,
    difficulty: "Medium",
  },
  {
    name: "Mutton Masala",
    image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Mutton-Masala-min.jpg",
    collections: ["mutton"],
    summary: "Mutton in a thick, spicy masala gravy with deep flavor.",
    ingredients: ["mutton", "onion", "tomato", "ginger-garlic", "garam masala", "coriander", "cumin", "oil"],
    time: "62 min",
    calories: 640,
    rating: 4.8,
    difficulty: "Hard",
  },
  {
    name: "Mutton Pulusu",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNlRnZ5f9xfZykvxIDSVKBDXddUa6zQNwkOQ&s",
    collections: ["mutton", "telugu"],
    summary: "Andhra mutton pulusu cooked in spicy and tangy tamarind gravy.",
    ingredients: ["mutton", "tamarind", "onion", "tomato", "red chili", "turmeric", "mustard seeds", "curry leaves"],
    time: "58 min",
    calories: 590,
    rating: 4.7,
    difficulty: "Medium",
  },
  {
    name: "Mutton Keema Curry",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/08/mutton-keema-recipe.jpg",
    collections: ["mutton"],
    summary: "Minced mutton keema curry simmered with peas and masala.",
    ingredients: ["mutton mince", "peas", "onion", "tomato", "ginger-garlic", "cumin", "garam masala", "coriander"],
    time: "40 min",
    calories: 520,
    rating: 4.6,
    difficulty: "Easy",
  },
  {
    name: "Fish Curry",
    image: "https://vismaifood.com/storage/app/uploads/public/daa/96d/7bc/thumb__1200_0_0_0_auto.jpg",
    collections: ["fish"],
    summary: "Comforting fish curry with onion-tomato and coastal spices.",
    ingredients: ["fish", "onion", "tomato", "ginger-garlic", "turmeric", "chili powder", "coriander", "oil"],
    time: "30 min",
    calories: 390,
    rating: 4.6,
    difficulty: "Easy",
  },
  {
    name: "Fish Pulusu",
    image: "https://yellowchilis.com/wp-content/uploads/2021/04/chepala-pulusu-recipe-nellore-andhra-fish-curry-fish-pulusu-recipe-f.jpg",
    collections: ["fish", "telugu"],
    summary: "Tangy Telugu fish pulusu with tamarind and red chili.",
    ingredients: ["fish", "tamarind", "onion", "tomato", "red chili", "fenugreek seeds", "curry leaves", "oil"],
    time: "32 min",
    calories: 380,
    rating: 4.7,
    difficulty: "Easy",
  },
  {
    name: "Fish Fry",
    image: "https://i0.wp.com/gomathirecipes.com/wp-content/uploads/2022/09/5-20.jpg?resize=500%2C500&ssl=1",
    collections: ["fish", "telugu"],
    summary: "Crispy Andhra fish fry coated in spicy masala.",
    ingredients: ["fish", "red chili powder", "turmeric", "ginger-garlic", "rice flour", "lemon", "salt", "oil"],
    time: "24 min",
    calories: 340,
    rating: 4.7,
    difficulty: "Easy",
  },
  {
    name: "Spicy Fish Curry",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU6DPk7mPhi79YCapaD8JvE1HGULEeNGl-nQ&s",
    collections: ["fish"],
    summary: "Hot and spicy fish curry with robust chili-forward flavor.",
    ingredients: ["fish", "onion", "tomato", "red chili", "green chili", "garlic", "coriander", "oil"],
    time: "34 min",
    calories: 410,
    rating: 4.6,
    difficulty: "Medium",
  },
  {
    name: "Fish Masala",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnLV_Dq4nc6uUZ0RD9IPp96gGGv7JAKDj47A&s",
    collections: ["fish"],
    summary: "Fish cooked in rich masala gravy with aromatic spices.",
    ingredients: ["fish", "onion", "tomato", "ginger-garlic", "garam masala", "cumin", "coriander", "oil"],
    time: "33 min",
    calories: 400,
    rating: 4.6,
    difficulty: "Medium",
  },
];

// ─── State ───────────────────────────────────────────────────

let nonvegRecipes = recipes.map((recipe, index) => ({
  id: `nv-${index}`,
  name: recipe.name,
  collections: recipe.collections,
  summary: recipe.summary,
  ingredients: recipe.ingredients,
  time: recipe.time,
  calories: recipe.calories,
  rating: recipe.rating,
  difficulty: recipe.difficulty,
  image: recipe.image || getRecipeImage(recipe),
}));

const nonvegGrid = document.getElementById("nonvegGrid");
const nonvegCount = document.getElementById("nonvegCount");
const nonvegSearch = document.getElementById("nonvegSearch");
const chips = Array.from(document.querySelectorAll(".chip"));
const chatThread = document.getElementById("chatThread");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const quickPills = Array.from(document.querySelectorAll(".quick-pill"));
const askIngredients = document.getElementById("askIngredients");
const showRandom = document.getElementById("showRandom");
const chatServings = document.getElementById("chatServings");
const ingredientChatModal = document.getElementById("ingredientChatModal");
const closeIngredientChat = document.getElementById("closeIngredientChat");
const clearChatHistory = document.getElementById("clearChatHistory");
const chatCloseTriggers = Array.from(document.querySelectorAll("[data-chat-close]"));

const state = {
  search: "",
  filter: "all",
};

function openIngredientChat() {
  if (!ingredientChatModal) {
    return;
  }

  ingredientChatModal.hidden = false;
  ingredientChatModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("chat-open");
  if (chatInput) {
    chatInput.focus();
  }
}

function closeIngredientChatBox() {
  if (!ingredientChatModal) {
    return;
  }

  ingredientChatModal.hidden = true;
  ingredientChatModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("chat-open");
}

// ─── Render Helpers ──────────────────────────────────────────

function renderCount(count) {
  nonvegCount.textContent = `${count} recipe${count === 1 ? "" : "s"} found`;
}

function matchesFilter(recipe, filter) {
  if (filter === "all") return true;
  return recipe.collections.includes(filter);
}

function getTagLabel(recipe) {
  if (recipe.collections.includes("telugu")) return "Telugu";
  if (recipe.collections.includes("chicken")) return "Chicken";
  if (recipe.collections.includes("mutton")) return "Mutton";
  if (recipe.collections.includes("fish")) return "Seafood";
  if (recipe.collections.includes("egg")) return "Egg";
  return "Non-Veg";
}

function renderRecipes() {
  const query = state.search.trim().toLowerCase();

  const filtered = nonvegRecipes.filter((recipe) => {
    const matchesSearch =
      !query ||
      recipe.name.toLowerCase().includes(query) ||
      recipe.summary.toLowerCase().includes(query) ||
      recipe.ingredients.some((item) => item.toLowerCase().includes(query));

    return matchesSearch && matchesFilter(recipe, state.filter);
  });

  renderCount(filtered.length);

  if (filtered.length === 0) {
    nonvegGrid.innerHTML = `
      <div class="no-results">
        <h3>No recipes found</h3>
        <p>Try dish names like Chicken Biryani, Butter Chicken, Mutton Rogan Josh, or Fish Curry.</p>
      </div>
    `;
    return;
  }

  nonvegGrid.innerHTML = filtered
    .map(
      (recipe, index) => `
        <article class="recipe-card" style="animation-delay: ${index * 16}ms">
          <img class="recipe-card__image" src="${recipe.image}" alt="${recipe.name}" loading="lazy" onerror="this.onerror=null;this.src='${recipeImages.mixed}'" />
          <div class="recipe-card__body">
            <h3 class="recipe-card__title">${recipe.name}</h3>
            <div class="recipe-card__top">
              <span class="recipe-card__tag">${getTagLabel(recipe)}</span>
            </div>
            <div class="recipe-card__meta">
              <span>⭐ ${recipe.rating.toFixed(1)}</span>
              <span>${recipe.time}</span>
              <span>${recipe.calories} kcal</span>
            </div>
            <p class="recipe-card__ingredients">${recipe.summary}</p>
            <div class="recipe-card__actions">
              <button type="button" data-ingredient-target="${recipe.id}">Ingredients</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  Array.from(document.querySelectorAll("[data-ingredient-target]")).forEach((button) => {
    button.addEventListener("click", () => {
      const recipe = nonvegRecipes.find((item) => item.id === button.dataset.ingredientTarget);
      if (recipe) {
        openIngredientChat();
        setActiveRecipe(recipe);
        addBotMessage(`Ingredients for ${recipe.name}: ${recipe.ingredients.join(", ")}.`);
      }
    });
  });
}

// ─── Chat / Assistant ────────────────────────────────────────

function addMessage(text, role = "bot") {
  if (!chatThread) {
    return;
  }

  const bubble = document.createElement("div");
  bubble.className = `chat-bubble chat-bubble--${role}`;
  bubble.textContent = text;
  chatThread.appendChild(bubble);
  chatThread.scrollTop = chatThread.scrollHeight;
}

function formatAssistantResponse(data) {
  if (!data) {
    return "I could not format a response.";
  }

  if (typeof data.text === "string" && data.text.trim()) {
    return data.text.trim();
  }

  if (typeof data.reply === "string" && data.reply.trim()) {
    return data.reply.trim();
  }

  const lines = [];
  const title = data.title || (data.mode === "ingredients" ? "Recipe Suggestions" : "Recipe Assistant");

  if (data.mode === "recipe") {
    lines.push(`Recipe: ${title}`);
    if (data.servings) {
      lines.push("");
      lines.push(`👥 Servings: ${data.servings} persons`);
    }
    lines.push("");

    if (Array.isArray(data.ingredients) && data.ingredients.length) {
      lines.push("🛒 Ingredients:");
      data.ingredients.forEach((item) => {
        const qty = item.quantity ? `: ${item.quantity}` : "";
        lines.push(`- ${item.item}${qty}`);
      });
      lines.push("");
    }

    if (Array.isArray(data.tempering) && data.tempering.length) {
      lines.push("🔥 Tempering:");
      data.tempering.forEach((item) => {
        const qty = item.quantity ? `: ${item.quantity}` : "";
        lines.push(`- ${item.item}${qty}`);
      });
      lines.push("");
    }

    if (Array.isArray(data.steps) && data.steps.length) {
      lines.push("👨‍🍳 Preparation Steps:");
      data.steps.forEach((step, index) => lines.push(`${index + 1}. ${step}`));
      lines.push("");
    }

    if (Array.isArray(data.servingAdjustments) && data.servingAdjustments.length) {
      lines.push("🔄 Quantity Adjustment:");
      data.servingAdjustments.forEach((item) => lines.push(`- ${item.servings} persons → ${item.note}`));
    }

    return lines.join("\n").trim();
  }

  lines.push(`🍽️ Possible Recipes:`);
  lines.push("");

  if (Array.isArray(data.possibleRecipes) && data.possibleRecipes.length) {
    data.possibleRecipes.forEach((recipe, index) => {
      lines.push(`${index + 1}. ${recipe.name}`);
    });
    lines.push("");

    data.possibleRecipes.forEach((recipe) => {
      lines.push(`--------------------------------`);
      lines.push("");
      lines.push(`🍲 Recipe: ${recipe.name}`);
      if (recipe.servings) {
        lines.push("");
        lines.push(`👥 Servings: ${recipe.servings} persons`);
      }
      lines.push("");
      if (Array.isArray(recipe.ingredients) && recipe.ingredients.length) {
        lines.push("🛒 Ingredients Used:");
        recipe.ingredients.forEach((item) => {
          const qty = item.quantity ? `: ${item.quantity}` : "";
          lines.push(`- ${item.item}${qty}`);
        });
        lines.push("");
      }
      if (Array.isArray(recipe.steps) && recipe.steps.length) {
        lines.push("👨‍🍳 Steps:");
        recipe.steps.forEach((step, stepIndex) => lines.push(`${stepIndex + 1}. ${step}`));
        lines.push("");
      }
    });
  }

  if (data.estimatedServings) {
    lines.push(`📊 Estimated Serving:`);
    lines.push(`- Based on given ingredients → Suitable for ${data.estimatedServings}`);
  }

  return lines.join("\n").trim();
}

async function requestAssistantResponse(message) {
  const response = await fetch(`${API_BASE}/api/assistant`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message,
      servings: Number(chatServings?.value || 2),
      context: "nonveg",
    }),
  });

  const payload = await response.json();

  if (!response.ok) {
    throw new Error(payload.error || "Assistant request failed.");
  }

  return payload.data;
}

function addBotMessage(text) {
  addMessage(text, "bot");
}

function addUserMessage(text) {
  addMessage(text, "user");
}

function setActiveRecipe(recipe) {
  if (chatInput) {
    chatInput.value = recipe.name;
  }
}

function parseQuery(query) {
  const normalized = query.trim();
  const servingMatch = normalized.match(/(?:for|serves?)\s+(\d+)\s*(?:persons?|people|servings?)/i);
  const servings = servingMatch ? Number(servingMatch[1]) : Number(chatServings?.value || 2);
  const recipeName = normalized
    .replace(/(?:for|serves?)\s+\d+\s*(?:persons?|people|servings?)/i, "")
    .replace(/\s+/g, " ")
    .trim();

  return { recipeName, servings };
}

function isDetailedPreparationRequest(query) {
  const normalized = String(query || "").toLowerCase();
  return (
    (normalized.includes("expand only") && (normalized.includes("preparation steps") || normalized.includes("cooking process"))) ||
    (normalized.includes("detailed") && normalized.includes("step") && normalized.includes("recipe:")) ||
    (normalized.includes("minimum 8") && normalized.includes("steps") && normalized.includes("recipe:"))
  );
}

function buildRecipeModeText(recipe, servings) {
  const ingredients = Array.isArray(recipe.ingredients) ? recipe.ingredients : [];
  const lines = [];
  const dishName = String(recipe.name || "this dish");
  const dishNameLower = dishName.toLowerCase();
  const proteinLabel = recipe.collections.includes("mutton")
    ? "mutton"
    : recipe.collections.includes("fish")
      ? "fish"
      : recipe.collections.includes("egg")
        ? "eggs"
        : "chicken";
  const hasIngredient = (keyword) => ingredients.some((item) => item.toLowerCase().includes(keyword));
  const isFryStyle = /\bfry\b/.test(dishNameLower);
  const isPulusuStyle = dishNameLower.includes("pulusu");
  const isIguruStyle = dishNameLower.includes("iguru");
  const isMasalaStyle = dishNameLower.includes("masala");
  const isBiryaniStyle = dishNameLower.includes("biryani");
  const isCurryStyle = dishNameLower.includes("curry") || (!isFryStyle && !isBiryaniStyle && !isPulusuStyle && !isIguruStyle && !isMasalaStyle);

  let styleKey = "curry";
  if (isBiryaniStyle) styleKey = "biryani";
  else if (isPulusuStyle) styleKey = "pulusu";
  else if (isIguruStyle) styleKey = "iguru";
  else if (isFryStyle) styleKey = "fry";
  else if (isMasalaStyle) styleKey = "masala";
  else if (isCurryStyle) styleKey = "curry";

  lines.push(`Recipe: ${recipe.name}`);
  lines.push("");
  lines.push(`👥 Servings: ${servings} persons`);
  lines.push("");
  lines.push("🛒 Ingredients:");
  ingredients.forEach((item) => lines.push(`- ${item}`));
  lines.push("");

  const tempering = [];
  if (isPulusuStyle || isCurryStyle || isIguruStyle || isMasalaStyle) {
    tempering.push("Oil: 1.5 to 2 tbsp");
    tempering.push("Mustard seeds: 1/2 tsp");
    if (hasIngredient("cumin")) {
      tempering.push("Cumin: 1/2 tsp");
    }
    if (hasIngredient("garlic") || hasIngredient("ginger-garlic")) {
      tempering.push("Garlic: 3 to 4 cloves (lightly crushed)");
    }
    if (hasIngredient("curry leaves")) {
      tempering.push("Curry leaves: 1 small sprig");
    }
    tempering.push("Dry red chilli: 1 or 2");
  }

  if (tempering.length) {
    lines.push("🔥 Tempering:");
    tempering.forEach((item) => lines.push(`- ${item}`));
    lines.push("");
  }

  lines.push("👨‍🍳 Preparation Steps:");
  lines.push("");
  lines.push("Prep:");
  lines.push(`- Clean and wash the ${proteinLabel} thoroughly, then drain fully so the dish cooks in masala and not in excess water.`);
  if (hasIngredient("onion")) {
    lines.push("- Slice onions thin and even; this helps proper sauteing and gives balanced sweetness to Telugu-style base masala.");
  }
  if (hasIngredient("tomato")) {
    lines.push("- Chop tomatoes fine so they soften quickly and blend smoothly into the gravy or masala coating.");
  }
  if (hasIngredient("ginger-garlic")) {
    lines.push(`- Rub the ${proteinLabel} with a little ginger-garlic paste, salt, and available spice powders, then rest 15 to 20 minutes for better flavor absorption.`);
  }
  if (styleKey === "pulusu") {
    lines.push("- If using tamarind for pulusu profile, soak and extract thick pulp in advance to add at simmering stage.");
  }
  if (styleKey === "biryani") {
    lines.push("- Keep rice and meat prep separate; partially cook rice and keep masala base ready before layering.");
  }
  lines.push("- Keep all spice powders pre-measured near the stove so each stage can be handled without rushing.");
  lines.push("");

  lines.push("Popu/Talimpu:");
  lines.push("- Heat oil on medium flame and start tempering with mustard; once it crackles, add cumin, curry leaves, garlic, and dry red chilli for aroma.");
  if (hasIngredient("onion")) {
    lines.push("- Add sliced onions and saute patiently until soft and light golden; this stage builds depth and balances spice heat.");
  }
  if (hasIngredient("ginger-garlic")) {
    lines.push("- Add ginger-garlic paste and fry until raw smell disappears and oil begins to smell aromatic.");
  }
  if (hasIngredient("tomato")) {
    lines.push("- Add chopped tomatoes and cook till pulpy; continue sauteing until oil starts separating at the edges.");
  }
  if (styleKey === "fry") {
    lines.push("- Keep this base slightly dry; do not add water at this stage so final fry stays roasted and masala-coated.");
  }
  lines.push("");

  lines.push("Cooking/Simmering:");
  if (styleKey === "fry") {
    lines.push(`- Add marinated ${proteinLabel} and fry on medium-high heat, mixing continuously so each piece gets evenly coated with masala.`);
    lines.push("- Add chili and pepper profile spices, then keep tossing until moisture reduces and masala starts clinging as a dry roast.");
    lines.push("- Sprinkle a few drops of oil only when needed; cook open-pan to develop deep roasted flavor without overcooking.");
  } else if (styleKey === "pulusu") {
    lines.push(`- Add ${proteinLabel}, fry with masala for several minutes, then add hot water and cook covered until partly tender.`);
    lines.push("- Add tangy pulusu base while meat is semi-cooked, then mix thoroughly so spicy, sour, and savory notes combine gradually.");
    lines.push("- Keep flame medium and allow gravy to reduce slowly for authentic Telugu pulusu body.");
  } else if (styleKey === "iguru") {
    lines.push(`- Add ${proteinLabel}, roast in masala until sealed, then add only a small splash of water and cover briefly.`);
    lines.push("- Open and cook uncovered again so moisture reduces and dish turns semi-dry with strong masala coating.");
    lines.push("- Continue stirring at intervals to avoid sticking while retaining thick, concentrated Andhra-style masala.");
  } else if (styleKey === "masala") {
    lines.push(`- Add ${proteinLabel} and fry in onion-tomato base until color changes and masala binds to the pieces.`);
    lines.push("- Add spice powders in stages and roast briefly between additions to prevent raw flavor.");
    lines.push("- Add moderate hot water for thick gravy, cover, and cook until meat is tender but still juicy.");
  } else if (styleKey === "biryani") {
    lines.push(`- Cook ${proteinLabel} with masala base till almost done and gravy thick; this should be moist but not watery.`);
    lines.push("- Layer par-cooked rice over masala, sprinkle herbs and finishing fat, then seal for dum-style cooking.");
    lines.push("- Keep low flame and let steam finish both layers so aroma and spice merge well.");
  } else {
    lines.push(`- Add marinated ${proteinLabel} and fry on medium-high flame for a few minutes so masala coats each piece well.`);
    lines.push("- Add chili, coriander, cumin, and garam masala in balance and roast until spice smell turns rich and cooked.");
    lines.push("- Add hot water as needed, cover, and cook on medium flame so protein absorbs masala while staying tender.");
  }
  lines.push("");

  lines.push("Simmering:");
  if (styleKey === "fry") {
    lines.push("- Keep flame low-medium and continue slow tossing so masala roasts evenly without burning at the bottom.");
    lines.push("- Adjust salt and heat profile at this stage; finish when pieces are well-cooked and edges lightly crisp.");
    lines.push("- Switch to low flame for final 2 to 3 minutes to lock aroma and dry texture.");
  } else if (styleKey === "biryani") {
    lines.push("- During dum, keep heat very low so rice finishes gently and masala moisture rises through each layer.");
    lines.push("- Rest covered before opening so grains settle and do not break while mixing.");
    lines.push("- Fluff gently from sides and confirm spice, salt, and moisture are balanced.");
  } else {
    lines.push("- Open and stir in between to avoid sticking; keep flame low-medium until oil floats lightly on top.");
    lines.push("- Adjust salt and spice now, then simmer slowly so masala blends into a smooth home-style gravy or coating.");
    lines.push(`- Continue until the ${proteinLabel} is fully cooked and texture matches the dish style (gravy, semi-dry, or dry roast).`);
  }
  lines.push("");

  lines.push("Final Finish and Serve:");
  lines.push("- Finish with fresh coriander and a quick gentle mix; rest 5 to 10 minutes so flavor settles into the dish.");
  if (styleKey === "fry") {
    lines.push(`- Serve ${dishName} hot as side with pappu-rice, rasam-rice, or roti; add onion and lemon on the side.`);
  } else if (styleKey === "pulusu") {
    lines.push(`- Serve ${dishName} with steamed rice for best Telugu-style pairing; pulusu tastes better after a short resting time.`);
  } else if (styleKey === "biryani") {
    lines.push(`- Serve ${dishName} with raita and salan; avoid overmixing so layered texture stays intact.`);
  } else {
    lines.push(`- Serve ${dishName} hot with rice, chapati, or jowar roti in regular home-style Telugu meal setup.`);
  }
  lines.push("");

  lines.push("🔄 Quantity Adjustment:");
  if (styleKey === "fry") {
    lines.push("- 1 person -> use half ingredients and keep pan wide so pieces roast instead of steaming.");
    lines.push("- 4 persons -> double ingredients and fry in 2 batches for even browning and masala coating.");
    lines.push("- 6 persons -> triple ingredients; add spices in 2 stages and finish with low-flame roasting.");
  } else {
    lines.push("- 1 person -> use half ingredients and reduce oil and chili slightly for balance.");
    lines.push("- 4 persons -> double ingredients and increase covered cooking time by about 8 to 12 minutes.");
    lines.push("- 6 persons -> triple ingredients, add spice base gradually, and adjust salt in final simmer.");
  }

  return lines.join("\n");
}

function buildIngredientModeText(message) {
  const lower = message.toLowerCase();
  const lines = [];
  const matches = nonvegRecipes.filter((recipe) =>
    recipe.ingredients.some((item) => lower.includes(item.toLowerCase())) ||
    lower.includes(recipe.name.toLowerCase())
  );

  lines.push("🍽️ Possible Recipes:");
  lines.push("");

  const topMatches = matches.slice(0, 3);
  if (!topMatches.length) {
    lines.push("1. Chicken Biryani");
    lines.push("2. Butter Chicken");
    lines.push("3. Fish Curry");
    lines.push("");
    lines.push("📊 Estimated Serving:");
    lines.push("- Based on given ingredients → Suitable for 2 persons");
    return lines.join("\n");
  }

  topMatches.forEach((recipe, index) => {
    lines.push(`${index + 1}. ${recipe.name}`);
  });
  lines.push("");

  topMatches.forEach((recipe) => {
    lines.push(`--------------------------------`);
    lines.push("");
    lines.push(`🍲 Recipe: ${recipe.name}`);
    lines.push("");
    lines.push(`👥 Servings: 2 persons`);
    lines.push("");
    lines.push("🛒 Ingredients Used:");
    recipe.ingredients.slice(0, 6).forEach((item) => lines.push(`- ${item}`));
    lines.push("");
    lines.push("👨‍🍳 Steps:");
    lines.push("1. Prepare the ingredients.");
    lines.push("2. Cook the base and add the ingredients.");
    lines.push("3. Mix and finish the dish.");
    lines.push("");
  });

  lines.push("📊 Estimated Serving:");
  lines.push("- Based on given ingredients → Suitable for 2 persons");
  return lines.join("\n");
}

function findRecipe(query) {
  const normalized = query.trim().toLowerCase();
  return nonvegRecipes.find((recipe) => {
    const matchesName = recipe.name.toLowerCase().includes(normalized);
    const matchesIngredient = recipe.ingredients.some((item) => item.toLowerCase().includes(normalized));
    return matchesName || matchesIngredient;
  });
}

async function handleChat(query) {
  const normalized = query.trim();

  if (!normalized) {
    return;
  }

  addUserMessage(normalized);

  if (isDetailedPreparationRequest(normalized)) {
    try {
      const assistantData = await requestAssistantResponse(normalized);
      addBotMessage(formatAssistantResponse(assistantData));
      return;
    } catch (error) {
      console.error("Non-veg assistant detailed step error:", error);
    }
  }

  const { recipeName, servings } = parseQuery(normalized);
  const recipe = findRecipe(recipeName || normalized);

  if (recipe) {
    addBotMessage(buildRecipeModeText(recipe, servings));
    return;
  }

  if (/[,:]|\b(i have|have|ingredients|with)\b/i.test(normalized)) {
    addBotMessage(buildIngredientModeText(normalized));
    return;
  }

  try {
    const assistantData = await requestAssistantResponse(recipeName || normalized);
    addBotMessage(formatAssistantResponse(assistantData));
    return;
  } catch (error) {
    console.error("Non-veg assistant error:", error);
  }

  addBotMessage("I could not find that dish. Try Chicken Biryani, Butter Chicken, Fish Curry, or Mutton Rogan Josh.");
}

// ─── Event Listeners ─────────────────────────────────────────

nonvegSearch.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderRecipes();
});

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    state.filter = chip.dataset.filter;
    chips.forEach((item) => item.classList.toggle("is-active", item === chip));
    renderRecipes();
  });
});

if (chatForm && chatInput) {
  chatForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const value = chatInput.value;
    await handleChat(value);
    chatInput.value = "";
  });
}

quickPills.forEach((pill) => {
  pill.addEventListener("click", async () => {
    const query = pill.dataset.query;
    await handleChat(query);
  });
});

if (askIngredients) {
  askIngredients.addEventListener("click", () => {
    openIngredientChat();
    const recipe = nonvegRecipes[Math.floor(Math.random() * nonvegRecipes.length)];
    setActiveRecipe(recipe);
    handleChat(recipe.name);
    const card = document.querySelector(`[data-ingredient-target="${recipe.id}"]`);
    card?.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

showRandom.addEventListener("click", () => {
  const randomRecipe = nonvegRecipes[Math.floor(Math.random() * nonvegRecipes.length)];
  const card = document.querySelector(`[data-ingredient-target="${randomRecipe.id}"]`);
  card?.scrollIntoView({ behavior: "smooth", block: "center" });
  openIngredientChat();
  setActiveRecipe(randomRecipe);
  handleChat(randomRecipe.name);
});

if (closeIngredientChat) {
  closeIngredientChat.addEventListener("click", closeIngredientChatBox);
}

if (clearChatHistory) {
  clearChatHistory.addEventListener("click", () => {
    if (!chatThread) {
      return;
    }
    chatThread.innerHTML = "";
    if (chatInput) {
      chatInput.value = "";
      chatInput.focus();
    }
  });
}

chatCloseTriggers.forEach((trigger) => {
  trigger.addEventListener("click", closeIngredientChatBox);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeIngredientChatBox();
  }
});

// ─── Init ────────────────────────────────────────────────────

function seedConversation() {
  if (!chatThread) {
    return;
  }
}

function initializeNonVegPage() {
  renderRecipes();
}

initializeNonVegPage();
