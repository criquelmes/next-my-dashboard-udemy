const getPokemons = async ({ limit = 20, offset = 0 }) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const data = await response.json();
  return data;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons({ limit: 20, offset: 0 });
  return <div>{JSON.stringify(pokemons)}</div>;
}
