import React,{useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const[search, setSearch] = useState("")
  const [pokemons, setPokemons] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(r => r.json())
    .then(pokemons => {
      setPokemons(pokemons)
      setIsLoaded(isLoaded => !isLoaded)
    })
  }, [])
  
  function handleSubmitEvent(newPoke) {
  
    // refactoring pokeObj
    const addedPoke = {
      id: "",
      name: newPoke.name,
      hp: newPoke.hp,
      sprites: {
        front: newPoke.front,
        back: newPoke.back
      }
    }
    // updatedPoke POST Req
    fetch(`http://localhost:3001/pokemon`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(addedPoke)
    })
    .then(r => r.json())
    .then(updatedPokemon => setPokemons([...pokemons, updatedPokemon]))
  }

  const pokemonList = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleSubmitEvent={handleSubmitEvent}/>
      <br />
      <Search search={search} setSearch={setSearch}/>
      <br />
      <PokemonCollection pokemons={pokemonList} isLoaded={isLoaded}/>
    </Container>
  );
}

export default PokemonPage;
