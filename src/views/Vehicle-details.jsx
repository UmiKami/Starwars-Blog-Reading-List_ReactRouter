import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import useStore from "../store/zustand";

const VehicleDetails = () => {
  const store = useStore();

  const params = useParams();
  let vehicle = store.vehicles[params.entityId - 1];

  return (
    <>
      <Navbar />
      <main className="container">
        <section className="d-flex align-items-center gap-4">
          <img src="https://dummyimage.com/600x400/adadad/ffffff.jpg" alt="" />
          <div className="entity-description">
            <h1 className="text-center detail-header">
              {vehicle && vehicle.name}
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
                <th>Model</th>
                <th>Vehicle Class</th>
                <th>Manufacturer</th>
                <th>Length</th>
                <th>Crew Cap</th>
                <th>Cargo Cap</th>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>{vehicle && vehicle.name}</td>
                <td>{vehicle && vehicle.model}</td>
                <td>{vehicle && vehicle.vehicle_class}</td>
                <td>{vehicle && vehicle.manufacturer} days</td>
                <td>{vehicle && vehicle.length}</td>
                <td>{vehicle && vehicle.crew}</td>
                <td>{vehicle && vehicle.cargo_capacity}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
};

export default VehicleDetails;
