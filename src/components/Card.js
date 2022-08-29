import React from 'react'
import { useSelector } from 'react-redux'

function Card() {

    const forecastState = useSelector((state) => state.forecast.value)

  return (
    <div className='card'>
        <h3>weather in {forecastState.name}</h3>
        <h3>{forecastState.main.temp} Kelvin</h3>
        <br/>
        <p>{forecastState.weather[0].main}</p>
        <p>Humidity:{forecastState.main.humidity}%</p>
        <p>wind speed:{forecastState.wind.speed}kmph</p>
    </div>
  )
}

export default Card