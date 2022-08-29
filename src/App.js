import React, { useState } from "react";
import Card from './components/Card';
import {useDispatch} from 'react-redux'
import {getData} from "./features/forecast";

// const obj = {
//   name:'telangana',
//   type:'sunnny',
//   humidity:4.5,
//   wind:2.45,
// }

// const address = async (passed) =>{
//   const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${passed}&appid=8cbf35c68554f19c37a23f99e38e2570`)
//   const res = await data.json()
//   return res
// }

// const justPrint = async (passed) =>{
//   const a = await address(passed);
//   console.log()
//   console.log("\n"+a.wind.speed+"\n"+a.main.temp)
// }

function App() {

  const [text,changeText] = useState('')

  const dispatch = useDispatch()

  return (
    <div className="App">
      <input type="text" value={text} onChange={(e)=>changeText(e.target.value)}></input>
      <button onClick={()=>{dispatch(getData(text))}}>forecast</button>
      <Card />
    </div>
  );
}

export default App;
