import { Pokemon } from "@/pokemons";

interface Props {
  params: {
    id: string;
  };
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "force-cache", // TODO: Cambiar esto en el futuro
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const pokemon = await res.json();
  console.log(pokemon);
  return pokemon;
};

export default async function PokemmonPage({ params }: Props) {
  const pokemon = await getPokemon(params.id);
  return (
    <div>
      <h1>Hello Pokemon {params.id}</h1>
      <div>{JSON.stringify(pokemon)}</div>
    </div>
  );
}
