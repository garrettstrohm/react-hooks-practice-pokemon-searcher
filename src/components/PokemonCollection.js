import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons, isLoaded }) {
  const pokemonCards = pokemons.map(pokemon => <PokemonCard key={pokemon.id} name={pokemon.name} hp={pokemon.hp} frontSprite={pokemon.sprites.front} backSprite={pokemon.sprites.back}/>)

  return (
    <Card.Group itemsPerRow={6}>
      {isLoaded ? pokemonCards : <h1>Loading...</h1>}
    </Card.Group>
  );
}

export default PokemonCollection;
