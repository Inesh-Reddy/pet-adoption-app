import { useState } from "react";
let Animals = ["Bird", "Cat", "Pig", "Dog"];
const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const Breeds = ["poodle"];
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            id="location"
            value={location}
            placeholder="location"
          ></input>
        </label>

        <label htmlFor="animals">
          Animals
          <select
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            id="animals"
            value={animal}
          >
            <option />
            {Animals.map((animal) => {
              return <option key={animal}>{animal}</option>;
            })}
          </select>
        </label>

        <label htmlFor="breeds">
          Breeds
          <select
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            id="breeds"
            value={breed}
          >
            <option />
            {Breeds.map((breed) => {
              return <option key={breed}>{breed}</option>;
            })}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
