import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import Image from "next/image";

const getPokemons = async ({
  limit = 20,
  offset = 0,
}): Promise<SimplePokemon[]> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );

  const data: PokemonsResponse = await response.json();
  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/")[6],
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons({ limit: 151, offset: 0 });
  return (
    <div className="flex flex-col">
      <span className="text-2xl font-bold text-gray-800 ">
        Listado de Pokemons <small>static</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
