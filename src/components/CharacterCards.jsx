import { useEffect, useState } from "react";
import useStore from "../store/zustand";
import "../styles/Cards.css";
import Character from "./Character";

const CharacterCards = () => {
  const store = useStore();

  const [people, setPeople] = useState([]);


  useEffect(() => {
    setPeople(store.people);
  }, [store.people]);

  return (
    <>
      <h2 className="section-title text-light">Characters</h2>
      <div className="d-flex overflow-auto cards-container">
        {people.map(({ name, gender, eye_color, hair_color }, index) => {
          return (
            <Character
              name={name}
              gender={gender}
              eye_color={eye_color}
              hair_color={hair_color}
              index={index}
              store={store}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default CharacterCards;
