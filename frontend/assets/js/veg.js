const recipeImages = {
  breakfast:
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
  rice:
    "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
  curry:
    "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
  snacks:
    "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80",
  sweets:
    "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=1200&q=80",
  paneer:
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
  lentils:
    "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80",
  street:
    "https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=1200&q=80",
  salad:
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
  festival:
    "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=1200&q=80",
  dosa:
    "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=1200&q=80",
  mixed:
    "https://images.unsplash.com/photo-1528715471579-d9a9b90d6f3a?auto=format&fit=crop&w=1200&q=80",
};

const teluguRecipeImages = {
  "Andhra Pesarattu": "https://i0.wp.com/cookingfromheart.com/wp-content/uploads/2023/01/How-to-make-Pesarattu.jpg?resize=684%2C1024&ssl=1",
  "Upma Pesarattu": "https://farm5.static.flickr.com/4093/4909122055_59611dce5c_z.jpg",
  "Gongura Rice": "https://i.ytimg.com/vi/ZZdbA8fbMqw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCA2tMAllRd8-Fb_pD7VWbdY9_JYQ",
  "Gutti Vankaya Kura": "https://cakeworkorange.com/wp-content/uploads/2020/11/stuffed-brinjal-curry-1-500x375.jpg",
  Pulihora: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiUu6Yb-DAZ-0NwoOcCrQENRf-_suYTXcV0g&s",
  "Bendakaya Vepudu": "https://www.vegrecipesofindia.com/wp-content/uploads/2015/12/andhra-bhindi-fry-recipe16.jpg",
  "Dondakaya Fry": "https://i.ytimg.com/vi/hNoISIg2grE/maxresdefault.jpg",
  "Beerakaya Curry": "https://www.masalakorb.com/wp-content/uploads/2017/11/Beerakaya-Palu-Curry-V2.jpg",
  "Aratikaya Pulusu": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5kIOOuYFon0LeVx4q5fwLx0OvojFl-gwefA&s",
  "Tomato Pappu": "https://d1uz88p17r663j.cloudfront.net/original/c86e0ebe52261455364571734c7c245b_Tomato_Pappu_-_Plating.jpg",
  "Kandi Pappu Annam": "https://i.ytimg.com/vi/UxftVNDjLFY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBvA29jMEOfI8asGWTLDY0oFc4Prg",
  "Chintakaya Rice": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDfhgo5ppyJLu6cCjUMlU9gtQh7E1pzalgf61YE5Jo7c-ykaZCU28vGL5XHiVxRYfI_Ct3mNvF8DIjLnza7JZwdT2m8Q0gdH8J8cgkoCMPQrUyK3TcraC7-JeZTqzdpf-LJBngBm-JWhk/s1600/WM+raw+tamarind+thokku18.jpg",
  "Palakura Pappu (Spinach dal)": "https://www.kannammacooks.com/wp-content/uploads/palak-pappu-recipe-2.jpg",
  "Chikkudukaya Kura": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEZM-GS5Q6LDOJ37120zf-b-Lx8fWCCDpXHg&s",
  "Cabbage Curry (Cabbage Vepudu)": "https://www.vidhyashomecooking.com/wp-content/uploads/2020/06/EasyCabbageCurry.jpg",
  "Carrot Beans Curry": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfy8NZcEh2ziggvui_riPGMB4cA6sRH0CJ7g&s",
  "Aloo Tomato Curry": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlN4NI0iwX8r2KvCLJPfL6p7MZ2l1THX0rZA&s",
  "Capsicum Curry": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAwNjQ_lU1TW8HDjE1k5BdXKTB5HSt1QmiA&s",
  "Mushroom Curry (veg special)": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeSADuJCa8RjmiNem_Gc1ZUbbQfAiNWrAs6w&s",
  "Paneer Butter Masala (restaurant style)": "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/paneer-butter-masala-recipe-2-500x500.jpg",
  "Sambar (Andhra style)": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/sambar-480x270.jpg",
  "Rasam (Charu)": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTzl9RbZpzldYUG9CMRydFwg6NfREMPpX9Ng&s",
  "Mixed Vegetable Curry": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8NwpbMCMf9kYlFoRi8v61PRNE7k9WKc9bAQ&s",
  "Senagapappu Vepudu": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/split-chickpeas-senaga-pappu-kobbari-recipe.jpg",
  Bobbatlu: "https://gpullareddysweets.com/cdn/shop/files/Bobbatalu.png?v=1723788954&width=1501",
  "Chakkara Pongali": "https://static.toiimg.com/thumb/55834141.cms?imgsize=368227&width=800&height=800",
  "Nuvvula Laddu": "https://i0.wp.com/ahahomefoods.com/wp-content/uploads/2023/02/Nuvvula-Laddu.png?fit=600%2C600&ssl=1",
  Ponganalu: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvtvfOhHnA1jAT1Lr7UO98RdFCjw-0Rkdfpw&s",
  "Mirapakaya Bajji": "https://i0.wp.com/cookingfromheart.com/wp-content/uploads/2020/05/Mirapakaya-Bajji-3.jpg?resize=683%2C1024&ssl=1",
  "Gongura Pachadi": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThRuPpaOCesLjd5F8U1-9-Y8M2FdKg1sqxXw&s",
  "Ulavacharu (veg base rasam style)": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn7TeerXyzWUnyFcNhIcgtQI2wC5tpvP6obQ&s",
  "Ragi Sangati": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa9dBwCF9J0eWKzr-Dx_p2l7PaOYW7qDWNnA&s",
  "Pachi Pulusu": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvZ_6TXFL1NDlaM78cKTlhLeCafC0s6Up7cg&s",
  "Majjiga Pulusu": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8qc0vJFKAsbggbkhbBoNsuJ6SxuJENJQYFA&s",
  "Sorakaya Curry (Anapakaya kura)": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/bottle-gourd-curry-swasthi-500x375.jpg",
  "Sorakaya Curry": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/bottle-gourd-curry-swasthi-500x375.jpg",
  "Dosakaya Pappu": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQS9P2gMDe3x_dOizuXr5fcrmkobf2MBNnQ&s",
  "Mamidikaya Pappu": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqGZZtxHt9pFsZR7KObdxvNFYIueZBnVV_mQ&s",
  "Kakarkaya Fry": "https://www.indianhealthyrecipes.com/wp-content/uploads/2016/09/bitter-gourd-fry-recipe-500x447.jpg",
  "Panasa Pottu Curry (veg jackfruit)": "https://static.wixstatic.com/media/a14a06_1bb91d5bbc614730b86d4cc5f7f8e55e~mv2.jpg/v1/fill/w_1170,h_1266,al_c/a14a06_1bb91d5bbc614730b86d4cc5f7f8e55e~mv2.jpg",
  "Alasanda Vada": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdDxshLQvSXb-NGJGMfOzn55E94iOvGhdJ2w&s",
  "Sakinalu (Telangana snack)": "https://www.karkarafoods.com/media/items/Karam%20Sakinalu/telangana-snack-karam-sakinalu-main.jpeg",
  Sakinalu: "https://www.karkarafoods.com/media/items/Karam%20Sakinalu/telangana-snack-karam-sakinalu-main.jpeg",
  "Pootharekulu": "https://nativespecial.com/wp-content/uploads/2019/12/Atreyapuram-Nuts-jaggery-Putharekulu-DP.jpg",
  Ariselu: "https://static.toiimg.com/photo/66458173.cms",
  Boorelu: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilisSXbVYTDDMb1BKZnEXEqdOG5jQp1AH7A&s",
  "Jonna Rotte": "https://www.myspicykitchen.net/wp-content/uploads/2016/04/Jonna-Rottelu-1.jpg",
  "Sarva Pindi (Telangana special)": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJGr0Na_vsY-7ewXVY3uRa4sWfDACslDO2BA&s",
  "Sarva Pindi": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJGr0Na_vsY-7ewXVY3uRa4sWfDACslDO2BA&s",
  Punugulu: "https://www.indianrecipeinfo.com/wp-content/uploads/2024/02/Challa-Punugulu-Recipe.jpg",
  "Dibba Rotti": "https://i0.wp.com/cookingfromheart.com/wp-content/uploads/2021/02/Dibba-Rotti-6.jpg?resize=720%2C481&ssl=1",
  "Pesara Pappu Charu": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74XaAfMtf-8kW7G_QkG2w1NQAzyjPytJ5LA&s",
  "Minapa Pappu (plain dal)": "https://source.unsplash.com/1200x800/?urad-dal,curry,indian&sig=40",
  "Minapa Pappu": "https://source.unsplash.com/1200x800/?urad-dal,curry,indian&sig=40",
  "Vankaya Pachadi (Brinjal chutney)": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzv-XqgJ8sCPXqLPGdj2kedPp321n8oFu1sg&s",
  "Andhra Vegetable Biryani": "https://source.unsplash.com/1200x800/?vegetable,biryani,indian&sig=19",
};

const DEFAULT_SPOONACULAR_API_KEY = "620bfe8931b045ed8e564d14589ac0ae";
const SPOONACULAR_API_KEY =
  window.SPOONACULAR_API_KEY || localStorage.getItem("SPOONACULAR_API_KEY") || DEFAULT_SPOONACULAR_API_KEY;
const SPOONACULAR_BASE_URL = "https://api.spoonacular.com";
const ASSISTANT_API_BASE =
  typeof API_BASE === "string" ? API_BASE : window.location.port === "5500" ? "http://localhost:3000" : "";

function getRecipeImage(recipe) {
  if (teluguRecipeImages[recipe.name]) {
    return teluguRecipeImages[recipe.name];
  }

  const name = recipe.name.toLowerCase();

  if (
    name.includes("dosa") ||
    name.includes("idli") ||
    name.includes("vada") ||
    name.includes("upma") ||
    name.includes("pesarattu") ||
    name.includes("ponganalu") ||
    name.includes("chilla")
  ) {
    return recipeImages.breakfast;
  }

  if (
    name.includes("rice") ||
    name.includes("pulihora") ||
    name.includes("puliyogare") ||
    name.includes("curd rice") ||
    name.includes("lemon rice") ||
    name.includes("gongura")
  ) {
    return recipeImages.rice;
  }

  if (
    name.includes("paneer") ||
    name.includes("kurma") ||
    name.includes("bharta") ||
    name.includes("masala") ||
    name.includes("kofta") ||
    name.includes("curry") ||
    name.includes("dal") ||
    name.includes("rajma") ||
    name.includes("chole")
  ) {
    return recipeImages.curry;
  }

  if (
    name.includes("dhokla") ||
    name.includes("khaman") ||
    name.includes("cutlet") ||
    name.includes("chaat") ||
    name.includes("handvo") ||
    name.includes("bajji") ||
    name.includes("thepla") ||
    name.includes("wrap")
  ) {
    return recipeImages.snacks;
  }

  if (
    name.includes("laddu") ||
    name.includes("kesari") ||
    name.includes("bobbatlu") ||
    name.includes("pongali") ||
    name.includes("undhiyu")
  ) {
    return recipeImages.sweets;
  }

  if (name.includes("salad") || name.includes("bowl")) {
    return recipeImages.salad;
  }

  if (recipe.collections.includes("festival")) {
    return recipeImages.festival;
  }

  if (name.includes("gutti") || name.includes("brinjal") || name.includes("bhindi") || name.includes("gobi")) {
    return recipeImages.curry;
  }

  return recipeImages.mixed;
}

async function spoonacularGet(path, params = {}) {
  const query = new URLSearchParams({ ...params, apiKey: SPOONACULAR_API_KEY }).toString();
  const url = `${SPOONACULAR_BASE_URL}${path}?${query}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Spoonacular request failed: ${response.status}`);
  }

  return response.json();
}

function mapSpoonacularRecipe(recipe, index) {
  const ingredients = (recipe.extendedIngredients || []).map((item) => item.nameClean || item.name).filter(Boolean);
  const dietTags = (recipe.diets || []).map((item) => item.toLowerCase());

  return {
    id: `api-${recipe.id || index}`,
    name: recipe.title || `Veg Recipe ${index + 1}`,
    collections: [
      "indian",
      recipe.readyInMinutes && recipe.readyInMinutes <= 25 ? "quick" : "",
      recipe.vegetarian ? "vegetarian" : "",
    ].filter(Boolean),
    summary: (recipe.summary || "").replace(/<[^>]+>/g, "").slice(0, 120) || "Indian vegetarian recipe from Spoonacular.",
    ingredients: ingredients.length ? ingredients : ["See full ingredients"],
    time: `${recipe.readyInMinutes || 30} min`,
    calories: Math.round(recipe.nutrition?.nutrients?.find((n) => n.name === "Calories")?.amount || 320),
    rating: recipe.spoonacularScore ? Math.max(3.8, Math.min(5, recipe.spoonacularScore / 20)).toFixed(1) * 1 : 4.5,
    difficulty: recipe.readyInMinutes && recipe.readyInMinutes <= 25 ? "Easy" : "Medium",
    image: recipe.image || getRecipeImage({ name: recipe.title || "", collections: dietTags }),
    spoonacularId: recipe.id,
  };
}

async function loadVegRecipesFromApi() {
  if (!SPOONACULAR_API_KEY) {
    return;
  }

  const data = await spoonacularGet("/recipes/complexSearch", {
    diet: "vegetarian",
    cuisine: "indian",
    number: 50,
    addRecipeInformation: true,
    fillIngredients: true,
    instructionsRequired: false,
  });

  if (data && Array.isArray(data.results) && data.results.length) {
    vegRecipes = data.results.map(mapSpoonacularRecipe);
  }
}

const recipes = [
  {
    name: "Herb Roasted Veg Bowl",
    collections: ["quick"],
    summary: "Balanced lunch bowl with roasted vegetables and herb seasoning.",
    ingredients: ["broccoli", "zucchini", "carrot", "bell pepper", "olive oil", "mixed herbs", "garlic", "salt"],
    time: "20 min",
    calories: 410,
    rating: 4.8,
    difficulty: "Easy",
  },
  {
    name: "Creamy Mushroom Pasta",
    collections: [],
    summary: "Comfort classic with sauteed mushrooms in creamy herb sauce.",
    ingredients: ["pasta", "mushroom", "cream", "garlic", "pepper", "parmesan", "olive oil", "parsley"],
    time: "26 min",
    calories: 540,
    rating: 4.7,
    difficulty: "Easy",
  },
  {
    name: "Avocado Citrus Salad",
    collections: ["quick"],
    summary: "Fresh and light salad with avocado, citrus, and crunchy greens.",
    ingredients: ["avocado", "orange", "lettuce", "cucumber", "cherry tomato", "olive oil", "lemon juice", "pepper"],
    time: "15 min",
    calories: 320,
    rating: 4.5,
    difficulty: "Easy",
  },
  {
    name: "Paneer Tikka Wrap",
    collections: ["quick"],
    summary: "Street food inspired wrap with smoky paneer tikka and veggies.",
    ingredients: ["paneer", "whole wheat wrap", "onion", "capsicum", "hung curd", "tandoori masala", "mint chutney", "oil"],
    time: "24 min",
    calories: 470,
    rating: 4.6,
    difficulty: "Easy",
  },
  {
    name: "Mediterranean Grain Bowl",
    collections: ["quick"],
    summary: "Wholesome and filling grain bowl with veggies and light dressing.",
    ingredients: ["quinoa", "chickpeas", "cucumber", "tomato", "olives", "feta", "olive oil", "lemon"],
    time: "18 min",
    calories: 380,
    rating: 4.4,
    difficulty: "Easy",
  },
  {
    name: "Bendakaya Vepudu",
    collections: ["telugu", "quick"],
    summary: "Crispy okra fry with a light spice coating.",
    ingredients: ["okra", "red chili powder", "coriander powder", "turmeric", "oil", "salt"],
    time: "16 min",
    calories: 240,
    rating: 4.6,
    difficulty: "Easy",
  },
  {
    name: "Dondakaya Fry",
    collections: ["telugu", "quick"],
    summary: "Tindora stir fry with roasted spices.",
    ingredients: ["dondakaya", "mustard seeds", "cumin", "chili powder", "curry leaves", "oil"],
    time: "17 min",
    calories: 230,
    rating: 4.5,
    difficulty: "Easy",
  },
  {
    name: "Beerakaya Curry",
    collections: ["telugu"],
    summary: "Ridge gourd curry cooked in a mellow gravy.",
    ingredients: ["ridge gourd", "onion", "tomato", "coconut", "mustard", "curry leaves"],
    time: "25 min",
    calories: 310,
    rating: 4.6,
    difficulty: "Easy",
  },
  {
    name: "Aratikaya Pulusu",
    collections: ["telugu"],
    summary: "Raw banana curry with tamarind and sesame flavor.",
    ingredients: ["raw banana", "tamarind", "sesame", "chili", "jaggery", "mustard seeds"],
    time: "28 min",
    calories: 330,
    rating: 4.7,
    difficulty: "Medium",
  },
  {
    name: "Tomato Pappu",
    collections: ["telugu", "quick"],
    summary: "Andhra-style lentils with tomato and garlic.",
    ingredients: ["toor dal", "tomato", "garlic", "ghee", "mustard", "curry leaves"],
    time: "22 min",
    calories: 360,
    rating: 4.8,
    difficulty: "Easy",
  },
  {
    name: "Kandi Pappu Annam",
    collections: ["telugu"],
    summary: "Comfort rice with lentils and ghee tempering.",
    ingredients: ["rice", "toor dal", "ghee", "cumin", "pepper", "turmeric"],
    time: "26 min",
    calories: 420,
    rating: 4.7,
    difficulty: "Easy",
  },
  {
    name: "Chintakaya Rice",
    collections: ["telugu", "quick"],
    summary: "Sour raw tamarind rice with sesame and peanuts.",
    ingredients: ["rice", "raw tamarind", "sesame", "peanuts", "chili", "mustard seeds"],
    time: "20 min",
    calories: 370,
    rating: 4.6,
    difficulty: "Easy",
  },
  {
    name: "Palakura Pappu (Spinach dal)",
    collections: ["telugu", "quick"],
    summary: "Comforting spinach dal with garlic tempering.",
    ingredients: ["toor dal", "spinach", "tomato", "garlic", "mustard seeds", "curry leaves"],
    time: "24 min",
    calories: 340,
    rating: 4.7,
    difficulty: "Easy",
  },
  {
    name: "Chikkudukaya Kura",
    collections: ["telugu"],
    summary: "Broad beans curry with coconut and mild spices.",
    ingredients: ["broad beans", "onion", "tomato", "coconut", "green chili", "cumin"],
    time: "26 min",
    calories: 310,
    rating: 4.6,
    difficulty: "Easy",
  },
  {
    name: "Cabbage Curry (Cabbage Vepudu)",
    collections: ["telugu", "quick"],
    summary: "Simple stir-fried cabbage with Andhra seasoning.",
    ingredients: ["cabbage", "mustard seeds", "green chili", "turmeric", "curry leaves", "grated coconut"],
    time: "18 min",
    calories: 230,
    rating: 4.5,
    difficulty: "Easy",
  },
  {
    name: "Carrot Beans Curry",
    collections: ["telugu", "quick"],
    summary: "Carrot and beans dry curry for everyday meals.",
    ingredients: ["carrot", "beans", "onion", "mustard seeds", "curry leaves", "coriander"],
    time: "20 min",
    calories: 250,
    rating: 4.6,
    difficulty: "Easy",
  },
  {
    name: "Aloo Tomato Curry",
    collections: ["telugu", "quick"],
    summary: "Potato curry simmered in tangy tomato gravy.",
    ingredients: ["potato", "tomato", "onion", "ginger garlic", "red chili powder", "garam masala"],
    time: "22 min",
    calories: 320,
    rating: 4.6,
    difficulty: "Easy",
  },
  {
    name: "Capsicum Curry",
    collections: ["telugu", "quick"],
    summary: "Flavorful bell pepper curry with roasted spices.",
    ingredients: ["capsicum", "onion", "tomato", "peanut powder", "sesame", "curry leaves"],
    time: "21 min",
    calories: 280,
    rating: 4.5,
    difficulty: "Easy",
  },
  {
    name: "Mushroom Curry (veg special)",
    collections: ["telugu"],
    summary: "Home-style mushroom curry with rich masala base.",
    ingredients: ["mushroom", "onion", "tomato", "ginger garlic", "coriander powder", "cream"],
    time: "27 min",
    calories: 360,
    rating: 4.7,
    difficulty: "Medium",
  },
  {
    name: "Paneer Butter Masala (restaurant style)",
    collections: ["telugu"],
    summary: "Restaurant-style paneer curry in buttery tomato gravy.",
    ingredients: ["paneer", "tomato", "butter", "cashews", "cream", "kasuri methi"],
    time: "32 min",
    calories: 520,
    rating: 4.8,
    difficulty: "Medium",
  },
  {
    name: "Sambar (Andhra style)",
    collections: ["telugu"],
    summary: "Tangy Andhra sambar with dal and vegetables.",
    ingredients: ["toor dal", "drumstick", "tomato", "tamarind", "sambar powder", "curry leaves"],
    time: "30 min",
    calories: 300,
    rating: 4.7,
    difficulty: "Easy",
  },
  {
    name: "Rasam (Charu)",
    collections: ["telugu", "quick"],
    summary: "Peppery and tangy charu served hot with rice.",
    ingredients: ["tomato", "tamarind", "garlic", "pepper", "cumin", "curry leaves"],
    time: "16 min",
    calories: 120,
    rating: 4.6,
    difficulty: "Easy",
  },
  {
    name: "Mixed Vegetable Curry",
    collections: ["telugu"],
    summary: "Colorful mixed vegetable curry with balanced spices.",
    ingredients: ["carrot", "beans", "peas", "potato", "onion", "tomato"],
    time: "25 min",
    calories: 330,
    rating: 4.6,
    difficulty: "Easy",
  },
  {
    name: "Senagapappu Vepudu",
    collections: ["telugu", "quick"],
    summary: "Roasted chana dal stir fry with curry leaves.",
    ingredients: ["chana dal", "green chili", "curry leaves", "mustard", "oil", "salt"],
    time: "15 min",
    calories: 220,
    rating: 4.5,
    difficulty: "Easy",
  },
  {
    name: "Bobbatlu",
    collections: ["telugu", "festival"],
    summary: "Sweet stuffed flatbread with jaggery and dal filling.",
    ingredients: ["maida", "chana dal", "jaggery", "cardamom", "ghee", "turmeric"],
    time: "40 min",
    calories: 480,
    rating: 4.9,
    difficulty: "Medium",
  },
  {
    name: "Chakkara Pongali",
    collections: ["telugu", "festival"],
    summary: "Sweet rice pudding with moong dal and ghee.",
    ingredients: ["rice", "moong dal", "jaggery", "ghee", "cardamom", "cashews"],
    time: "30 min",
    calories: 390,
    rating: 4.8,
    difficulty: "Easy",
  },
  {
    name: "Nuvvula Laddu",
    collections: ["telugu", "festival"],
    summary: "Sesame laddus with jaggery and ghee.",
    ingredients: ["sesame", "jaggery", "ghee", "cardamom", "dry coconut", "nuts"],
    time: "20 min",
    calories: 260,
    rating: 4.7,
    difficulty: "Easy",
  },
  {
    name: "Ponganalu",
    collections: ["telugu", "quick"],
    summary: "Soft paniyaram balls with onion and chili.",
    ingredients: ["idli batter", "onion", "green chili", "coriander", "mustard", "oil"],
    time: "18 min",
    calories: 240,
    rating: 4.6,
    difficulty: "Easy",
  },
  {
    name: "Mirapakaya Bajji",
    collections: ["telugu", "quick"],
    summary: "Stuffed green chili fritters from Andhra street food.",
    ingredients: ["large chilies", "besan", "ajwain", "turmeric", "salt", "oil"],
    time: "17 min",
    calories: 280,
    rating: 4.5,
    difficulty: "Easy",
  },
  {
    name: "Andhra Vegetable Biryani",
    collections: ["telugu"],
    summary: "Fragrant rice biryani with fresh vegetables and spices.",
    ingredients: ["basmati rice", "mixed vegetables", "mint", "yogurt", "whole spices", "fried onions"],
    time: "42 min",
    calories: 540,
    rating: 4.8,
    difficulty: "Medium",
  },
  {
    name: "Gongura Pachadi",
    collections: ["telugu", "quick"],
    summary: "Tangy gongura chutney for rice and rotis.",
    ingredients: ["gongura leaves", "red chili", "garlic", "sesame", "tamarind", "salt"],
    time: "15 min",
    calories: 140,
    rating: 4.7,
    difficulty: "Easy",
  },
  {
    name: "South Indian Curd Rice",
    collections: ["indian", "quick"],
    summary: "Cooling curd rice with ginger and tempered mustard.",
    ingredients: ["rice", "curd", "mustard seeds", "green chili", "ginger", "curry leaves"],
    time: "12 min",
    calories: 300,
    rating: 4.8,
    difficulty: "Easy",
  },
  {
    name: "Lemon Rice",
    collections: ["indian", "quick"],
    summary: "Bright lemon rice with crunchy peanuts.",
    ingredients: ["rice", "lemon", "peanuts", "mustard seeds", "curry leaves", "turmeric"],
    time: "14 min",
    calories: 320,
    rating: 4.7,
    difficulty: "Easy",
  },
  {
    name: "Vegetable Biryani",
    collections: ["indian"],
    summary: "Layered biryani with mixed vegetables and herbs.",
    ingredients: ["basmati rice", "carrot", "beans", "peas", "mint", "biryani masala"],
    time: "45 min",
    calories: 560,
    rating: 4.8,
    difficulty: "Medium",
  },
  {
    name: "Paneer Butter Masala",
    collections: ["indian"],
    summary: "Creamy paneer curry with rich tomato gravy.",
    ingredients: ["paneer", "tomato", "butter", "cream", "cashews", "kasuri methi"],
    time: "30 min",
    calories: 520,
    rating: 4.9,
    difficulty: "Medium",
  },
  {
    name: "Palak Paneer",
    collections: ["indian"],
    summary: "Spinach curry with soft paneer cubes.",
    ingredients: ["spinach", "paneer", "garlic", "onion", "cream", "spices"],
    time: "28 min",
    calories: 470,
    rating: 4.8,
    difficulty: "Medium",
  },
  {
    name: "Kadhai Paneer",
    collections: ["indian"],
    summary: "Paneer tossed with bell peppers in a kadhai masala.",
    ingredients: ["paneer", "capsicum", "tomato", "onion", "kadhai masala", "oil"],
    time: "26 min",
    calories: 490,
    rating: 4.7,
    difficulty: "Medium",
  },
  {
    name: "Dal Tadka",
    collections: ["indian", "quick"],
    summary: "Golden tempered lentils with garlic and ghee.",
    ingredients: ["toor dal", "ghee", "garlic", "cumin", "red chili", "tomato"],
    time: "20 min",
    calories: 340,
    rating: 4.8,
    difficulty: "Easy",
  },
  {
    name: "Chole Masala",
    collections: ["indian"],
    summary: "Spiced chickpea curry with bold North Indian flavor.",
    ingredients: ["chickpeas", "onion", "tomato", "ginger", "garam masala", "tea bag"],
    time: "34 min",
    calories: 430,
    rating: 4.8,
    difficulty: "Medium",
  },
  {
    name: "Rajma Masala",
    collections: ["indian"],
    summary: "Comforting kidney bean curry with aromatic spices.",
    ingredients: ["rajma", "onion", "tomato", "ginger", "garam masala", "butter"],
    time: "36 min",
    calories: 450,
    rating: 4.7,
    difficulty: "Medium",
  },
  {
    name: "Aloo Gobi",
    collections: ["indian", "quick"],
    summary: "Dry potato and cauliflower sabzi with spices.",
    ingredients: ["potato", "cauliflower", "turmeric", "cumin", "coriander", "oil"],
    time: "22 min",
    calories: 290,
    rating: 4.6,
    difficulty: "Easy",
  },
  {
    name: "Baingan Bharta",
    collections: ["indian"],
    summary: "Smoky roasted eggplant mash with onions and tomatoes.",
    ingredients: ["eggplant", "onion", "tomato", "garlic", "cumin", "coriander"],
    time: "30 min",
    calories: 260,
    rating: 4.7,
    difficulty: "Medium",
  },
  {
    name: "Pav Bhaji",
    collections: ["indian"],
    summary: "Butter-rich vegetable mash with toasted buns.",
    ingredients: ["potato", "peas", "capsicum", "butter", "pav bhaji masala", "bun"],
    time: "32 min",
    calories: 510,
    rating: 4.8,
    difficulty: "Medium",
  },
  {
    name: "Masala Dosa",
    collections: ["indian", "quick"],
    summary: "Crispy dosa filled with spiced potato masala.",
    ingredients: ["dosa batter", "potato", "mustard seeds", "onion", "curry leaves", "oil"],
    time: "25 min",
    calories: 420,
    rating: 4.9,
    difficulty: "Medium",
  },
  {
    name: "Idli Sambar",
    collections: ["indian", "quick"],
    summary: "Soft idlis served with fragrant sambar.",
    ingredients: ["idli batter", "toor dal", "mixed vegetables", "sambar powder", "tamarind", "curry leaves"],
    time: "24 min",
    calories: 330,
    rating: 4.8,
    difficulty: "Easy",
  },
  {
    name: "Medu Vada",
    collections: ["indian"],
    summary: "Crisp lentil doughnuts with coconut chutney.",
    ingredients: ["urad dal", "ginger", "curry leaves", "green chili", "pepper", "oil"],
    time: "28 min",
    calories: 310,
    rating: 4.7,
    difficulty: "Medium",
  },
  {
    name: "Vegetable Upma",
    collections: ["indian", "quick"],
    summary: "Comforting semolina breakfast with vegetables.",
    ingredients: ["rava", "carrot", "peas", "mustard seeds", "ginger", "curry leaves"],
    time: "15 min",
    calories: 280,
    rating: 4.6,
    difficulty: "Easy",
  },
  {
    name: "Rava Kesari",
    collections: ["festival"],
    summary: "Sweet semolina dessert with saffron and ghee.",
    ingredients: ["rava", "sugar", "ghee", "saffron", "cashews", "cardamom"],
    time: "18 min",
    calories: 360,
    rating: 4.7,
    difficulty: "Easy",
  },
  {
    name: "Methi Thepla",
    collections: ["indian", "quick"],
    summary: "Spiced fenugreek flatbread from Gujarat.",
    ingredients: ["wheat flour", "methi", "curd", "turmeric", "ajwain", "oil"],
    time: "20 min",
    calories: 260,
    rating: 4.6,
    difficulty: "Easy",
  },
  {
    name: "Dhokla",
    collections: ["indian", "quick"],
    summary: "Soft steamed snack with mustard and coriander tempering.",
    ingredients: ["besan", "yogurt", "eno", "mustard seeds", "curry leaves", "coriander"],
    time: "22 min",
    calories: 210,
    rating: 4.8,
    difficulty: "Easy",
  },
  {
    name: "Khaman",
    collections: ["indian", "quick"],
    summary: "Light and fluffy savory steamed cake.",
    ingredients: ["besan", "sugar", "lemon", "eno", "mustard seeds", "curry leaves"],
    time: "18 min",
    calories: 200,
    rating: 4.7,
    difficulty: "Easy",
  },
  {
    name: "Undhiyu",
    collections: ["festival"],
    summary: "Gujarati mixed vegetable feast cooked slowly with spices.",
    ingredients: ["surti papdi", "sweet potato", "brinjal", "methi muthiya", "coconut", "peanut"],
    time: "55 min",
    calories: 540,
    rating: 4.8,
    difficulty: "Hard",
  },
  {
    name: "Handvo",
    collections: ["indian"],
    summary: "Savory baked lentil and rice cake with sesame topping.",
    ingredients: ["rice", "lentils", "bottle gourd", "sesame", "yogurt", "spices"],
    time: "40 min",
    calories: 410,
    rating: 4.6,
    difficulty: "Medium",
  },
  {
    name: "Bharwa Bhindi",
    collections: ["indian", "quick"],
    summary: "Stuffed okra with tangy spice blend.",
    ingredients: ["okra", "amchur", "coriander", "cumin", "garam masala", "oil"],
    time: "24 min",
    calories: 250,
    rating: 4.7,
    difficulty: "Easy",
  },
  {
    name: "Corn Chaat",
    collections: ["indian", "quick"],
    summary: "Street-style sweet corn with chaat masala and lemon.",
    ingredients: ["sweet corn", "onion", "tomato", "lemon", "chaat masala", "coriander"],
    time: "10 min",
    calories: 180,
    rating: 4.5,
    difficulty: "Easy",
  },
  {
    name: "Vegetable Cutlet",
    collections: ["indian", "quick"],
    summary: "Crispy mixed vegetable patties for tea-time.",
    ingredients: ["potato", "carrot", "peas", "bread crumbs", "pepper", "oil"],
    time: "25 min",
    calories: 320,
    rating: 4.6,
    difficulty: "Medium",
  },
  {
    name: "Stuffed Paratha",
    collections: ["indian"],
    summary: "Flaky stuffed flatbread with spiced filling.",
    ingredients: ["wheat flour", "potato", "cumin", "chili", "coriander", "ghee"],
    time: "28 min",
    calories: 440,
    rating: 4.7,
    difficulty: "Medium",
  },
  {
    name: "Mushroom Masala",
    collections: ["indian"],
    summary: "Creamy mushroom curry in a spiced gravy.",
    ingredients: ["mushroom", "tomato", "onion", "cashews", "cream", "garam masala"],
    time: "27 min",
    calories: 390,
    rating: 4.8,
    difficulty: "Medium",
  },
  {
    name: "Matar Paneer",
    collections: ["indian"],
    summary: "Green peas and paneer in a rich onion-tomato gravy.",
    ingredients: ["paneer", "peas", "tomato", "onion", "ginger", "spices"],
    time: "30 min",
    calories: 500,
    rating: 4.8,
    difficulty: "Medium",
  },
  {
    name: "Veg Kolhapuri",
    collections: ["indian"],
    summary: "Spicy Maharashtrian vegetable curry.",
    ingredients: ["mixed vegetables", "coconut", "red chili", "garam masala", "onion", "tomato"],
    time: "34 min",
    calories: 430,
    rating: 4.7,
    difficulty: "Medium",
  },
  {
    name: "Sambar Rice",
    collections: ["indian", "quick"],
    summary: "Comforting rice and sambar combination.",
    ingredients: ["rice", "toor dal", "drumstick", "sambar powder", "tamarind", "curry leaves"],
    time: "28 min",
    calories: 360,
    rating: 4.8,
    difficulty: "Easy",
  },
  {
    name: "Puliyogare",
    collections: ["indian", "quick"],
    summary: "South Indian tamarind rice with roasted spices.",
    ingredients: ["rice", "tamarind", "peanuts", "sesame", "jaggery", "spices"],
    time: "20 min",
    calories: 370,
    rating: 4.7,
    difficulty: "Easy",
  },
  {
    name: "Coconut Rice",
    collections: ["indian", "quick"],
    summary: "Fragrant rice tossed with coconut and cashews.",
    ingredients: ["rice", "coconut", "cashews", "mustard seeds", "curry leaves", "green chili"],
    time: "16 min",
    calories: 340,
    rating: 4.6,
    difficulty: "Easy",
  },
  {
    name: "Vegetable Kurma",
    collections: ["indian"],
    summary: "Mixed vegetable kurma with coconut gravy.",
    ingredients: ["carrot", "beans", "peas", "coconut", "poppy seeds", "spices"],
    time: "29 min",
    calories: 420,
    rating: 4.7,
    difficulty: "Medium",
  },
  {
    name: "Moong Dal Chilla",
    collections: ["indian", "quick"],
    summary: "Protein-rich savory pancake for a light meal.",
    ingredients: ["moong dal", "ginger", "green chili", "coriander", "onion", "spices"],
    time: "18 min",
    calories: 280,
    rating: 4.8,
    difficulty: "Easy",
  },
  {
    name: "Lauki Kofta",
    collections: ["indian"],
    summary: "Bottle gourd koftas in creamy curry.",
    ingredients: ["lauki", "paneer", "tomato", "cream", "cashews", "garam masala"],
    time: "38 min",
    calories: 430,
    rating: 4.6,
    difficulty: "Medium",
  },
  {
    name: "Ulavacharu (veg base rasam style)",
    collections: ["telugu"],
    summary: "Horse gram rasam-style soup with tangy and smoky flavor.",
    ingredients: ["horse gram", "tamarind", "garlic", "green chili", "cumin", "coriander"],
    time: "32 min",
    calories: 180,
    rating: 4.7,
    difficulty: "Medium",
  },
  {
    name: "Ragi Sangati",
    collections: ["telugu"],
    summary: "Traditional finger millet mudde served with dal or curry.",
    ingredients: ["ragi flour", "rice", "water", "salt"],
    time: "24 min",
    calories: 320,
    rating: 4.8,
    difficulty: "Easy",
  },
  {
    name: "Pachi Pulusu",
    collections: ["telugu", "quick"],
    summary: "No-cook tamarind broth with onion and green chili.",
    ingredients: ["tamarind", "onion", "green chili", "jaggery", "coriander", "salt"],
    time: "10 min",
    calories: 90,
    rating: 4.6,
    difficulty: "Easy",
  },
  {
    name: "Majjiga Pulusu",
    collections: ["telugu"],
    summary: "Spiced buttermilk curry with mild vegetables.",
    ingredients: ["buttermilk", "besan", "turmeric", "green chili", "curry leaves", "mustard"],
    time: "20 min",
    calories: 190,
    rating: 4.6,
    difficulty: "Easy",
  },
  {
    name: "Sorakaya Curry (Anapakaya kura)",
    collections: ["telugu"],
    summary: "Bottle gourd curry with simple home-style seasoning.",
    ingredients: ["bottle gourd", "onion", "tomato", "green chili", "cumin", "curry leaves"],
    time: "22 min",
    calories: 220,
    rating: 4.5,
    difficulty: "Easy",
  },
  {
    name: "Dosakaya Pappu",
    collections: ["telugu"],
    summary: "Yellow cucumber dal with mild tang and spice.",
    ingredients: ["toor dal", "dosakaya", "green chili", "turmeric", "tamarind", "mustard"],
    time: "28 min",
    calories: 300,
    rating: 4.7,
    difficulty: "Easy",
  },
  {
    name: "Mamidikaya Pappu",
    collections: ["telugu", "seasonal"],
    summary: "Raw mango dal with tangy summer flavor.",
    ingredients: ["toor dal", "raw mango", "green chili", "turmeric", "mustard", "curry leaves"],
    time: "27 min",
    calories: 295,
    rating: 4.8,
    difficulty: "Easy",
  },
  {
    name: "Kakarkaya Fry",
    collections: ["telugu", "quick"],
    summary: "Crispy bitter gourd fry with spice mix.",
    ingredients: ["bitter gourd", "onion", "red chili powder", "coriander powder", "oil", "salt"],
    time: "19 min",
    calories: 230,
    rating: 4.5,
    difficulty: "Easy",
  },
  {
    name: "Panasa Pottu Curry (veg jackfruit)",
    collections: ["telugu"],
    summary: "Tender jackfruit curry cooked in aromatic masala.",
    ingredients: ["raw jackfruit", "onion", "tomato", "ginger garlic", "garam masala", "coriander"],
    time: "36 min",
    calories: 340,
    rating: 4.8,
    difficulty: "Medium",
  },
  {
    name: "Alasanda Vada",
    collections: ["telugu", "quick"],
    summary: "Cowpea fritters, crispy outside and soft inside.",
    ingredients: ["alasanda", "onion", "green chili", "ginger", "curry leaves", "oil"],
    time: "30 min",
    calories: 360,
    rating: 4.7,
    difficulty: "Medium",
  },
  {
    name: "Sakinalu (Telangana snack)",
    collections: ["telugu", "festival"],
    summary: "Traditional Telangana festive rice flour snack.",
    ingredients: ["rice flour", "sesame", "ajwain", "butter", "salt", "oil"],
    time: "34 min",
    calories: 410,
    rating: 4.7,
    difficulty: "Medium",
  },
  {
    name: "Pootharekulu",
    collections: ["telugu", "festival"],
    summary: "Paper-thin sweet sheets with sugar and ghee filling.",
    ingredients: ["rice starch sheets", "powdered sugar", "ghee", "dry fruits"],
    time: "40 min",
    calories: 390,
    rating: 4.9,
    difficulty: "Hard",
  },
  {
    name: "Ariselu",
    collections: ["telugu", "festival"],
    summary: "Jaggery and rice flour festive sweet discs.",
    ingredients: ["rice flour", "jaggery", "sesame", "ghee", "oil"],
    time: "30 min",
    calories: 420,
    rating: 4.8,
    difficulty: "Medium",
  },
  {
    name: "Boorelu",
    collections: ["telugu", "festival"],
    summary: "Sweet stuffed fried dumplings with chana dal filling.",
    ingredients: ["chana dal", "jaggery", "rice flour", "urad batter", "cardamom", "oil"],
    time: "38 min",
    calories: 430,
    rating: 4.8,
    difficulty: "Medium",
  },
  {
    name: "Jonna Rotte",
    collections: ["telugu"],
    summary: "Rustic sorghum flatbread served with chutney.",
    ingredients: ["jowar flour", "hot water", "salt"],
    time: "22 min",
    calories: 280,
    rating: 4.6,
    difficulty: "Easy",
  },
  {
    name: "Sarva Pindi (Telangana special)",
    collections: ["telugu", "quick"],
    summary: "Spiced rice flour pancake with peanuts and chilies.",
    ingredients: ["rice flour", "peanuts", "green chili", "curry leaves", "onion", "sesame"],
    time: "25 min",
    calories: 330,
    rating: 4.7,
    difficulty: "Easy",
  },
  {
    name: "Punugulu",
    collections: ["telugu", "quick"],
    summary: "Crispy bite-size fritters from dosa batter.",
    ingredients: ["idli dosa batter", "onion", "green chili", "coriander", "curry leaves", "oil"],
    time: "18 min",
    calories: 310,
    rating: 4.7,
    difficulty: "Easy",
  },
  {
    name: "Dibba Rotti",
    collections: ["telugu"],
    summary: "Thick fermented rice pancake with soft center.",
    ingredients: ["rice", "urad dal", "green chili", "ginger", "cumin", "oil"],
    time: "32 min",
    calories: 340,
    rating: 4.6,
    difficulty: "Medium",
  },
  {
    name: "Pesara Pappu Charu",
    collections: ["telugu", "quick"],
    summary: "Light moong dal rasam with pepper and cumin.",
    ingredients: ["moong dal", "tomato", "pepper", "cumin", "garlic", "curry leaves"],
    time: "20 min",
    calories: 190,
    rating: 4.6,
    difficulty: "Easy",
  },
  {
    name: "Minapa Pappu (plain dal)",
    collections: ["telugu"],
    summary: "Simple urad dal preparation with basic tempering.",
    ingredients: ["urad dal", "turmeric", "mustard seeds", "cumin", "garlic", "ghee"],
    time: "24 min",
    calories: 260,
    rating: 4.5,
    difficulty: "Easy",
  },
  {
    name: "Vankaya Pachadi (Brinjal chutney)",
    collections: ["telugu", "quick"],
    summary: "Smoky roasted brinjal chutney with garlic and chili.",
    ingredients: ["brinjal", "garlic", "red chili", "tamarind", "coriander", "mustard"],
    time: "18 min",
    calories: 150,
    rating: 4.7,
    difficulty: "Easy",
  },
];

const allowedRegionalVegRecipeNames = [
  "Andhra Pesarattu",
  "Upma Pesarattu",
  "Gongura Rice",
  "Gutti Vankaya Kura",
  "Pulihora",
  "Bendakaya Vepudu",
  "Dondakaya Fry",
  "Beerakaya Curry",
  "Aratikaya Pulusu",
  "Tomato Pappu",
  "Kandi Pappu Annam",
  "Chintakaya Rice",
  "Palakura Pappu (Spinach dal)",
  "Chikkudukaya Kura",
  "Cabbage Curry (Cabbage Vepudu)",
  "Carrot Beans Curry",
  "Aloo Tomato Curry",
  "Capsicum Curry",
  "Mushroom Curry (veg special)",
  "Paneer Butter Masala (restaurant style)",
  "Sambar (Andhra style)",
  "Rasam (Charu)",
  "Mixed Vegetable Curry",
  "Senagapappu Vepudu",
  "Bobbatlu",
  "Chakkara Pongali",
  "Nuvvula Laddu",
  "Ponganalu",
  "Mirapakaya Bajji",
  "Gongura Pachadi",
  "Ulavacharu (veg base rasam style)",
  "Ragi Sangati",
  "Pachi Pulusu",
  "Majjiga Pulusu",
  "Sorakaya Curry (Anapakaya kura)",
  "Dosakaya Pappu",
  "Mamidikaya Pappu",
  "Kakarkaya Fry",
  "Panasa Pottu Curry (veg jackfruit)",
  "Alasanda Vada",
  "Sakinalu (Telangana snack)",
  "Pootharekulu",
  "Ariselu",
  "Boorelu",
  "Jonna Rotte",
  "Sarva Pindi (Telangana special)",
  "Punugulu",
  "Dibba Rotti",
  "Pesara Pappu Charu",
  "Minapa Pappu (plain dal)",
  "Vankaya Pachadi (Brinjal chutney)",
];

const allowedRegionalVegRecipeSet = new Set(allowedRegionalVegRecipeNames);
const allowedRegionalVegOrder = new Map(
  allowedRegionalVegRecipeNames.map((name, index) => [name, index])
);

let vegRecipes = recipes
  .filter((recipe) => allowedRegionalVegRecipeSet.has(recipe.name))
  .sort((a, b) => allowedRegionalVegOrder.get(a.name) - allowedRegionalVegOrder.get(b.name))
  .map((recipe, index) => ({
    id: `veg-${index}`,
    name: recipe.name,
    collections: recipe.collections,
    summary: recipe.summary,
    ingredients: recipe.ingredients,
    time: recipe.time,
    calories: recipe.calories,
    rating: recipe.rating,
    difficulty: recipe.difficulty,
    image: getRecipeImage(recipe),
  }))
  .slice(0, 50);

const vegGrid = document.getElementById("vegGrid");
const vegCount = document.getElementById("vegCount");
const vegSearch = document.getElementById("vegSearch");
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
const chatSubmitButton = chatForm ? chatForm.querySelector('button[type="submit"]') : null;

const state = {
  search: "",
  filter: "all",
};

let lastQuery = "";
let isChatLoading = false;
let lastBotMessageSignature = "";

function setChatLoading(loading) {
  isChatLoading = loading;
  if (chatSubmitButton) {
    chatSubmitButton.disabled = loading;
    chatSubmitButton.textContent = loading ? "Sending..." : "Send";
  }
}

const manualFallbackRecipes = [
  {
    id: "fallback-curd-rice",
    name: "Curd Rice",
    aliases: ["curd rice", "thayir sadam", "daddojanam"],
    ingredients: [
      "cooked rice",
      "thick curd",
      "milk",
      "ginger",
      "green chili",
      "curry leaves",
      "mustard seeds",
      "urad dal",
      "salt",
      "coriander",
    ],
  },
];

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

function renderCount(count) {
  vegCount.textContent = `${count} recipe${count === 1 ? "" : "s"} found`;
}

function matchesFilter(recipe, filter) {
  if (filter === "all") {
    return true;
  }

  if (filter === "telugu") {
    return recipe.collections.includes("telugu");
  }

  if (filter === "festival") {
    return recipe.collections.includes("festival");
  }

  if (filter === "quick") {
    return recipe.collections.includes("quick");
  }

  return true;
}

function renderRecipes() {
  const query = state.search.trim().toLowerCase();

  const filtered = vegRecipes.filter((recipe) => {
    const matchesSearch =
      !query ||
      recipe.name.toLowerCase().includes(query) ||
      recipe.summary.toLowerCase().includes(query) ||
      recipe.ingredients.some((item) => item.toLowerCase().includes(query));

    return matchesSearch && matchesFilter(recipe, state.filter);
  });

  renderCount(filtered.length);

  if (filtered.length === 0) {
    vegGrid.innerHTML = `
      <div class="no-results">
        <h3>No recipes found</h3>
        <p>Try Telugu recipe names like Pesarattu, Pulihora, Gutti Vankaya, or Bobbatlu.</p>
      </div>
    `;
    return;
  }

  vegGrid.innerHTML = filtered
    .map(
      (recipe, index) => `
        <article class="recipe-card" style="animation-delay: ${index * 16}ms">
          <img class="recipe-card__image" src="${recipe.image}" alt="${recipe.name}" loading="lazy" onerror="this.onerror=null;this.src='${recipeImages.mixed}'" />
          <div class="recipe-card__body">
            <h3 class="recipe-card__title">${recipe.name}</h3>
            <div class="recipe-card__top">
              <span class="recipe-card__tag">${recipe.collections.includes("festival") ? "Festival" : recipe.collections.includes("quick") ? "Quick" : "Telugu"}</span>
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
      const recipe = vegRecipes.find((item) => item.id === button.dataset.ingredientTarget);
      if (recipe) {
        openIngredientChat();
        setActiveRecipe(recipe);
        addBotMessage(`Ingredients for ${recipe.name}: ${recipe.ingredients.join(", ")}.`);
      }
    });
  });
}

function addMessage(text, role = "bot", options = {}) {
  if (!chatThread) {
    return;
  }

  const { isHtml = false, extraClass = "" } = options;

  const bubble = document.createElement("div");
  bubble.className = `chat-bubble chat-bubble--${role}`;
  if (extraClass) {
    bubble.classList.add(extraClass);
  }

  if (isHtml) {
    bubble.innerHTML = text;
  } else {
    bubble.textContent = text;
  }

  chatThread.appendChild(bubble);
  chatThread.scrollTop = chatThread.scrollHeight;
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function parseRecipeSections(text) {
  const input = String(text || "").trim();
  if (!input) {
    return null;
  }

  const matchSection = (start, endMarkers = []) => {
    const endPattern = endMarkers.length ? `(?=\\n(?:${endMarkers.join("|")})\\s*:|$)` : "$";
    const regex = new RegExp(`${start}\\s*:\\s*([\\s\\S]*?)${endPattern}`, "i");
    const match = input.match(regex);
    return match ? match[1].trim() : "";
  };

  const title = matchSection("🍲\\s*Recipe\\s*Name", ["👥\\s*Servings", "🛒\\s*Ingredients", "👨‍🍳\\s*Cooking\\s*Process", "⚡\\s*Tips"]) ||
    matchSection("Recipe\\s*Name", ["Servings", "Ingredients", "Cooking\\s*Process", "Tips"]);

  const servings = matchSection("👥\\s*Servings", ["🛒\\s*Ingredients", "👨‍🍳\\s*Cooking\\s*Process", "⚡\\s*Tips"]) ||
    matchSection("Servings", ["Ingredients", "Cooking\\s*Process", "Tips"]);

  const ingredientsBlock = matchSection("🛒\\s*Ingredients", ["👨‍🍳\\s*Cooking\\s*Process", "⚡\\s*Tips"]) ||
    matchSection("Ingredients", ["Cooking\\s*Process", "Tips"]);

  const stepsBlock = matchSection("👨‍🍳\\s*Cooking\\s*Process", ["⚡\\s*Tips"]) ||
    matchSection("Cooking\\s*Process", ["Tips"]);

  const tipsBlock = matchSection("⚡\\s*Tips") || matchSection("Tips");

  const ingredients = ingredientsBlock
    .split(/\r?\n/)
    .map((line) => line.replace(/^[-*]\s*/, "").trim())
    .filter(Boolean);

  const steps = stepsBlock
    .split(/\r?\n/)
    .map((line) => line.replace(/^\d+\.\s*/, "").trim())
    .filter(Boolean);

  const tips = tipsBlock
    .split(/\r?\n/)
    .map((line) => line.replace(/^[-*]\s*/, "").trim())
    .filter(Boolean);

  if (!title && ingredients.length === 0 && steps.length === 0) {
    return null;
  }

  return {
    title: title || "Recipe",
    servings: servings || "2",
    ingredients,
    steps,
    tips,
  };
}

function renderRecipeCardFromText(text) {
  const parsed = parseRecipeSections(text);
  if (!parsed) {
    return false;
  }

  const ingredientsHtml = parsed.ingredients.length
    ? parsed.ingredients.map((item) => `<li>${escapeHtml(item)}</li>`).join("")
    : "<li>Ingredients not available.</li>";

  const stepsHtml = parsed.steps.length
    ? parsed.steps.map((item) => `<li>${escapeHtml(item)}</li>`).join("")
    : "<li>Steps not available.</li>";

  const tipsHtml = parsed.tips.length
    ? `<div class=\"chat-response-tip\">${parsed.tips.map((tip) => escapeHtml(tip)).join(" | ")}</div>`
    : "";

  const cardHtml = `
    <article class="chat-response-card">
      <header class="chat-response-card__title">
        <h3>${escapeHtml(parsed.title)}</h3>
        <span class="chat-response-badge">Serves ${escapeHtml(parsed.servings)}</span>
      </header>
      <div class="chat-response-grid">
        <section class="chat-response-section">
          <h4>Ingredients</h4>
          <ul class="chat-response-list">${ingredientsHtml}</ul>
        </section>
        <section class="chat-response-section">
          <h4>Cooking Process</h4>
          <ol class="chat-response-steps">${stepsHtml}</ol>
        </section>
        ${tipsHtml}
      </div>
    </article>
  `;

  addMessage(cardHtml, "bot", { isHtml: true, extraClass: "chat-bubble--card" });
  return true;
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

  function toTemplateOutput({ recipeName, servings, ingredients, steps, tips }) {
    const lines = [];
    lines.push("🍲 Recipe Name:");
    lines.push(recipeName || "Recipe");
    lines.push("");
    lines.push("👥 Servings:");
    lines.push(String(servings || 2));
    lines.push("");
    lines.push("🛒 Ingredients:");
    (ingredients || []).forEach((item) => lines.push(`- ${item}`));
    lines.push("");
    lines.push("👨‍🍳 Cooking Process:");
    (steps || []).forEach((step, index) => lines.push(`${index + 1}. ${step}`));
    lines.push("");
    lines.push("⚡ Tips:");
    (tips || []).forEach((tip) => lines.push(`- ${tip}`));
    return lines.join("\n").trim();
  }

  if (data.mode === "recipe") {
    const ingredientLines = [];
    (data.ingredients || []).forEach((item) => {
      const qty = item.quantity ? ` - ${item.quantity}` : "";
      ingredientLines.push(`${item.item}${qty}`.trim());
    });
    (data.tempering || []).forEach((item) => {
      const qty = item.quantity ? ` - ${item.quantity}` : "";
      ingredientLines.push(`${item.item}${qty}`.trim());
    });

    return toTemplateOutput({
      recipeName: data.title || "Recipe",
      servings: data.servings || 2,
      ingredients: ingredientLines,
      steps: Array.isArray(data.steps) && data.steps.length ? data.steps : ["Prepare ingredients.", "Cook as per recipe style.", "Serve hot."],
      tips: Array.isArray(data.tips) && data.tips.length ? data.tips : ["Adjust salt and spice to taste.", "Keep flame medium for best texture."],
    });
  }

  if (Array.isArray(data.possibleRecipes) && data.possibleRecipes.length) {
    const recipe = data.possibleRecipes[0];
    const ingredientLines = (recipe.ingredients || []).map((item) => {
      const qty = item.quantity ? ` - ${item.quantity}` : "";
      return `${item.item}${qty}`.trim();
    });
    return toTemplateOutput({
      recipeName: recipe.name || data.title || "Recipe",
      servings: recipe.servings || data.estimatedServings || 2,
      ingredients: ingredientLines,
      steps: Array.isArray(recipe.steps) && recipe.steps.length ? recipe.steps : ["Prepare ingredients.", "Cook as per recipe style.", "Serve hot."],
      tips: Array.isArray(data.tips) && data.tips.length ? data.tips : ["Use fresh ingredients.", "Adjust consistency as needed."],
    });
  }

  return "🍲 Recipe Name:\nRecipe\n\n👥 Servings:\n2\n\n🛒 Ingredients:\n- Rice\n- Curd\n\n👨‍🍳 Cooking Process:\n1. Prepare ingredients.\n2. Cook according to recipe style.\n3. Serve fresh.\n\n⚡ Tips:\n- Adjust salt and spice to taste.\n- Use fresh tempering for better flavor.";
}

async function requestAssistantResponse(message) {
  const response = await fetch(`${ASSISTANT_API_BASE}/api/assistant`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message,
      servings: Number(chatServings?.value || 2),
      context: "veg",
    }),
  });

  const payload = await response.json();

  if (!response.ok) {
    throw new Error(payload.error || "Assistant request failed.");
  }

  return payload.data || payload;
}

function addBotMessage(text) {
  const signature = String(text || "").trim().toLowerCase();
  if (signature && signature === lastBotMessageSignature) {
    return;
  }
  lastBotMessageSignature = signature;

  if (!renderRecipeCardFromText(text)) {
    addMessage(text, "bot");
  }
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

function buildRecipeModeText(recipe, servings) {
  const ingredients = Array.isArray(recipe.ingredients) ? recipe.ingredients : [];
  const lines = [];

  lines.push("🍲 Recipe Name:");
  lines.push(recipe.name);
  lines.push("");
  lines.push("👥 Servings:");
  lines.push(String(servings));
  lines.push("");
  lines.push("🛒 Ingredients:");
  ingredients.forEach((item) => lines.push(`- ${item}`));
  lines.push("");

  lines.push("👨‍🍳 Cooking Process:");
  lines.push("1. Prepare the ingredients and keep them ready.");
  lines.push("2. Cook and temper according to the recipe style.");
  lines.push("3. Mix well and adjust salt, spice, and consistency.");
  lines.push("4. Serve hot with rice or roti.");
  lines.push("");
  lines.push("⚡ Tips:");
  lines.push("- Adjust salt and spice to taste.");
  lines.push("- Keep tempering fresh for better aroma.");

  return lines.join("\n");
}

function buildIngredientModeText(message) {
  const lower = message.toLowerCase();
  const lines = [];
  const matches = vegRecipes.filter((recipe) =>
    recipe.ingredients.some((item) => lower.includes(item.toLowerCase())) ||
    lower.includes(recipe.name.toLowerCase())
  );

  lines.push("🍽️ Possible Recipes:");
  lines.push("");

  const topMatches = matches.slice(0, 3);
  if (!topMatches.length) {
    lines.push("1. Tomato Rice");
    lines.push("2. Curd Rice");
    lines.push("3. Simple Tomato Curry");
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
    lines.push("3. Mix and finish with tempering or seasoning.");
    lines.push("");
  });

  lines.push("📊 Estimated Serving:");
  lines.push("- Based on given ingredients → Suitable for 2 persons");
  return lines.join("\n");
}

function findRecipe(query) {
  const normalized = query.trim().toLowerCase();
  const matchedVegRecipe = vegRecipes.find((recipe) => {
    const matchesName = recipe.name.toLowerCase().includes(normalized);
    const matchesIngredient = recipe.ingredients.some((item) => item.toLowerCase().includes(normalized));
    return matchesName || matchesIngredient;
  });

  if (matchedVegRecipe) {
    return matchedVegRecipe;
  }

  return manualFallbackRecipes.find((recipe) =>
    [recipe.name.toLowerCase(), ...(recipe.aliases || []).map((item) => item.toLowerCase())].some((alias) =>
      normalized.includes(alias)
    )
  );
}

async function getIngredientsFromApi(query) {
  const items = query
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  if (!items.length || !SPOONACULAR_API_KEY) {
    return null;
  }

  const suggestions = await spoonacularGet("/recipes/findByIngredients", {
    ingredients: items.join(","),
    number: 3,
    ranking: 1,
    ignorePantry: true,
  });

  if (!Array.isArray(suggestions) || !suggestions.length) {
    return null;
  }

  const top = suggestions[0];
  const info = await spoonacularGet(`/recipes/${top.id}/information`, {
    includeNutrition: false,
  });

  const ingredientList = (info.extendedIngredients || []).map((item) => item.original).slice(0, 12);

  return {
    title: info.title || top.title,
    ingredients: ingredientList,
  };
}

async function handleChat(query) {
  const normalized = query.trim();

  if (!normalized) {
    return;
  }

  if (isChatLoading) {
    return;
  }

  if (lastQuery === normalized.toLowerCase()) {
    return;
  }

  lastQuery = normalized.toLowerCase();
  setChatLoading(true);

  try {
    addUserMessage(normalized);

    const { recipeName, servings } = parseQuery(normalized);

    try {
      const assistantData = await requestAssistantResponse(`${recipeName || normalized} for ${servings} persons`);
      addBotMessage(formatAssistantResponse(assistantData));
      return;
    } catch (error) {
      console.error("Veg assistant error:", error);

      if (/quota|rate limit|billing|api key/i.test(String(error.message || ""))) {
        addBotMessage("Google recipe assistant is temporarily unavailable due API quota on the current key. Showing local recipe backup.");
      }
    }

    const recipe = findRecipe(recipeName || normalized);

    if (recipe) {
      addBotMessage(buildRecipeModeText(recipe, servings));
      return;
    }

    if (/[,:]|\b(i have|have|ingredients|with)\b/i.test(normalized)) {
      addBotMessage(buildIngredientModeText(normalized));
      return;
    }

    addBotMessage("I could not find that dish. Try names like Pesarattu, Pulihora, Gutti Vankaya, or Bobbatlu.");
  } finally {
    setChatLoading(false);
  }
}

vegSearch.addEventListener("input", (event) => {
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
    const recipe = vegRecipes[Math.floor(Math.random() * vegRecipes.length)];
    setActiveRecipe(recipe);
    handleChat(recipe.name);
    const card = document.querySelector(`[data-ingredient-target="${recipe.id}"]`);
    card?.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

showRandom.addEventListener("click", () => {
  const randomRecipe = vegRecipes[Math.floor(Math.random() * vegRecipes.length)];
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
    lastQuery = "";
    lastBotMessageSignature = "";
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

function seedConversation() {
  if (!chatThread) {
    return;
  }
}

async function initializeVegPage() {
  renderRecipes();
}

initializeVegPage();