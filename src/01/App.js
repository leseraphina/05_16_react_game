import { useState } from 'react';
import './App.css';
import Button from './Button';
import Dice from './Dice';

const randomData = (value) =>{
  return Math.ceil(Math.random() * value);
}

function App() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [history,setHistory] = useState([0]);

  const playClick = () =>{
    const nextNum = randomData(6);
    // console.log(nextNum)
    setNum(nextNum);
    setSum(sum + nextNum);
    // console.log(history)
    // console.log(history.push(nextNum));
    setHistory([...history,nextNum])
 }
//  57 - 07
  const resetClick= () => {
    setNum(1);
    setSum(0);
    setHistory([0])
  }
  return (
    <div id="box">
      <div>
        {/* <Button name="start" />
        <Button name="reset" /> */}
        <Button onClick={playClick}>start</Button>
        <Button onClick={resetClick}>reset</Button>
      </div>
      <div id="contain">
        <h1>게임</h1>
        <Dice num = {num}/>
        <h2>합</h2>
        <p>{sum}</p>
        <h2>기록</h2>
        <p>{history.join(' , ')}</p>
      </div>
    </div>
  );
}

export default App;

//  1. num ,history index -> 클릭을  5번만 하게....
// 2. sum 30 넘지 않게 수정
