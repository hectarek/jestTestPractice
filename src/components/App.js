import '../style/App.css';
import { useState } from 'react'

function App() {
 
  const [count, setCount] = useState(0)
  const [style, setStyle] = useState({
    color: "red",
    visibility: "hidden"
  })

  const handleDecrement = () => {
    if (count == 0) {
      setStyle({ color: "red", visibility: "visible" });
    } else {
      setCount(count - 1);
      setStyle({ color: "red", visibility: "hidden" });
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
    setStyle({ color: "red", visibility: "hidden" });
  };

  const handleReset = () => {
    setCount(0);
  }

  return (
    <div data-test="component-app" className="App">
      <h1 data-test="counter-display">The count is <span data-test="count">{count}</span></h1>
      <p data-test="counter-error" style={style}>Sorry, test can't go below zero</p>
      <button data-test="decrement-button" onClick={() => handleDecrement()}>Decrement Counter</button>
      <button data-test="increment-button" onClick={() => handleIncrement()}>Increment Counter</button>
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
}

export default App;
