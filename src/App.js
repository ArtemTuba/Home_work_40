import React, {useState} from "react";
function App() {

  const [smileys, setSmileys] = useState([
    { emoji: "😀", count: 0 },
    { emoji: "😍", count: 0 },
    { emoji: "😂", count: 0 },
    { emoji: "🤔", count: 0 },
  ]);

  const handleClick = (index) => {
    const newSmileys = [...smileys];
    newSmileys[index].count++;
    setSmileys(newSmileys);
  };

  const [winner, setWinner] = useState(null);

  const showResults = () => {
    let maxCount = -1;
    let winningSmiley = null;
    smileys.forEach((smiley) => {
      if (smiley.count > maxCount) {
        maxCount = smiley.count;
        winningSmiley = smiley.emoji;
      }
    });
    setWinner(winningSmiley);
  };
  
  return (
    <div>
    {smileys.map((smiley, index) => (
        <div key={smiley.emoji}>
          <span>{smiley.emoji}</span>
          <span>{smiley.count}</span>
          <button onClick={() => handleClick(index)}>Like</button>
        </div>
      ))}
      <button onClick={showResults}>Show Results</button>
      <div>The winner is: {winner}</div>
    </div>
  );
}

export default App;
