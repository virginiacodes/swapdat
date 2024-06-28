import { useState } from "react";
import "../styles/App.css";
import "../styles/login.css";
import "../styles/newItem.css";

import Login from "./Login";
import Logo from "./Logo";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Items from "./Items";
import NewItem from "./NewItem";

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

export default function App() {
  // Original items list
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Box of candles",
      image: "../../images/candles.jpg",
      description: "Box of multicolour candles",
      postcode: "E58AJ",
      liked: false,
      categorie: "home",
      free: true,
    },
    {
      id: 2,
      name: "House plants",
      image: "../../images/plants.jpg",
      description: "Bunch of house plants",
      postcode: "N46UP",
      liked: false,
      categorie: "home",
      free: true,
    },
    {
      id: 3,
      name: "Halloween sweets",
      image: "../../images/candies.jpg",
      description: "Leftovers from the trick or treat bowl",
      postcode: "N164TK",
      liked: false,
      categorie: "food",
      free: true,
    },
  ]);
  // State tracking which category page is open
  const [isOpen, setIsOpen] = useState("");
  // This state is not used yet, but is here to deal with login page
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // State used to display new item window or hide it
  const [isNewItemWindowOpen, setNewItemWindow] = useState(false);
  // State containing new item object when created
  const [newItem, setNewItem] = useState({});

  function handleChangeTab(tab) {
    setIsOpen(tab);
  }
  // Add item to favourite list when user click on the heart icon
  function handleIsLiked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, liked: !item.liked } : item
      )
    );
  }

  function handleNewItemWindow() {
    setNewItemWindow(!isNewItemWindowOpen);
  }

  return (
    <div className="app">
      {/* <Login />
      {isLoggedIn && ( */}
      <>
        <Logo
          isNewItemWindowOpen={isNewItemWindowOpen}
          onCreateNewItem={handleNewItemWindow}
        />
        <NavBar onChangeTab={handleChangeTab} isOpen={isOpen} />
        <SearchBar />
        <Items items={items} onLike={handleIsLiked} isOpen={isOpen} />

        {isNewItemWindowOpen && (
          <NewItem
            isNewItemWindowOpen={isNewItemWindowOpen}
            onCreateNewItem={handleNewItemWindow}
            newItem={newItem}
            setNewItem={setNewItem}
            items={items}
            setItems={setItems}
          />
        )}
      </>
      {/* )} */}
    </div>
  );
}
