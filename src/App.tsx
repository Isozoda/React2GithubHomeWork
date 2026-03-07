import React, { useState } from 'react'
import { counterContext } from './main';
import Box1 from './components/Box1';

const App = () => {
  let [count, setCount] = useState(0)
  return (
    <counterContext.Provider value={count}>
      <div>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
        <h1>Salom
          <Box1 />
        </h1>
      </div>
    </counterContext.Provider>
  )
}

export default App
