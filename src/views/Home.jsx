import Navbar from "../components/Navbar";
import CharacterCards from "../components/CharacterCards";
import PlanetCards from "../components/PlanetCards";
import VehicleCards from "../components/VehicleCards";
import "../styles/Home.css";

const Home = () => {
  return (
    <main className="container home-bg">
      <Navbar />
      <div className="container">
        <div className="container">
          <CharacterCards />
          <PlanetCards />
          <VehicleCards />
        </div>
      </div>
    </main>
  );
};

export default Home;
