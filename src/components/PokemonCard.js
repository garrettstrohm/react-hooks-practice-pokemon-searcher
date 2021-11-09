import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, hp, frontSprite, backSprite }) {
const [shownImage, setShownImage] = useState(frontSprite)

function handleClick(){
  if(shownImage === frontSprite){
    setShownImage(backSprite)
  } else if(shownImage === backSprite){
    setShownImage(frontSprite)
  }
}

  return (
    <Card id={shownImage} onClick={handleClick}>
      <div>
        <div className="image">
          <img src={shownImage} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
