
import React,{useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleSubmitEvent}) {
  
const [pokeData, setPokeData] = useState({
  id: "",
  name: "",
  hp: "",
  front: "",
  back: ""
})

function handleSubmitClick(e){
  e.preventDefault();
  handleSubmitEvent(pokeData)
  setPokeData({
    id: "",
    name: "",
    hp: "",
    front: "",
    back: ""
  })
}

function handleChange(e){
  setPokeData({...pokeData, [e.target.name]: e.target.value})
}

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmitClick}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={pokeData.name} onChange={handleChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={pokeData.hp} onChange={handleChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            value={pokeData.front}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            value={pokeData.back}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
