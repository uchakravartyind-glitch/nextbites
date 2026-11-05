import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe, recipes } from "../../../lib/recipes";
export function generateStaticParams() { return recipes.map(recipe => ({ id: recipe.id })); }
export default async function RecipePage({ params }: { params: Promise<{ id: string }> }) {
 const { id } = await params;
 const recipe = getRecipe(id);
 if (!recipe) notFound();
 return <main className="mx-auto max-w-3xl px-6 py-14"><Link className="text-orange-600 hover:underline" href="/">← All recipes</Link><div className="mt-8 text-7xl">{recipe.emoji}</div><h1 className="mt-4 text-4xl font-extrabold">{recipe.name}</h1><p className="mt-3 text-zinc-600">{recipe.description}</p><p className="mt-4 font-semibold text-orange-600">{recipe.time} · {recipe.difficulty}</p><h2 className="mt-10 text-2xl font-bold">Ingredients</h2><ul className="mt-4 list-disc space-y-2 pl-6">{recipe.ingredients.map(item=><li key={item}>{item}</li>)}</ul><h2 className="mt-10 text-2xl font-bold">Instructions</h2><ol className="mt-4 list-decimal space-y-4 pl-6">{recipe.steps.map(step=><li key={step}>{step}</li>)}</ol></main>;
}
