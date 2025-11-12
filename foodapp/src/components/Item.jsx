import styles from "./item.module.css";

export default function Item({ item }) {
  // Fallback image or placeholder for TheMealDB
  const imageUrl = `https://www.themealdb.com/images/ingredients/${item.name}-Small.png`;

  return (
    <div>
      <div className={styles.itemContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={imageUrl}
            alt={item.name || "ingredient"}
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/100?text=No+Image";
            }}
          />
        </div>
        <div className={styles.nameContainer}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.amount}>
            Amount: {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
