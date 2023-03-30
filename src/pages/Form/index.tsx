import { FormEvent, useEffect, useState } from "react";
import axios from "axios";

export const Form = (): JSX.Element => {
  const [allData, setAlldata] = useState<any>(null);

  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<any>(null);

  const getAllAPi = async (name: string) => {
    try {
      console.log(name);
      let nameLoweCase = name.toLowerCase();
      const url = `https://pokeapi.co/api/v2/pokemon/${nameLoweCase}`;
      const response = await axios.get(url);
      const pokemonData = response.data;
      setAlldata(pokemonData);
    } catch (err) {
      setError(err);
      console.log(error);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>, input: string) => {
    e.preventDefault();
    getAllAPi(input);
  };
  return (
    <>
      {" "}
      <form onSubmit={(e) => handleSubmit(e, input)} action="">
        <input onChange={(e) => setInput(e.target.value)} type="text"></input>
        <input type="submit" value="BUSCAR"></input>
      </form>
      {allData && (
        <div>
          <img src={allData.sprites.front_default} alt={allData.name}></img>
          {error ? <h1>No existe ese pokemon </h1> : <h1>el.name</h1>}
        </div>
      )}
    </>
  );
};
