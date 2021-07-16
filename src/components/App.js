import '../style/App.css';
import { useState } from 'react'

function App() {
 
  let [count, addCount] = useState(0)

  const handleClick = () => {
    addCount(count + 1);
  };

  const handleReset = () => {
    addCount(0);
  }

  return (
    <div data-test="component-app" className="App">
      <h1>The count is {count}</h1>
      <button onClick={() => handleClick()}>Increment Counter</button>
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
}

export default App;
