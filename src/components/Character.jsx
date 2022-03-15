import { useState } from "react";
import { Link } from "react-router-dom";

const Character = ({name, gender, eye_color, hair_color, index, store}) => {

	const [button, setButton] = useState("btn-outline-starwars-2");
	const [icon, setIcon] = useState("regular")

  const getFavoriteEntity = (name, e) => {
    store.addFavoriteEntity(name);
  };

  const changeToActive = (buttonE, iconE) =>{
		setButton(buttonE)
		setIcon(iconE)
  }


    return (
      <>
        <div className="card col-1" style={{ width: "18rem" }}>
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
                className={`btn btn-outline-warning ${button}`}
                onClick={(e) =>  {getFavoriteEntity(name, e); changeToActive("btn-outline-starwars-2-active", "solid");}}
              >
                <i className={`fa-${icon} fa-heart`}></i>
              </a>
            </div>
          </div>
        </div>
      </>
    );
}

export default Character