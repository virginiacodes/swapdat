const categories = [
  "home",
  "food",
  "games",
  "clothes",
  "music",
  "craft",
  "pet",
  "electronics",
];

export default function Items({
  items,
  onLike,
  isLiked,
  isOpen,
  selectedCategorie,
}) {
  // ------- Favourites -------
  if (isOpen === "favourites")
    return (
      <ul className="list-items">
        {items
          .filter((item) => item.liked === true)
          .map((item) => (
            <Item item={item} onLike={onLike} isLiked={isLiked} />
          ))}
      </ul>
    );
  // ------- Free stuff -------
  else if (isOpen === "freeStuff")
    return (
      <ul className="list-items">
        {items.map((item) => (
          <Item item={item} onLike={onLike} />
        ))}
      </ul>
    );
  // ------- Categories -------
  else if (categories.includes(isOpen))
    return (
      <ul className="list-items">
        {items
          .filter((item) => item.categorie === isOpen)
          .map((item) => (
            <Item item={item} onLike={onLike} isLiked={isLiked} />
          ))}
      </ul>
    );
}

function Item({ item, onLike }) {
  return (
    <li className="item">
      <img src={item.image} alt={item.description} className="image-item" />
      {console.log(item.image)}
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <i
        class={
          item.liked === true
            ? "fa-solid fa-heart fa-lg"
            : "fa-regular fa-heart fa-lg"
        }
        onClick={() => onLike(item.id)}
      ></i>
    </li>
  );
}
