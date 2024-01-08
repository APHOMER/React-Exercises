// import { useState } from 'react';
import './App.css';
// import Die from './Die';
// import Dice from './Dice.jsx'
import LuckyN from './LuckyN.jsx';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello</h1>
      <LuckyN numDice={3} goal={12}/>
      <LuckyN numDice={3} goal={12}/>
      <LuckyN numDice={3} goal={12}/>


      {/* <Dice dice={[2, 4, 8]} color='brown'/>
      <Dice dice={[5, 6, 3, 8, 7]} color="blue"/>
      <Dice dice={[5, 6, 3]} color=""/> */}

      {/* <Die val={[3, 5, 9]}/> */}
      {/* <LuckyN /> */}
    </>
  )
}

export default App;
