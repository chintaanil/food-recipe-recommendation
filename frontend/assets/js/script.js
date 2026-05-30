const recipes = [
  {
    name: "Rasam (Charu)",
    type: "veg",
    price: "low",
    rating: 4.6,
    time: "16 min",
    calories: 120,
    difficulty: "Easy",
    cuisine: "Peppery and tangy charu served hot with rice.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTzl9RbZpzldYUG9CMRydFwg6NfREMPpX9Ng&s",
  },
  {
    name: "Mixed Vegetable Curry",
    type: "veg",
    price: "medium",
    rating: 4.6,
    time: "25 min",
    calories: 330,
    difficulty: "Medium",
    cuisine: "Colorful mixed vegetable curry with balanced spices.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8NwpbMCMf9kYlFoRi8v61PRNE7k9WKc9bAQ&s",
  },
  {
    name: "Senagapappu Vepudu",
    type: "veg",
    price: "low",
    rating: 4.5,
    time: "15 min",
    calories: 220,
    difficulty: "Easy",
    cuisine: "Roasted chana dal stir fry with curry leaves.",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/split-chickpeas-senaga-pappu-kobbari-recipe.jpg",
  },
  {
    name: "Tomato Pappu",
    type: "veg",
    price: "low",
    rating: 4.8,
    time: "22 min",
    calories: 360,
    difficulty: "Easy",
    cuisine: "Andhra-style lentils with tomato and garlic.",
    image:
      "https://d1uz88p17r663j.cloudfront.net/original/c86e0ebe52261455364571734c7c245b_Tomato_Pappu_-_Plating.jpg",
  },
  {
    name: "Chicken Pulusu",
    type: "nonveg",
    price: "medium",
    rating: 4.7,
    time: "42 min",
    calories: 510,
    difficulty: "Medium",
    cuisine: "Tangy Telugu chicken pulusu with tamarind-based gravy.",
    image:
      "https://i.ytimg.com/vi/CZDlYuMXNZQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAqL70PaOjo1gsdbsaZW3B7MsSM2w",
  },
  {
    name: "Mutton Curry",
    type: "nonveg",
    price: "high",
    rating: 4.8,
    time: "60 min",
    calories: 620,
    difficulty: "Medium",
    cuisine: "Traditional mutton curry slow-cooked in aromatic spices.",
    image:
      "https://www.licious.in/blog/wp-content/uploads/2023/02/shutterstock_2205168763.jpg",
  },
  {
    name: "Mutton Fry",
    type: "nonveg",
    price: "high",
    rating: 4.7,
    time: "55 min",
    calories: 560,
    difficulty: "Medium",
    cuisine: "Peppery mutton fry with curry leaves and roasted spices.",
    image:
      "https://diningwithayesha.com/wp-content/uploads/2025/07/mutton-fry-recipe.jpg",
  },
  {
    name: "Mutton Masala",
    type: "nonveg",
    price: "high",
    rating: 4.8,
    time: "62 min",
    calories: 640,
    difficulty: "Hard",
    cuisine: "Mutton in a thick, spicy masala gravy with deep flavor.",
    image:
      "https://www.licious.in/blog/wp-content/uploads/2020/12/Mutton-Masala-min.jpg",
  },
  {
    name: "Mutton Pulusu",
    type: "nonveg",
    price: "high",
    rating: 4.7,
    time: "58 min",
    calories: 590,
    difficulty: "Medium",
    cuisine: "Andhra mutton pulusu cooked in spicy and tangy tamarind gravy.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNlRnZ5f9xfZykvxIDSVKBDXddUa6zQNwkOQ&s",
  },
  {
    name: "Mutton Keema Curry",
    type: "nonveg",
    price: "medium",
    rating: 4.6,
    time: "40 min",
    calories: 520,
    difficulty: "Easy",
    cuisine: "Minced mutton keema curry simmered with peas and masala.",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/08/mutton-keema-recipe.jpg",
  },
  {
    name: "Fish Curry",
    type: "nonveg",
    price: "medium",
    rating: 4.6,
    time: "30 min",
    calories: 390,
    difficulty: "Easy",
    cuisine: "Comforting fish curry with onion-tomato and coastal spices.",
    image:
      "https://vismaifood.com/storage/app/uploads/public/daa/96d/7bc/thumb__1200_0_0_0_auto.jpg",
  },
  {
    name: "Fish Pulusu",
    type: "nonveg",
    price: "medium",
    rating: 4.7,
    time: "32 min",
    calories: 380,
    difficulty: "Easy",
    cuisine: "Tangy Telugu fish pulusu with tamarind and red chili.",
    image:
      "https://yellowchilis.com/wp-content/uploads/2021/04/chepala-pulusu-recipe-nellore-andhra-fish-curry-fish-pulusu-recipe-f.jpg",
  },
];

const searchInput = document.getElementById("searchInput");
const priceFilter = document.getElementById("priceFilter");
const sortFilter = document.getElementById("sortFilter");
const recipesGrid = document.getElementById("recipesGrid");
const noResults = document.getElementById("noResults");
const resultsMeta = document.getElementById("resultsMeta");
const filterButtons = Array.from(document.querySelectorAll(".filter-btn[data-type]"));

const state = {
  search: "",
  diet: "all",
  price: "all",
  sort: "default",
  loading: true,
};

function formatType(type) {
  return type === "veg" ? "Veg" : "Non-Veg";
}

function formatPrice(price) {
  return price.charAt(0).toUpperCase() + price.slice(1);
}

function createSkeletonCards() {
  recipesGrid.innerHTML = Array.from({ length: 6 }, () => `
    <article class="skeleton" aria-hidden="true">
      <div class="skeleton__image"></div>
      <div class="skeleton__body">
        <div class="skeleton__line skeleton__line--wide"></div>
        <div class="skeleton__line skeleton__line--mid"></div>
        <div class="skeleton__line"></div>
      </div>
    </article>
  `).join("");
}

function getFilteredRecipes() {
  const query = state.search.trim().toLowerCase();

  const filtered = recipes.filter((recipe) => {
    const matchesSearch =
      !query ||
      recipe.name.toLowerCase().includes(query) ||
      recipe.cuisine.toLowerCase().includes(query);
    const matchesDiet = state.diet === "all" || recipe.type === state.diet;
    const matchesPrice = state.price === "all" || recipe.price === state.price;

    return matchesSearch && matchesDiet && matchesPrice;
  });

  if (state.sort === "rating-desc") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (state.sort === "rating-asc") {
    filtered.sort((a, b) => a.rating - b.rating);
  } else if (state.sort === "name-asc") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  return filtered;
}

function renderRecipes() {
  if (state.loading) {
    createSkeletonCards();
    return;
  }

  const filteredRecipes = getFilteredRecipes();

  if (!filteredRecipes.length) {
    recipesGrid.innerHTML = "";
    noResults.hidden = false;
    resultsMeta.textContent = "0 recipes found";
    return;
  }

  noResults.hidden = true;
  resultsMeta.textContent = `${filteredRecipes.length} recipe${filteredRecipes.length === 1 ? "" : "s"} found`;

  recipesGrid.innerHTML = filteredRecipes
    .map(
      (recipe, index) => `
        <article class="recipe-card" style="animation-delay: ${index * 55}ms">
          <img class="recipe-card__image" src="${recipe.image}" alt="${recipe.name}" loading="lazy" />
          <div class="recipe-card__body">
            <div class="recipe-card__meta">
              <span class="recipe-card__tag" data-type="${recipe.type}">${formatType(recipe.type)}</span>
              <span>${formatPrice(recipe.price)} price</span>
            </div>
            <h3>${recipe.name}</h3>
            <div class="recipe-card__footer">
              <span class="recipe-card__time">⏱ ${recipe.time}</span>
              <span class="recipe-card__detail">${recipe.calories} kcal • ${recipe.difficulty}</span>
              <span class="rating">⭐ ${recipe.rating.toFixed(1)}</span>
            </div>
            <p class="recipe-card__caption">${recipe.cuisine}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function setActiveButton(type) {
  filterButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.type === type);
  });
}

function updateFilters() {
  state.search = searchInput.value;
  state.price = priceFilter.value;
  renderRecipes();
}

if (searchInput && priceFilter && sortFilter && recipesGrid && noResults && resultsMeta && filterButtons.length) {
  searchInput.addEventListener("input", updateFilters);

  priceFilter.addEventListener("change", () => {
    state.price = priceFilter.value;
    renderRecipes();
  });

  sortFilter.addEventListener("change", () => {
    state.sort = sortFilter.value;
    renderRecipes();
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.diet = button.dataset.type;
      setActiveButton(button.dataset.type);
      renderRecipes();
    });
  });

  createSkeletonCards();
  window.setTimeout(() => {
    state.loading = false;
    renderRecipes();
  }, 700);
}

// Hero Typewriter Effect
const typewriterTextElement = document.getElementById("typewriterText");
const dynamicQuoteElement = document.getElementById("dynamicQuote");
const ctaButton = document.querySelector(".hero-btn--cta");

if (typewriterTextElement) {
  const textToType = (typewriterTextElement.textContent || "").trim() || "Cook with what you have. Create something unforgettable.";
  const quoteToType = "“Welcome back — let’s cook something amazing today.”";
  let typeIndex = 0;
  const baseDelay = 58;
  const startDelay = 700;

  // Start from empty text so the heading appears character-by-character.
  typewriterTextElement.textContent = "";

  const existingCursor = document.querySelector(".typewriter-cursor");
  if (existingCursor) {
    existingCursor.remove();
  }

  const cursor = document.createElement("span");
  cursor.className = "typewriter-cursor";
  cursor.textContent = "|";
  typewriterTextElement.insertAdjacentElement("afterend", cursor);

  function getTypingDelay(char) {
    let delay = baseDelay;

    if (char === " ") {
      delay += 18;
    }

    if (/[,.!?]/.test(char)) {
      delay += 170;
    }

    return delay;
  }

  function typeWriter() {
    if (typeIndex < textToType.length) {
      const currentChar = textToType.charAt(typeIndex);
      typewriterTextElement.textContent += currentChar;
      typeIndex++;
      setTimeout(typeWriter, getTypingDelay(currentChar));
    } else {
      // Once title is done, show the quote
      startQuoteAnimation();
    }
  }

  function startQuoteAnimation() {
    if (dynamicQuoteElement) {
      dynamicQuoteElement.textContent = quoteToType;
      dynamicQuoteElement.classList.add("is-visible");
      
      // Briefly delay the button as well for a polished entrance
      if (ctaButton) {
        ctaButton.style.animationDelay = "0.4s";
      }
    }
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    typewriterTextElement.textContent = textToType;
    startQuoteAnimation();
  } else {
    // Start the typing animation after page load
    setTimeout(typeWriter, startDelay);
  }
}

// Home navbar blur + shadow on scroll
const homeTopbar = document.getElementById("homeTopbar");
if (homeTopbar) {
  const updateHomeTopbar = () => {
    homeTopbar.classList.toggle("is-scrolled", window.scrollY > 16);
  };

  updateHomeTopbar();
  window.addEventListener("scroll", updateHomeTopbar, { passive: true });
}
