import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe, recipes } from "../../data/recipes";

export function generateStaticParams() {
  return recipes.map((recipe) => ({ id: String(recipe.id) }));
}

export const dynamicParams = false;

export default async function RecipePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const recipe = getRecipe(id);
  if (!recipe) notFound();

  return (
    <main className="recipe-detail">
      <Link href="/#recipes">← Back to recipes</Link>
      <header>
        <p className="eyebrow">{recipe.cuisine} · {recipe.minutes} min · {recipe.difficulty}</p>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
      </header>
      <div className="recipe-detail__columns">
        <section>
          <h2>Ingredients</h2>
          <ul>{recipe.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}</ul>
        </section>
        <section>
          <h2>Method</h2>
          <ol>{recipe.steps.map((step) => <li key={step}>{step}</li>)}</ol>
        </section>
      </div>
    </main>
  );
}
