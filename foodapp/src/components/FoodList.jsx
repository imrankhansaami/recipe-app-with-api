import FoodItem from "./FoodItem";
import styles from "./foodlist.module.css";

export default function FoodList({ foodData, setFoodId }) {
  return (
    <div className={styles.foodListContainer}>
      {foodData && foodData.length > 0 ? (
        foodData.map((food) => (
          <FoodItem key={food.id} food={food} setFoodId={setFoodId} />
        ))
      ) : (
        <div className={styles.emptyMessage}>
          🔍 No recipes found. Try searching for something delicious!
        </div>
      )}
    </div>
  );
}
