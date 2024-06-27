export default function NewItem({ isNewItemWindowOpen, onCreateNewItem }) {
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
            name="title"
            placeholder="Title..."
            required
          />
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="Description..."
            maxLength="40"
            rows="2"
            required
          />
          <input
            type="text"
            id="postcode"
            name="postcode"
            placeholder="Postcode..."
            minLength="4"
            maxLength="8"
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
          />
          <button id="upload-button" type="submit">
            Upload item
          </button>
        </form>
      </div>
    </div>
  );
}
