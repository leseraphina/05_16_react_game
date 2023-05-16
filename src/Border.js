import Dice from "./Dice";

export default function Border({name,color}){
  return (
    <div className="con">
      <h1>{name}</h1>
      <Dice color={color} />
      <h2>합</h2>
      <p></p>
      <h2>기록</h2>
      <p></p>
    </div>
  )
}