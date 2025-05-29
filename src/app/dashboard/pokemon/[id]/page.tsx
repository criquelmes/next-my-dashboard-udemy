interface PokemonPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PokemonPage({ params }: PokemonPageProps) {
  const { id } = await params;
  console.log(id);

  return (
    <div>
      <h1>Hello Pokemon {id} Page</h1>
    </div>
  );
}
