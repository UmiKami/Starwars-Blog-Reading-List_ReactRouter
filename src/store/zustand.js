import create from "zustand";

const useStore = create((set, get) => ({
  people: [],
  vehicles: [],
  planets: [],
  favorite_entity: [],
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
  },
  addFavoriteEntity: (name) => {
    set({
      favorite_entity: get().favorite_entity.concat(name)
    })
  },
  updateFavoriteEntity: (targetIndex) => {
    set({
      favorite_entity: get().favorite_entity.filter((e, currentIndex) => currentIndex != targetIndex)
    })
  }
}));

export default useStore;
