import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotSpecs({ bot }) {
  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img alt="loading..." className="ui medium image bordered" src={bot.avatar_url} />
          </div>
          <div className="four wide column">
            <h2>{bot.name}</h2>
            <p>
              <strong></strong>
              {bot.catchphrase}
            </p>
            <strong>
              {bot.bot_class}
              <i className={botTypeClasses[bot.bot_class]} />
            </strong>
            <br />
            <div >
              <div className="ui grid">
                <div className="row">
                  <div className="column">
                    <i className="icon heartbeat" />
                    <strong>{bot.health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon lightning" />
                    <strong>{bot.damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon shield" />
                    <strong>{bot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotSpecs;