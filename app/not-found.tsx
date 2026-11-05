import Link from "next/link";

export default function NotFound() {
  return (
    <main className="state-page">
      <p className="eyebrow">404 · Recipe not found</p>
      <h1>That dish is not on the menu.</h1>
      <p>The recipe may have moved, or the address may be incorrect.</p>
      <Link className="state-page__action" href="/">
        Back to all recipes
      </Link>
    </main>
  );
}
