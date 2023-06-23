import { useEffect, useRef, useState } from "react";
import "./App.css";
import RetroGridNumber from "./Components/RetroGridNumber";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let temp = setInterval(() => {
      setCount((count) => (count + 1) % 100);
    }, 100);

    return () => clearInterval(temp);
  }, []);

  return (
    <div className="loading-body">
      <RetroGridNumber showNumber={count} />
    </div>
  );
}

export default App;
