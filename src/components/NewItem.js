import { useState } from "react";

export default function NewItem({
  isNewItemWindowOpen,
  onCreateNewItem,
  newItem,
  setNewItem,
  items,
  setItems,
}) {
  const [numberOfItems, setNumberOfItems] = useState(4);
  const [userInput, setUserInput] = useState({
    id: 0,
    name: "",
    image: null,
    description: "",
    postcode: "",
    liked: false,
    categorie: "",
    free: true,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  }

  function handleImageChange(e) {
    setUserInput({
      ...userInput,
      image: URL.createObjectURL(e.target.files[0]),
    });
  }

  function handleSubmit() {
    const newItem = {
      id: numberOfItems,
      name: userInput.name,
      image: userInput.image,
      description: userInput.description,
      postcode: "",
      liked: false,
      categorie: "",
      free: true,
    };
    setItems([...items, newItem]);
    setNumberOfItems(numberOfItems + 1);
    onCreateNewItem();
  }

  return (
    <div className="new-item">
      <div className="new-item-form">
        <button id="close-new-item" onClick={() => onCreateNewItem()}>
          <i class="fa-solid fa-xmark fa-lg" style={{ color: "white" }}></i>
        </button>
        <form>
          <input
            type="text"
            id="title"
            name="name"
            placeholder="Title..."
            value={userInput.name}
            onChange={handleChange}
            required
          />
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="Description..."
            maxLength="40"
            rows="2"
            value={userInput.description}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            id="postcode"
            name="postcode"
            placeholder="Postcode..."
            minLength="4"
            maxLength="8"
            value={userInput.postcode}
            onChange={handleChange}
            required
          />
          <select>
            <option>- Select categorie -</option>
            <option value="home">Home</option>
            <option value="food">Food</option>
            <option value="games">Games</option>
            <option value="clothes">Clothes</option>
            <option value="music">Music instruments</option>
            <option value="craft">Craft</option>
            <option value="pet">Pet stuff</option>
            <option value="electronics">Electronics</option>
          </select>

          <input
            type="file"
            id="photo-upload"
            name="photo-upload"
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
          />
          <button
            id="upload-button"
            type="submit"
            onClick={() => handleSubmit()}
          >
            Upload item
          </button>
        </form>
      </div>
    </div>
  );
}
