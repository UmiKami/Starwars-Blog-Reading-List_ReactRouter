import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../store/zustand";
import "../styles/Cards.css";

const PlanetCards = () => {
  const store = useStore();

  const [planets, setPlanet] = useState([]);

  const getFavoriteEntity = (name) => {
    store.addFavoriteEntity(name);
  };

  useEffect(() => {
    setPlanet(store.planets);
  }, [store.planets]);

  return (
    <>
      <h2 className="section-title text-light">Planets</h2>
      <div className="d-flex overflow-auto cards-container">
        {planets.map(({ name, population, terrain }, index) => {
          return (
            <div
              className="card col-1 planet-card"
              style={{ width: "18rem" }}
              key={index}
            >
              <img
                src={
                  index + 2 < 20
                    ? `https://starwars-visualguide.com/assets/img/planets/${
                        index + 2
                      }.jpg`
                    : "https://starwars-visualguide.com/assets/img/placeholder.jpg"
                }
                className="card-img-top"
                alt="..."
                height={"75%"}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                }}
              />
              <div className="card-body bg-dark text-light">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                  <span className="d-block">{`Population: ${population}`}</span>
                  <span className="d-block">{`Terrain: ${terrain}`}</span>
                </p>
                <div className="action-buttons">
                  <Link
                    to={`/planet-details/${index + 1}`}
                    className="btn btn-outline-primary btn-outline-starwars-1"
                  >
                    Learn More!
                  </Link>
                  <a
                    href="/#"
                    className="btn btn-outline-warning btn-outline-starwars-2"
                    onClick={() => getFavoriteEntity(name)}
                  >
                    <i className="fa-regular fa-heart"></i>
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

export default PlanetCards;
