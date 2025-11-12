import { useEffect, useState } from "react";
import styles from "./foodDetails.module.css";
import ItemList from "./ItemList";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!foodId) {
      setFood({});
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const controller = new AbortController();

    async function fetchFood() {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        if (data.meals && data.meals.length > 0) {
          const meal = data.meals[0];

          // Extract ingredients and measurements
          const ingredients = [];
          for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient && ingredient.trim()) {
              ingredients.push({
                id: i,
                name: ingredient,
                amount: measure || "",
                unit: "",
                image: ingredient.toLowerCase().replace(/\s+/g, "_") + ".png",
              });
            }
          }

          setFood({
            title: meal.strMeal,
            image: meal.strMealThumb,
            readyInMinutes: null,
            servings: null,
            vegetarian: false,
            vegan: false,
            pricePerServing: null,
            extendedIngredients: ingredients,
            analyzedInstructions: [
              {
                steps: meal.strInstructions
                  .split("\n")
                  .filter((step) => step.trim())
                  .map((step, idx) => ({
                    number: idx + 1,
                    step: step.trim(),
                  })),
              },
            ],
            category: meal.strCategory,
            area: meal.strArea,
            tags: meal.strTags ? meal.strTags.split(",") : [],
            source: meal.strSource,
            youtube: meal.strYoutube,
          });
        }
        setIsLoading(false);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
          setFood({});
        }
        setIsLoading(false);
      }
    }

    fetchFood();
    return () => controller.abort();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h3 className={styles.recipeName}>{food.title ?? "Select a recipe"}</h3>
        {food.image && (
          <img
            className={styles.recipeImage}
            src={food.image}
            alt={food.title}
          />
        )}
        <div className={styles.recipeDetails}>
          {food.category && (
            <span>
              <strong>📁 {food.category}</strong>
            </span>
          )}
          {food.area && (
            <span>
              <strong>� {food.area}</strong>
            </span>
          )}
          <br />
        </div>
        {food.tags && food.tags.length > 0 && (
          <div>
            <strong>Tags:</strong> {food.tags.join(", ")}
          </div>
        )}
        {food.youtube && (
          <div>
            <a href={food.youtube} target="_blank" rel="noopener noreferrer">
              🎥 Watch on YouTube
            </a>
          </div>
        )}
      </div>
      <div>
        {isLoading ? <p>Loading recipe...</p> : null}
        <h2>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading} />
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          {food.analyzedInstructions?.[0]?.steps?.length ? (
            <ol>
              {food.analyzedInstructions[0].steps.map((step, idx) => (
                <li key={step.number ?? idx}>{step.step}</li>
              ))}
            </ol>
          ) : (
            <p>No instructions available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
