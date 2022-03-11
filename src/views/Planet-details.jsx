import { useParams } from "react-router";
import useStore from "../store/zustand";
import Navbar from "../components/Navbar";

const PlanetDetails = () => {
  const store = useStore();

  const params = useParams();
  let planet = store.planets[params.entityId - 1];

  return (
    <>
      <Navbar />
      <main className="container">
        <section className="d-flex align-items-center gap-4">
          <img src="https://dummyimage.com/600x400/adadad/ffffff.jpg" alt="" />
          <div className="entity-description">
            <h1 className="text-center detail-header">
              {planet && planet.name}
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
                <th>One Day</th>
                <th>One Year</th>
                <th>Climate</th>
                <th>Terrain</th>
                <th>Population</th>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>{planet && planet.name}</td>
                <td>{planet && planet.rotation_period} hours</td>
                <td>{planet && planet.orbital_period} days</td>
                <td>{planet && planet.climate}</td>
                <td>{planet && planet.terrain}</td>
                <td>{planet && planet.population}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
};

export default PlanetDetails;
