import Button from './Button';
import Border from './Border';

import './App.css';
import { useState } from 'react';

const random = (value) => {
return Math.ceil(Math.random() * value)
}
export default function App(){
  const [my, setMy] = useState([]);
  const [other, setOther] = useState([]);

  const playClick = () => {
    const nextMy = random(6);
    const nextOther = random(6);
    setMy([...my,nextMy]);
    setOther([...other,nextOther]);
  }

  const resetClick = () => {
    
  }
  return (
    <div id="box">
      <div id="btn">
        <Button onClick={playClick}>start</Button>
        <Button onClick={resetClick}>reset</Button>
      </div>
      <div id="contain">
        <Border name="팀 A" color="blue" myOption = {my} />
        <Border name="팀 B" color="red" myOption = {other} />
      </div>
    </div>
  )
}