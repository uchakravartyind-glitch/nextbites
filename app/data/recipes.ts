export type Recipe = {
  id: number;
  title: string;
  description: string;
  minutes: number;
  cuisine: string;
  difficulty: "Easy" | "Medium";
  emoji: string;
  accent: string;
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
  },
];
