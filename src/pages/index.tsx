import { GetServerSideProps, NextPage } from "next";
import { Layout } from "../../components/layouts";
import { pokeApi } from "../../api";
import { PokemonListResponse, SmallPokemon } from "../../interfaces";
import { Grid } from "@nextui-org/react";
import { PokemonCard } from "../../components/pokemon";

interface Props {
  pokemones: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemones }) => {
  return (
    <Layout title="Este es el titulo">
      <Grid.Container gap={2} justify="flex-start">
        {pokemones.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // const { data } = await  // your fetch function here
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemones: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));
  return {
    props: {
      pokemones,
    },
  };
};

export default HomePage;
