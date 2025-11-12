import { useEffect, useState } from "react";
import styles from "./search.module.css";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        const data = await res.json();
        console.log(data.meals);

        if (data.meals) {
          // Transform TheMealDB response to match app structure
          const transformedMeals = data.meals.map((meal) => ({
            id: meal.idMeal,
            title: meal.strMeal,
            image: meal.strMealThumb,
          }));
          setFoodData(transformedMeals);
        } else {
          setFoodData([]);
        }
      } catch (error) {
        console.error("Error fetching meals:", error);
        setFoodData([]);
      }
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
