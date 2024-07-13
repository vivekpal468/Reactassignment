import React from 'react';
import ReactDOM from "react-dom/client";



const BasketballPlayerCard = ({ name, image, position, stats }) => {
  return (
    <div className="player-card">
      <img src={"https://upload.wikimedia.org/wikipedia/commons/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg"} alt={name} className="player-image" />
      <h2 className="player-name">{name}</h2>
      <p className="player-position">{position}</p>
      <div className="player-stats">
        <p>Points per Game: {stats.pointsPerGame}</p>
        <p>Assists per Game: {stats.assistsPerGame}</p>
        <p>Rebounds per Game: {stats.reboundsPerGame}</p>
      </div>
    </div>
  );
};

export default BasketballPlayerCard;



