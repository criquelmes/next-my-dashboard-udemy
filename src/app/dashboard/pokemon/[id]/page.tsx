import { Pokemon } from "@/pokemons";
import { Metadata } from "next";

interface PokemonPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: PokemonPageProps): Promise<Metadata> {
  const { id, name } = await getPokemon((await params).id);

  return {
    title: `#${id} - ${name}`,
    description: `Página del Pokémon ${name}`,
  };
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "force-cache",
  }).then((res) => res.json());

  console.log("se cargo: ", pokemon.name);
  return pokemon;
};

export default async function PokemonPage({ params }: PokemonPageProps) {
  const { id } = await params;
  const pokemon = await getPokemon(id);

  return (
    <div>
      <h1>Hello Pokemon {id} Page</h1>
      <div>{pokemon.name}</div>
    </div>
  );
}
