import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../store/zustand";
import "../styles/Navbar.css";

const Navbar = () => {
  const store = useStore();

	const [favoritesList, setFavoritesList] = useState([]);
	
	useEffect(()=>{
		setFavoritesList([...new Set(store.favorite_entity)]);
	}, [setFavoritesList, store.favorite_entity])

  const deleteItem = (targetIndex) => {
		// updates state of the list in the store
		store.updateFavoriteEntity(targetIndex)
	};

  return (
    <nav className="navbar navbar-light bg-transparent container mb-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo..png"
            alt="star wars logo"
            width={"128px"}
          />
        </Link>
        <div className="dropdown">
          <a
            className="nav-link dropdown-toggle d-flex align-items-center bg-primary bg-primary-star text-light"
            href="/"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <p className="dropdown-name text-dark">Favorites</p>
            <div className="favCount">{favoritesList.length}</div>
          </a>

          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdown"
            onClick={(e) => e.stopPropagation()}
          >
            {favoritesList.length === 0 ? (
              <span className="d-flex justify-content-center dropdown-text-content">
                (empty)
              </span>
            ) : (
              favoritesList.map((name, index) => {
                return (
                  <li key={index}>
                    <div className="favorite-wrap d-flex align-items-center justify-content-between p-2">
                      <p className="dropdown-text-content m-0 ">{name}</p>
                      <span onClick={() => deleteItem(index)}>
                        <i className="fa-solid fa-trash-can dropdown-text-content trash" />
                      </span>
                    </div>
                    <div className="dropdown-divider"></div>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
