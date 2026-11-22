var imgSection = document.getElementById("imgSection");
var infoSection = document.getElementById("infoSection");
var ingredientsList = document.getElementById("ingredientsList");
var instructionsList = document.getElementById("instructionsList");
var nutritionGrid = document.getElementById("nutritionGrid");
var tipsList = document.getElementById("tipsList");
var tryAnotherBtn = document.querySelector(".btn-try");

var currentRecipeIndex = 0;

var recipes = [
  {
    rating: 4.9,
    reviews: 482,
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    imgUrl: "./images/burger.png",
    difficulty: "Easy",
    cuisine: "American",
    title: "Classic Cheeseburger",
    description:
      "Juicy seared beef patty topped with melted cheddar cheese, crisp pickles, onion, ketchup, and mustard on a toasted sesame bun",
    ingredients: [
      "300g ground beef (80/20 lean-to-fat ratio)",
      "2 sesame burger buns",
      "2 slices cheddar cheese",
      "1/4 cup dill pickle slices",
      "1/4 white onion, thinly sliced",
      "2 tbsp ketchup & 1 tbsp yellow mustard",
      "1 tbsp butter (for toasting buns)",
      "1 tsp kosher salt & 1/2 tsp black pepper",
    ],
    instructions: [
      "Divide the ground beef into two equal portions and gently shape into patties slightly wider than the buns.",
      "Season both sides of each patty generously with salt and black pepper.",
      "Melt butter in a skillet over medium heat and toast the cut sides of the buns for 1–2 minutes until golden.",
      "Heat the skillet over high heat until smoking hot, then sear the patties for 3–4 minutes per side.",
      "Place a slice of cheddar cheese on each patty during the last minute of cooking and cover until melted.",
      "Assemble the burger with ketchup, mustard, pickles, onion, and the toasted buns, then serve warm.",
    ],
    nutrition: {
      calories: "540 kcal",
      protein: "29g",
      carbohydrates: "34g",
      fat: "31g",
      fiber: "2g",
      sodium: "890mg",
    },
    chefTips: [
      "Avoid overworking the meat when shaping patties so they stay tender and juicy.",
      "Press a slight dimple in the center of each patty to prevent puffing while cooking.",
      "Do not press down on the patties with a spatula, as it squeezes out flavorful juices.",
      "Rest the cooked patties for 2 minutes before assembling the burger.",
    ],
  },
  {
    rating: 4.8,
    reviews: 615,
    prepTime: 20,
    cookTime: 15,
    servings: 2,
    imgUrl: "./images/Tera.png",
    difficulty: "Easy",
    cuisine: "Japanese",
    title: "Salmon Teriyaki Bowl",
    description:
      "Glazed pan-seared salmon fillets served over steamed jasmine rice with edamame, avocado, and toasted sesame seeds",
    ingredients: [
      "2 salmon fillets (skin-on or skinless)",
      "1 cup jasmine rice, cooked",
      "3 tbsp soy sauce & 2 tbsp honey",
      "1 tbsp mirin or rice vinegar",
      "1 tsp grated fresh ginger & 1 clove minced garlic",
      "1/2 cup shelled edamame",
      "1/2 ripe avocado, sliced",
      "1 tsp sesame seeds & sliced green onions",
    ],
    instructions: [
      "Whisk soy sauce, honey, mirin, ginger, and garlic in a small bowl to make the teriyaki sauce.",
      "Season salmon fillets lightly with salt and sear in a lightly oiled skillet for 4 minutes skin-side down.",
      "Flip the salmon, pour the teriyaki sauce into the pan, and simmer for 3 minutes until thickened.",
      "Divide warm jasmine rice into two bowls and arrange edamame and avocado slices on top.",
      "Place the glazed salmon over the rice, spoon extra pan sauce on top, and garnish with sesame seeds.",
    ],
    nutrition: {
      calories: "610 kcal",
      protein: "38g",
      carbohydrates: "56g",
      fat: "24g",
      fiber: "6g",
      sodium: "780mg",
    },
    chefTips: [
      "Pat the salmon fillets completely dry with a paper towel before searing for a crisp crust.",
      "Keep the heat at medium when adding the sauce so the honey glazes without burning.",
      "Use day-old chilled rice if you want to quickly stir-fry it before serving.",
    ],
  },
  {
    rating: 4.7,
    reviews: 940,
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    imgUrl: "./images/taco.png",
    difficulty: "Easy",
    cuisine: "Mexican",
    title: "Crispy Beef Tacos",
    description:
      "Warm tortillas loaded with smoky spiced ground beef, shredded lettuce, diced tomatoes, cheddar cheese, and fresh cilantro",
    ingredients: [
      "500g ground beef",
      "8 small corn or flour tortillas",
      "1 tbsp chili powder & 1 tsp ground cumin",
      "1/2 tsp smoked paprika & 1/2 tsp garlic powder",
      "1 cup shredded romaine lettuce",
      "1/2 cup diced Roma tomatoes",
      "3/4 cup shredded cheddar cheese",
      "1/4 cup sour cream & fresh lime wedges",
    ],
    instructions: [
      "Brown the ground beef in a large skillet over medium-high heat, breaking it up with a spoon.",
      "Drain excess fat, then stir in chili powder, cumin, paprika, garlic powder, salt, and 1/4 cup water.",
      "Simmer for 5 minutes until the liquid reduces and coats the beef.",
      "Warm the tortillas in a dry skillet for 20 seconds per side until pliable.",
      "Fill each tortilla with seasoned beef and top with lettuce, tomatoes, cheese, and sour cream.",
    ],
    nutrition: {
      calories: "430 kcal",
      protein: "26g",
      carbohydrates: "32g",
      fat: "21g",
      fiber: "4g",
      sodium: "640mg",
    },
    chefTips: [
      "Add a splash of water with the spices so the seasoning distributes evenly across the meat.",
      "Wrap warmed tortillas in a clean kitchen towel to keep them soft while assembling.",
      "Squeeze fresh lime juice right before eating to brighten all the rich flavors.",
    ],
  },
  {
    rating: 4.9,
    reviews: 1120,
    prepTime: 15,
    cookTime: 20,
    servings: 3,
    imgUrl: "./images/alferedo.png",
    difficulty: "Medium",
    cuisine: "Italian",
    title: "Creamy Chicken Alfredo",
    description:
      "Golden pan-seared chicken breast tossed with fettuccine pasta in a rich garlic parmesan cream sauce",
    ingredients: [
      "300g fettuccine pasta",
      "2 boneless skinless chicken breasts",
      "1 cup heavy cream",
      "3/4 cup freshly grated Parmesan cheese",
      "3 tbsp unsalted butter",
      "3 cloves garlic, minced",
      "1 tsp Italian seasoning, salt & black pepper",
      "2 tbsp chopped fresh parsley",
    ],
    instructions: [
      "Boil fettuccine in salted water until al dente, reserving 1/2 cup of pasta water before draining.",
      "Season chicken breasts with Italian seasoning, salt, and pepper, then sear in 1 tbsp butter for 6 minutes per side.",
      "Remove chicken to rest, then melt remaining butter in the same pan and sauté garlic for 30 seconds.",
      "Pour in heavy cream, simmer gently for 3 minutes, then whisk in Parmesan cheese until smooth.",
      "Toss pasta in the sauce with a splash of pasta water, top with sliced chicken and parsley.",
    ],
    nutrition: {
      calories: "690 kcal",
      protein: "42g",
      carbohydrates: "58g",
      fat: "32g",
      fiber: "3g",
      sodium: "720mg",
    },
    chefTips: [
      "Always grate your own Parmesan from a block; pre-shredded cheese contains anti-caking agents that make sauces grainy.",
      "Lower the heat before adding the cheese so the cream sauce stays silky and never separates.",
      "Slice the chicken against the grain after resting for 5 minutes to keep every bite tender.",
    ],
  },
  {
    rating: 4.8,
    reviews: 730,
    prepTime: 60,
    cookTime: 15,
    servings: 2,
    imgUrl: "./images/pizza.png",
    difficulty: "Medium",
    cuisine: "Italian",
    title: "Homemade Margherita Pizza",
    description:
      "Crisp hand-stretched pizza crust topped with crushed San Marzano tomatoes, fresh mozzarella pearls, and sweet basil leaves",
    ingredients: [
      "1 ball fresh pizza dough (about 350g)",
      "1/2 cup crushed San Marzano tomatoes",
      "150g fresh mozzarella cheese, sliced",
      "1 tbsp extra-virgin olive oil",
      "1 clove garlic, finely grated",
      "8–10 fresh basil leaves",
      "1/2 tsp sea salt & pinch of dried oregano",
    ],
    instructions: [
      "Let the pizza dough rest at room temperature for 45–60 minutes while preheating your oven to 245°C (475°F).",
      "Mix crushed tomatoes with grated garlic, olive oil, sea salt, and oregano.",
      "Stretch the dough gently on a floured surface into a 12-inch circle and transfer to a baking sheet.",
      "Spread a thin layer of tomato sauce over the dough and arrange mozzarella slices on top.",
      "Bake for 12–15 minutes until the crust is blistered and golden, then scatter fresh basil leaves before slicing.",
    ],
    nutrition: {
      calories: "580 kcal",
      protein: "24g",
      carbohydrates: "68g",
      fat: "22g",
      fiber: "4g",
      sodium: "810mg",
    },
    chefTips: [
      "Blot fresh mozzarella with a paper towel before baking so excess moisture does not make the center soggy.",
      "Preheat your baking sheet or pizza stone inside the oven for an extra-crispy bottom crust.",
      "Add fresh basil only after the pizza comes out of the oven so the leaves stay bright green and fragrant.",
    ],
  },
  {
    rating: 4.6,
    reviews: 390,
    prepTime: 15,
    cookTime: 0,
    servings: 2,
    imgUrl: "./images/salad.png",
    difficulty: "Easy",
    cuisine: "Mediterranean",
    title: "Mediterranean Greek Salad",
    description:
      "Crisp cucumbers, vine-ripened tomatoes, Kalamata olives, red onion, and creamy feta dressed in lemon herb vinaigrette",
    ingredients: [
      "2 large ripe tomatoes, cut into wedges",
      "1 English cucumber, sliced into half-moons",
      "1/2 red onion, thinly sliced",
      "1/2 cup pitted Kalamata olives",
      "120g block feta cheese",
      "3 tbsp extra-virgin olive oil",
      "1 tbsp red wine vinegar & 1 tsp dried oregano",
      "Salt and freshly cracked black pepper",
    ],
    instructions: [
      "Combine tomatoes, cucumber, red onion, and Kalamata olives in a large shallow serving bowl.",
      "Whisk olive oil, red wine vinegar, dried oregano, salt, and pepper in a small jar.",
      "Drizzle the dressing over the vegetables and toss gently to coat.",
      "Top with a whole slab or thick chunks of feta cheese and finish with an extra pinch of oregano.",
    ],
    nutrition: {
      calories: "320 kcal",
      protein: "10g",
      carbohydrates: "14g",
      fat: "26g",
      fiber: "4g",
      sodium: "690mg",
    },
    chefTips: [
      "Soak sliced red onions in cold water for 10 minutes to take away their harsh raw bite.",
      "Buy feta stored in brine rather than pre-crumbled feta for a much creamier texture.",
      "Serve immediately after dressing so the cucumbers stay crisp.",
    ],
  },
  {
    rating: 4.8,
    reviews: 510,
    prepTime: 50,
    cookTime: 25,
    servings: 4,
    imgUrl: "./images/beef.png",
    difficulty: "Hard",
    cuisine: "European",
    title: "Classic Beef Stroganoff",
    description:
      "Tender strips of seared beef sirloin and cremini mushrooms folded into a velvety Dijon sour cream sauce over egg noodles",
    ingredients: [
      "500g beef sirloin, thinly sliced into strips",
      "250g cremini mushrooms, sliced",
      "300g wide egg noodles",
      "1 medium yellow onion, finely diced",
      "1 cup beef broth & 1/2 cup sour cream",
      "1 tbsp Dijon mustard & 1 tbsp Worcestershire sauce",
      "2 tbsp butter & 1 tbsp all-purpose flour",
      "Salt, black pepper & fresh dill or parsley",
    ],
    instructions: [
      "Slice beef sirloin thinly and marinate with salt, pepper, and Worcestershire sauce for 30 minutes.",
      "Boil egg noodles according to package instructions until tender, then drain.",
      "Sear beef strips in a hot skillet with 1 tbsp butter for 1–2 minutes per side, then transfer to a plate.",
      "Sauté onions and mushrooms in the remaining butter until browned, sprinkle in flour, and stir for 1 minute.",
      "Gradually whisk in beef broth and Dijon mustard, simmer 5 minutes, remove from heat, and stir in sour cream and beef.",
    ],
    nutrition: {
      calories: "620 kcal",
      protein: "36g",
      carbohydrates: "52g",
      fat: "28g",
      fiber: "3g",
      sodium: "760mg",
    },
    chefTips: [
      "Freeze the beef for 20 minutes before slicing to make cutting paper-thin strips effortless.",
      "Never boil the sauce after adding sour cream, or it may curdle.",
      "Cook the mushrooms in a single layer without stirring too often so they brown instead of steaming.",
    ],
  },
  {
    rating: 4.9,
    reviews: 845,
    prepTime: 15,
    cookTime: 20,
    servings: 3,
    imgUrl: "./images/curryshrimp.png",
    difficulty: "Easy",
    cuisine: "Thai",
    title: "Coconut Shrimp Curry",
    description:
      "Plump jumbo shrimp simmered in an aromatic red curry and creamy coconut milk broth with bell peppers and fresh lime",
    ingredients: [
      "400g large shrimp, peeled and deveined",
      "1 can (400ml) full-fat coconut milk",
      "2 tbsp Thai red curry paste",
      "1 red bell pepper, thinly sliced",
      "1 tbsp vegetable oil & 1 tbsp fish sauce",
      "1 tsp brown sugar & 1 tsp grated ginger",
      "Fresh cilantro leaves & lime wedges",
      "Steamed basmati or jasmine rice for serving",
    ],
    instructions: [
      "Heat oil in a deep skillet over medium heat and fry the red curry paste and ginger for 1 minute until fragrant.",
      "Pour in the coconut milk, fish sauce, and brown sugar, stirring until smooth and simmering.",
      "Add sliced red bell pepper and simmer for 5 minutes until crisp-tender.",
      "Add the shrimp and cook for 3–4 minutes just until pink and opaque.",
      "Remove from heat, squeeze fresh lime juice over the curry, and serve with steamed rice and cilantro.",
    ],
    nutrition: {
      calories: "490 kcal",
      protein: "31g",
      carbohydrates: "18g",
      fat: "33g",
      fiber: "3g",
      sodium: "840mg",
    },
    chefTips: [
      "Add the shrimp at the very end so they stay juicy and never turn rubbery.",
      "Shake the can of coconut milk well before opening so the thick cream mixes with the liquid.",
      "Adjust the amount of curry paste depending on how spicy you prefer your dish.",
    ],
  },
];

tryAnotherBtn.addEventListener("click", function () {
  var nextIndex = getRandomRecipe();
  displayRecipe(nextIndex);
});

function getRandomRecipe() {
  var randomIndex = Math.floor(Math.random() * recipes.length);


  while (randomIndex === currentRecipeIndex && recipes.length > 1) {
    randomIndex = Math.floor(Math.random() * recipes.length);
  }

  currentRecipeIndex = randomIndex;
  return randomIndex;
}

function displayRecipe(index) {
  var myRecipe = recipes[index];
  var isOverTime = myRecipe.prepTime > 45;

  var imgContent = `
    <img src="${myRecipe.imgUrl}" alt="${myRecipe.title}" class="meal-img" />
    <div class="meal-rating">
      <i class="fa-solid fa-star text-warning"></i>
      <span>${myRecipe.rating} <small class="text-muted">(${myRecipe.reviews} reviews)</small></span>
    </div>
    <div class="meal-stats">
      <div class="stat-box">
        <i class="fa-solid fa-clock"></i>
        <span class="stat-name">Prep Time</span>
        <span class="stat-num">${myRecipe.prepTime} min</span>
      </div>
      <div class="stat-box">
        <i class="fa-solid fa-fire"></i>
        <span class="stat-name">Cook Time</span>
        <span class="stat-num">${myRecipe.cookTime} min</span>
      </div>
      <div class="stat-box">
        <i class="fa-solid fa-users"></i>
        <span class="stat-name">Servings</span>
        <span class="stat-num">${myRecipe.servings} people</span>
      </div>
    </div>
  `;

  var recipeInfo = `
    <div class="d-flex justify-content-between align-items-start mb-3">
      <div class="meal-tags d-flex gap-2">
        <span class="tag-pill tag-level">${myRecipe.difficulty}</span>
        <span class="tag-pill tag-type">${myRecipe.cuisine}</span>
      </div>
      <div class="card-btns d-flex gap-2">
        <button class="btn rounded-2 shadow-sm" type="button">
          <i class="fa-regular fa-bookmark"></i>
        </button>
        <button class="btn rounded-2 shadow-sm" type="button">
          <i class="fa-solid fa-share-nodes"></i>
        </button>
      </div>
    </div>
    <h2 class="display-6 fw-bold mb-2">${myRecipe.title}</h2>
    <p class="text-muted mb-4">
      ${myRecipe.description}
    </p>
    <div class="time-alert ${isOverTime ? "d-flex align-items-center" : "d-none"}" id="prepAlert">
      <i class="fa-solid fa-triangle-exclamation fs-4"></i>
      <div>
        <span class="alert-heading">Extended Preparation Time</span>
        <span class="alert-desc">This recipe requires more than 45 minutes to prepare. Plan accordingly!</span>
      </div>
    </div>
  `;

  var ingredientsContent = "";
  for (var i = 0; i < myRecipe.ingredients.length; i++) {
    ingredientsContent += `
      <li class="list-row">
        <div class="step-num">${i + 1}</div>
        ${myRecipe.ingredients[i]}
      </li>
    `;
  }

  var instructionsContent = "";
  for (var i = 0; i < myRecipe.instructions.length; i++) {
    instructionsContent += `
      <li class="list-row">
        <div class="step-num">${i + 1}</div>
        ${myRecipe.instructions[i]}
      </li>
    `;
  }

  var myNutrition = `
    <div class="nut-card">
      <div class="nut-left">
        <div class="nut-icon bg-warning">
          <i class="fa-solid fa-fire"></i>
        </div>
        <span class="text-muted">Calories</span>
      </div>
      <span class="fw-bold">${myRecipe.nutrition.calories}</span>
    </div>
    <div class="nut-card">
      <div class="nut-left">
        <div class="nut-icon bg-primary">
          <i class="fa-solid fa-dumbbell"></i>
        </div>
        <span class="text-muted">Protein</span>
      </div>
      <span class="fw-bold">${myRecipe.nutrition.protein}</span>
    </div>
    <div class="nut-card">
      <div class="nut-left">
        <div class="nut-icon bg-info">
          <i class="fa-solid fa-wheat-awn"></i>
        </div>
        <span class="text-muted">Carbohydrates</span>
      </div>
      <span class="fw-bold">${myRecipe.nutrition.carbohydrates}</span>
    </div>
    <div class="nut-card">
      <div class="nut-left">
        <div class="nut-icon bg-danger">
          <i class="fa-solid fa-droplet"></i>
        </div>
        <span class="text-muted">Fat</span>
      </div>
      <span class="fw-bold">${myRecipe.nutrition.fat}</span>
    </div>
    <div class="nut-card">
      <div class="nut-left">
        <div class="nut-icon bg-success">
          <i class="fa-solid fa-leaf"></i>
        </div>
        <span class="text-muted">Fiber</span>
      </div>
      <span class="fw-bold">${myRecipe.nutrition.fiber}</span>
    </div>
    <div class="nut-card">
      <div class="nut-left">
        <div class="nut-icon bg-secondary">
          <i class="fa-solid fa-cube"></i>
        </div>
        <span class="text-muted">Sodium</span>
      </div>
      <span class="fw-bold">${myRecipe.nutrition.sodium}</span>
    </div>
  `;

  var chefTipsContent = "";
  for (var i = 0; i < myRecipe.chefTips.length; i++) {
    chefTipsContent += `
      <div class="tip-box">
        <i class="fa-solid fa-circle-check tip-icon"></i>
        <span>${myRecipe.chefTips[i]}</span>
      </div>
    `;
  }

  imgSection.innerHTML = imgContent;
  infoSection.innerHTML = recipeInfo;
  ingredientsList.innerHTML = ingredientsContent;
  instructionsList.innerHTML = instructionsContent;
  nutritionGrid.innerHTML = myNutrition;
  tipsList.innerHTML = chefTipsContent;
}