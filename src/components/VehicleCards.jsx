import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../store/zustand";
import "../styles/Cards.css";

const VehicleCards = () => {
  const store = useStore();

  const [vehicles, setVehicles] = useState([]);

  const getFavoriteEntity = (name) => {
    store.addFavoriteEntity(name);
  };

  useEffect(() => {
    setVehicles(store.vehicles);
  }, [store.vehicles]);

  return (
    <>
      <h2 className="section-title text-light">Vehicles</h2>
      <div className="d-flex overflow-auto cards-container">
        {vehicles.map(
          ({ name, model, manufacturer, cost_in_credits }, index) => {
            return (
              <div
                className="card col-1"
                style={{ width: "18rem" }}
                key={index}
              >
                <img
                  src={`https://starwars-visualguide.com/assets/img/placeholder.jpg`}
                  className="card-img-top"
                  alt="..."
                  // height={"75%"}
                />
                <div className="card-body bg-dark text-light">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">
                    <span className="d-block">{`Model: ${model}`}</span>
                    <span className="d-block">{`Make: ${manufacturer}`}</span>
                    <span className="d-block">
                      Price: {`₹${cost_in_credits}`}
                    </span>
                  </p>
                  <div className="action-buttons">
                    <Link
                      to={`/vehicle-details/${index + 1}`}
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
          }
        )}
      </div>
    </>
  );
};

export default VehicleCards;
