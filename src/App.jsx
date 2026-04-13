import { useState, useEffect } from "react";
import "./App.css";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateColors() {
  return Array.from({ length: 3 }, getRandomColor);
}

export default function App() {
  const [colors, setColors] = useState([]);
  const [target, setTarget] = useState("");
  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);

  function resetGame() {
    const newColors = generateColors();
    const newTarget =
      newColors[Math.floor(Math.random() * newColors.length)];

    setColors(newColors);
    setTarget(newTarget);
    setSelected(null);
    setLocked(false);
  }

  useEffect(() => {
    resetGame();
  }, []);

  function handleGuess(color) {
    if (locked) return;

    setSelected(color);
    setLocked(true);

    if (color === target) {
      setScore((prev) => prev + 1);
    }
  }

  function getResultClass(color) {
    if (!locked) return "";

    if (color === target) return "correct";
    if (color === selected && color !== target) return "incorrect";

    return "";
  }

  function getResultText() {
    if (!locked) return "";
    return selected === target ? "correct-text" : "incorrect-text";
  }

  return (
    <div className="app">
      <h1 className="title">🎨 Color Guessing Game</h1>

      <h2 className="target">Find: {target}</h2>

      <h3 className="score">Score: {score}</h3>

      <div className="swatch-container">
        {colors.map((color) => (
          <div key={color} className="swatch-wrapper">
            <div
              className={`swatch ${
                locked ? "locked" : "clickable"
              } ${getResultClass(color)}`}
              style={{ backgroundColor: color }}
              onClick={() => handleGuess(color)}
            />

            {locked && <p className="hex">{color}</p>}
          </div>
        ))}
      </div>

      {locked && (
        <h2 className={`result ${getResultText()}`}>
          {selected === target ? "✅ Correct!" : "❌ Incorrect!"}
        </h2>
      )}

      <button className="button" onClick={resetGame}>
        Play Again
      </button>
    </div>
  );
}