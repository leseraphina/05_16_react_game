import Button from './Button';
import Border from './Border';

import './App.css';
export default function App(){
  return (
    <div id="box">
      <div id="btn">
        <Button>start</Button>
        <Button>reset</Button>
      </div>
      <div id="contain">
        <Border name="팀 A" color="blue" />
        <Border name="팀 B" color="red" />
      </div>
    </div>
  )
}