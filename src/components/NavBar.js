import { useState } from "react";

export default function NavBar({ onChangeTab, isOpen, onSelectCategorie }) {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  function handleShowCategories() {
    setIsCategoriesOpen(!isCategoriesOpen);
  }

  return (
    <div className="navbar-container">
      <ul className="navbar">
        <li className="nav-item" onMouseEnter={handleShowCategories}>
          Categories
        </li>
        <li
          className={isOpen === "freeStuff" ? "nav-item open" : "nav-item"}
          onClick={() => onChangeTab("freeStuff")}
        >
          Free stuff
        </li>
        <li
          className={isOpen === "favourites" ? "nav-item open" : "nav-item"}
          onClick={() => onChangeTab("favourites")}
        >
          Favourites
        </li>
        <li
          className={isOpen === "messages" ? "nav-item open" : "nav-item"}
          onClick={() => onChangeTab("messages")}
        >
          Messages
        </li>
      </ul>
      <div
        className={
          isCategoriesOpen ? "categories-container" : "categories-hidden"
        }
        onMouseLeave={handleShowCategories}
      >
        <ul className="categories">
          <li onClick={() => onChangeTab("home")}>Home</li>
          <li onClick={() => onChangeTab("food")}>Food</li>
          <li onClick={() => onChangeTab("games")}>Games</li>
          <li onClick={() => onChangeTab("clothes")}>Clothes</li>
        </ul>
        <ul className="categories">
          <li onClick={() => onChangeTab("music")}>Music instruments</li>
          <li onClick={() => onChangeTab("craft")}>Craft</li>
          <li onClick={() => onChangeTab("pet")}>Pet stuff</li>
          <li onClick={() => onChangeTab("electronics")}>Electronics</li>
        </ul>
      </div>
    </div>
  );
}
