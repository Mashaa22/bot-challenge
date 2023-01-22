import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ collection, clickHandler, deleteHandler }) {
  return (
    <div className="ui segment inverted green ">
      <div className="ui six column grid">
        <div className="row bot-army-row">
          {collection.map((bot) => (
            <BotCard key={bot.id} bot={bot} clickHandler={clickHandler} deleteHandler={deleteHandler} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;