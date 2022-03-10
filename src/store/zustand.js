import create from "zustand";

const useStore = create((set, get) => ({
  people: [],
  vehicles: [],
  planets: [],
  addPeople: (person) => {
    set({
      people: get().people.concat(person),
    });
  },
  addVehicle: (vehicle) => {
    set({
      vehicles: get().vehicles.concat(vehicle),
    });
  },
  addPlanets: (planet) => {
    set({
      planets: get().planets.concat(planet),
    });
  }
}));

export default useStore;
