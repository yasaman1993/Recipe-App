import AlphabeticalMeals from "./AlphabeticalMeals";
import RandomMeal from "./RandomMeal";
import Category from "./Categories";

export default function HomePage() {
  return (
    <div>
      <header>
        <h1>YummyPots</h1>
      </header>
      <section>
        <AlphabeticalMeals />
        <RandomMeal />
        <Category />
      </section>
    </div>
  );
}

