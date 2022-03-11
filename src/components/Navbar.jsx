import useStore from "../store/zustand";
import "../styles/Navbar.css"

const Navbar = () => {
  const store = useStore();
  let favoriteEntityList = [...new Set(store.favorite_entity)];

  return (
    <nav className="navbar navbar-light bg-light container">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/11/Star-Wars-Logo-1977-present.jpg"
            alt="star wars logo"
            width={"60px"}
          />
        </a>
        <div className="dropdown">
          <a
            className="nav-link dropdown-toggle d-flex align-items-center bg-primary text-light"
            href="/"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <p className="dropdown-name">Favorites</p>
            <div className="favCount">{favoriteEntityList.length}</div>
          </a>

          <ul
            className="dropdown-menu  "
            aria-labelledby="navbarDropdown"
            onClick={(e) => e.stopPropagation()}
          >
            {favoriteEntityList.length == 0
              ? <span className="d-flex justify-content-center dropdown-text-content">(empty)</span>
              : favoriteEntityList.map((name, index) => {
                  return (
                    <li key={index}>
                      <div className="favorite-wrap d-flex align-items-center justify-content-between p-2">
                        <p className="dropdown-text-content m-0 ">{name}</p>
                        <i className="fa-solid fa-trash-can dropdown-text-content" />
                      </div>
                    </li>
                  );
                })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;