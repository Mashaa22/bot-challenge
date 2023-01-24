import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, clickHandler, handleDelete }) {
  return (
    <div className="ui column">
      <div className="ui card" key={bot.id} onClick={() => clickHandler(bot)}>
        <div className="image">
          <img alt="loading..." src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>
          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned ">
              <button
                onClick={(e) => {
                  handleDelete(bot);
                }}
              >
                Delete
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;