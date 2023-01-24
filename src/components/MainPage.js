import React, { useEffect, useState } from "react";
import BotArmy from "./BotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  let [bots, setBots] = useState([]);
  let [army, setArmy] = useState([]);

  function select(bot) {
    if (army.includes(bot)) return;
    setArmy((army) => [...army, bot]);
  }
  function retire(bot) {
    setArmy((army) => army.filter((robot) => robot.id !== bot.id));
  }
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  function handleDelete(bot) {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    }).then(() => {
      setBots((bots) => bots.filter((robot) => robot.id !== bot.id));
      setArmy((army) => army.filter((robot) => robot.id !== bot.id));
    });
  }

  return (
    <div>
      <BotArmy collection={army} clickHandler={retire} handleDelete={handleDelete} />
      <BotCollection collection={bots} clickHandler={select} handleDelete={handleDelete} />
    </div>
  );
}

export default BotsPage;