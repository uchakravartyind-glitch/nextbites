export type Recipe = {
  id: number;
  title: string;
  description: string;
  minutes: number;
  cuisine: string;
  difficulty: "Easy" | "Medium";
  emoji: string;
  accent: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Creamy Tomato Pasta",
    description: "Silky tomato sauce, garlic, and parmesan tossed with al dente rigatoni.",
    minutes: 25,
    cuisine: "Italian",
    difficulty: "Easy",
    emoji: "🍝",
    accent: "tomato",
    ingredients: ["200 g rigatoni","1 tbsp olive oil","2 garlic cloves, minced","400 g chopped tomatoes","60 ml cream","30 g grated parmesan"],
    steps: ["Boil the pasta according to the packet instructions and reserve a little cooking water.","Heat the oil and gently cook the garlic for one minute. Add tomatoes and simmer for 10 minutes.","Stir in cream and parmesan, then toss with drained pasta. Loosen with reserved water and serve."],
  },
  {
    id: 2,
    title: "Miso Glazed Salmon",
    description: "Caramelized salmon with a savory miso glaze, sesame, and scallions.",
    minutes: 30,
    cuisine: "Japanese",
    difficulty: "Medium",
    emoji: "🍣",
    accent: "miso",
    ingredients: ["2 salmon fillets","1 tbsp white miso","1 tbsp soy sauce","1 tbsp maple syrup","1 tsp sesame oil","2 scallions, sliced"],
    steps: ["Heat the oven to 200°C and line a baking tray.","Mix miso, soy sauce, maple syrup, and sesame oil. Brush over the salmon.","Bake for 12–18 minutes until the thickest part reaches 63°C. Scatter scallions over the fish and serve."],
  },
  {
    id: 3,
    title: "Roasted Veggie Tacos",
    description: "Smoky seasonal vegetables, avocado crema, and lime in warm tortillas.",
    minutes: 35,
    cuisine: "Mexican",
    difficulty: "Easy",
    emoji: "🌮",
    accent: "lime",
    ingredients: ["6 small tortillas","1 bell pepper, sliced","1 courgette, chopped","1 tbsp olive oil","1 tsp smoked paprika","1 avocado","1 lime"],
    steps: ["Heat the oven to 220°C. Toss the pepper and courgette with oil and paprika.","Roast the vegetables for 20–25 minutes until tender.","Mash the avocado with lime juice. Warm the tortillas, fill with vegetables, and top with avocado."],
  },
  {
    id: 4,
    title: "Coconut Chickpea Curry",
    description: "A cozy one-pot curry with chickpeas, coconut milk, spinach, and ginger.",
    minutes: 28,
    cuisine: "Indian",
    difficulty: "Easy",
    emoji: "🍛",
    accent: "curry",
    ingredients: ["400 g canned chickpeas, drained","400 ml coconut milk","1 onion, diced","1 tbsp oil","1 tbsp grated ginger","1 tbsp curry powder","100 g spinach"],
    steps: ["Heat the oil and soften the onion for five minutes.","Add ginger and curry powder and stir for one minute.","Add chickpeas and coconut milk. Simmer for 15 minutes, then stir in spinach until wilted."],
  },
  {
    id: 5,
    title: "Lemon Herb Chicken",
    description: "Golden chicken with rosemary, bright lemon, and crisp roasted potatoes.",
    minutes: 45,
    cuisine: "Mediterranean",
    difficulty: "Medium",
    emoji: "🍋",
    accent: "lemon",
    ingredients: ["2 boneless chicken breasts","400 g potatoes, cubed small","2 tbsp olive oil","1 lemon","2 rosemary sprigs","2 garlic cloves, minced"],
    steps: ["Heat the oven to 220°C. Toss potatoes with half the oil and roast for 15 minutes.","Coat chicken with remaining oil, lemon juice, garlic, and rosemary. Add to the tray.","Roast for another 20–25 minutes until the chicken reaches 74°C in the thickest part and potatoes are tender. Rest five minutes before serving."],
  },
  {
    id: 6,
    title: "Berry French Toast",
    description: "Custardy brioche topped with warm berries, maple syrup, and yogurt.",
    minutes: 20,
    cuisine: "French",
    difficulty: "Easy",
    emoji: "🫐",
    accent: "berry",
    ingredients: ["4 brioche slices","2 eggs","100 ml milk","1 tsp vanilla","1 tbsp butter","150 g mixed berries","2 tbsp maple syrup","4 tbsp yogurt"],
    steps: ["Whisk eggs, milk, and vanilla in a shallow bowl.","Dip each bread slice in the mixture. Heat butter in a pan and cook each side for 3–4 minutes until golden and the egg is cooked.","Warm the berries in a small pan. Serve toast with berries, syrup, and yogurt."],
  },
];

export function getRecipe(id: string) {
  return recipes.find((recipe) => String(recipe.id) === id);
}
