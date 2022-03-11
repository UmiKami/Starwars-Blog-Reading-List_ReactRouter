import { useParams } from "react-router";
import useStore from "../store/zustand";
import Navbar from "../components/Navbar";

const CharacterDetails = () => {
  const store = useStore();

  const params = useParams();
  let person = store.people[params.entityId - 1];

  return (
    <>
      <Navbar />
      <main className="container">
        <section className="d-flex align-items-center gap-4">
          <img src="https://dummyimage.com/600x400/adadad/ffffff.jpg" alt="" />
          <div className="entity-description">
            <h1 className="text-center detail-header">
              {person && person.name}
            </h1>
            <p className="text-center detail-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              minima, cumque dolor veniam at ipsum quibusdam architecto debitis
              libero. Natus quasi aliquid facilis recusandae quia magni,
              incidunt, ad repellendus minus neque, et necessitatibus corrupti
              odit vel! Enim labore impedit optio minima laboriosam libero vel
              repellendus. Impedit hic dolorum quidem repudiandae!
            </p>
          </div>
        </section>
        <hr className="bg-danger" />
        <section className="entity-attributes">
          <table className="col-12">
            <tbody>
              <tr className="text-danger">
                <th>Name</th>
                <th>Gender</th>
                <th>Height</th>
                <th>Weight</th>
                <th>Eye Color</th>
                <th>Birth Year</th>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>{person && person.name}</td>
                <td>{person && person.gender}</td>
                <td>{person && person.height} cm</td>
                <td>{person && person.mass} kg</td>
                <td>{person && person.eye_color}</td>
                <td>{person && person.birth_year}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
};

export default CharacterDetails;
