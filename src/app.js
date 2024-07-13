import React from "react";
import ReactDOM from "react-dom/client";
import BasketballPlayerCard from "./BasketBallPlayerCard";
import './BasketballPlayerCard.css';

const player = {
  name: 'LeBron James',
  image: 'https://example.com/lebron.jpg',
  position: 'Forward',
  stats: {
    pointsPerGame: 25.4,
    assistsPerGame: 7.1,
    reboundsPerGame: 10.5
  }
};

const App = () => {
  return (
    <div className="App">
      <BasketballPlayerCard
        name={player.name}
        image={player.image}
        position={player.position}
        stats={player.stats}
      />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;

