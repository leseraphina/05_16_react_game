import Dice from "./Dice";

export default function Border({name,color,myOption}){
  // console.log(myOption);
  // console.log(myOption.length)
  const num = myOption[myOption.length - 1];
  const sum = myOption.reduce((hap,a) => hap + a,0)
  // console.log(sum);
  return (
    <div className="con">
      <h1>{name}</h1>
      <Dice color={color} num={num} />
      <h2>합</h2>
      <p>{sum}</p>
      <h2>기록</h2>
      <p>{myOption.join(' / ')}</p>
    </div>
  )
}
// 56