import { useState } from 'react';
import Game from './Game';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
    <Game></Game>
    </div>
  )
}

export default App
