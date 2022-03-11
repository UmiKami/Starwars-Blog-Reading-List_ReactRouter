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
      <h2 className="section-title">Vehicles</h2>
      <div className="d-flex overflow-auto">
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
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">
                    <span className="d-block">{`Model: ${model}`}</span>
                    <span className="d-block">{`Make: ${manufacturer}`}</span>
                    <span className="d-block">
                      Price: {`₹${cost_in_credits}`}
                    </span>
                  </p>
                  <Link
                    to={`/vehicle-details/${index + 1}`}
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
          }
        )}
      </div>
    </>
  );
};

export default VehicleCards;
