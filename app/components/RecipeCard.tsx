import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className="recipe-card">
      <div className={`recipe-card__visual recipe-card__visual--${recipe.accent}`}>
        <span aria-hidden="true">{recipe.emoji}</span>
        <p>{recipe.cuisine}</p>
      </div>

      <div className="recipe-card__content">
        <div className="recipe-card__meta">
          <span>{recipe.minutes} min</span>
          <span aria-hidden="true">•</span>
          <span>{recipe.difficulty}</span>
        </div>
        <h2>{recipe.title}</h2>
        <p>{recipe.description}</p>
        <button className="recipe-card__action" type="button">
          View recipe <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
}
