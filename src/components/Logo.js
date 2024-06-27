export default function Logo({ isNewItemWindowOpen, onCreateNewItem }) {
  return (
    <div className="logo-container">
      <div className="logo-items">
        <h1 className="logo">SwapDat</h1>
      </div>
      <form className="search-bar-container">
        <input className="search-bar" placeholder="Search for items..." />
      </form>

      <div className="logo-items">
        <ul className="add-profile-icons">
          <li className="icons">
            <i
              class="fa-regular fa-square-plus fa-2xl"
              onClick={() => onCreateNewItem()}
            ></i>
          </li>
          <li className="icons">
            <i class="fa-regular fa-user fa-2xl"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}
