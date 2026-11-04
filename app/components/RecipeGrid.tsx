"use client";

import { useState } from "react";
import type { Recipe } from "../data/recipes";
import RecipeCard from "./RecipeCard";

export default function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  const [query, setQuery] = useState("");
  const search = query.trim().toLowerCase();
  const matches = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(search) ||
    recipe.cuisine.toLowerCase().includes(search)
  );

  return (
    <div>
      <label className="search-label" htmlFor="recipe-search">Find your next meal</label>
      <input id="recipe-search" className="recipe-search" type="search"
        placeholder="Search by title or cuisine…" value={query}
        onChange={(event) => setQuery(event.target.value)} />
      <p role="status">{matches.length} recipes found</p>
      {matches.length > 0 ? (
        <div className="recipe-grid">
          {matches.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}
        </div>
      ) : (
        <p className="empty-state">No recipes match “{query}”. Try another title or cuisine.</p>
      )}
    </div>
  );
}
