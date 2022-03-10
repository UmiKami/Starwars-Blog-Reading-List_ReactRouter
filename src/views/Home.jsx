import Navbar from "../components/Navbar"
import CharacterCards from "../components/CharacterCards"
import PlanetCards from "../components/PlanetCards"
import VehicleCards from "../components/VehicleCards"

const Home = () => {
    return <main className="container bg-warning">
        <Navbar/>
        <CharacterCards/>
        <PlanetCards/>
        <VehicleCards/>
    </main>
}

export default Home