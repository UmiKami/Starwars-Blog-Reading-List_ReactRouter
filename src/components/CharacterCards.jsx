import {  useEffect, useState } from "react";
import useStore from "../store/zustand";
import "../styles/Cards.css";

const CharacterCards = () => {
  const store = useStore();

  const [people, setPeople] = useState([]);

  const getFavoriteEntity = (name) => {
    store.addFavoriteEntity(name)
  }

  useEffect(() => {

    setPeople(store.people);
  }, [store.people]);
  
  return (
    <>
      <h2 className="section-title">Characters</h2>
      <div className="d-flex overflow-auto">
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
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                  <span className="d-block">{`Gender: ${gender}`}</span>
                  <span className="d-block">{`Hair-Color: ${hair_color}`}</span>
                  <span className="d-block">{`Eye-Color: ${eye_color}`}</span>
                </p>
                <a href="/#" className="btn btn-outline-primary">
                  Learn More!
                </a>
                <a href="/#" className="btn btn-outline-warning" onClick={()=>getFavoriteEntity(name)}>
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

export default CharacterCards;