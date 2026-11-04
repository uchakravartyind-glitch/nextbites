import RecipeGrid from "./components/RecipeGrid";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">Simple recipes. Remarkable meals.</p>
          <h1>
            What should we
            <span> cook next?</span>
          </h1>
          <p className="hero__description">
            Weeknight-friendly recipes made for real kitchens, hungry people,
            and the joy of trying something new.
          </p>
          <a className="hero__cta" href="#recipes">
            Explore recipes <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="hero__art" aria-hidden="true">
          <div className="hero__plate">🍲</div>
          <span className="hero__spark hero__spark--one">✦</span>
          <span className="hero__spark hero__spark--two">✦</span>
          <span className="hero__note">Made with good things</span>
        </div>
      </section>

      <section className="recipes-section" id="recipes">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Fresh from the kitchen</p>
            <h2>Recipes worth repeating</h2>
          </div>
          <p>{recipes.length} hand-picked ideas for your next meal</p>
        </div>

        <RecipeGrid recipes={recipes} />
      </section>
    </main>
  );
}
