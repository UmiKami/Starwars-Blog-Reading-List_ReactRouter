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
      <h2 className="section-title">Planets</h2>
      <div className="d-flex overflow-auto">
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
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                  <span className="d-block">{`Population: ${population}`}</span>
                  <span className="d-block">{`Terrain: ${terrain}`}</span>
                </p>
                <Link
                  to={`/planet-details/${index + 1}`}
                  className="btn btn-outline-primary"
                >
                  Learn More!
                </Link>
                <a
                  href="/#"
                  className="btn btn-outline-warning"
                  onClick={() => getFavoriteEntity(name)}
                >
                  Add Favorite
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PlanetCards;
