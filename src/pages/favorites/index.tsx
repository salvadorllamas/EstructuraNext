import { useEffect, useState } from "react";
import { Layout } from "../../../components/layouts";
import NoFavorites from "../../../components/ui/NoFavorites";
import { localFavorites } from "../../../utils";
import {FavoritePokemons} from '../../../components/pokemon';


const index = () => {
  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setfavoritePokemons(localFavorites.pokemons);
  }, []);

  return (
    <>
      <Layout title="Pokemons - Favoritos">
        {favoritePokemons.length == 0 ? (
          <NoFavorites />
        ) : (
          <FavoritePokemons pokemons={favoritePokemons} />
        )}
      </Layout>
    </>
  );
};

export default index;
