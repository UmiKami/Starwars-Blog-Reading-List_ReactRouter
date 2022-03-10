import { useEffect, useState } from "react";
import useStore from "../store/zustand";
import "../styles/Cards.css";

const PlanetCards = () => {
  const store = useStore();

  const [planets, setPlanet] = useState([]);

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
                src={`https://starwars-visualguide.com/assets/img/planets/${
                  index + 2
                }.jpg`}
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
                <a href="/#" className="btn btn-outline-primary ">
                  Learn More!
                </a>
                <a href="/#" className="btn btn-outline-warning">
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
