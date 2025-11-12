import Item from "./Item";

export default function ItemList({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading ingredients...</p>
      ) : food.extendedIngredients && food.extendedIngredients.length > 0 ? (
        food.extendedIngredients.map((item, idx) => (
          <Item key={item.id ?? item.name ?? idx} item={item} />
        ))
      ) : (
        <p>No ingredients available.</p>
      )}
    </div>
  );
}
