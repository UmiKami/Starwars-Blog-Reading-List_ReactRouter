import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../store/zustand";
import "../styles/Cards.css";

const CharacterCards = () => {
  const store = useStore();

  const [people, setPeople] = useState([]);

  const getFavoriteEntity = (name, e) => {
    store.addFavoriteEntity(name);
    setActiveFavorite(e);
  };

  const setActiveFavorite = (e) => {
    
  };

  useEffect(() => {
    setPeople(store.people);
  }, [store.people]);

  return (
    <>
      <h2 className="section-title text-light">Characters</h2>
      <div className="d-flex overflow-auto cards-container">
        {people.map(({ name, gender, eye_color, hair_color }, index) => {
          return (
            <div className="card col-1" style={{ width: "18rem" }} key={index}>
              <img
                src={
                  index >= 16
                    ? `https://starwars-visualguide.com/assets/img/characters/${
                        index + 2
                      }.jpg`
                    : `https://starwars-visualguide.com/assets/img/characters/${
                        index + 1
                      }.jpg`
                }
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bg-dark text-light">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                  <span className="d-block">{`Gender: ${gender}`}</span>
                  <span className="d-block">{`Hair-Color: ${hair_color}`}</span>
                  <span className="d-block">{`Eye-Color: ${eye_color}`}</span>
                </p>
                <div className="action-buttons">
                  <Link
                    to={`/character-details/${index + 1}`}
                    className="btn btn-outline-primary btn-outline-starwars-1"
                  >
                    Learn More!
                  </Link>
                  <a
                    href="/#"
                    className={`btn btn-outline-warning btn-outline-starwars-2`}
                    onClick={(e) => getFavoriteEntity(name, e)}
                  >
                    <i className={`fa-regular fa-heart`}></i>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CharacterCards;
