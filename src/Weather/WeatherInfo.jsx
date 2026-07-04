import React from 'react'
import {useState} from 'react';

const apikey="import.meta.env.VITE_KEY";

 

let  WeatherInfo=()=> {
      let [city,setCity]=useState('');
      const [data,setData] = useState(null);
      const [msg,setMsg] = useState(null);
     
 let getWeatherData= async()=> {
    try{
       let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apikey}`;
const response=await fetch(url);
const data=await response.json();
    if(data.cod==='404'){
        setMsg('City Not found')
        setData(null)
        return;
    }
setMsg("")
setData(data);
console.log(data)
 }catch(error){
     console.log(error)
 }
 };
 


    let imgIcon=data && `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;


  return (
    <>
    <center>
        <h1>Weather Info.</h1>
    <h2 style={{color:'red'}}>{msg}</h2>
         <input type='text' required value={city} onChange={(e)=>setCity(e.target.value)} /><br/><br/>
         <input type='button' value='ShowInfo' onClick={ getWeatherData}/><br/>
        {data && (
         <table border='1' style={{textAlign:'center'}}>
          <tbody>
            <tr  style={{ backgroundColor: "orange" }}>
               <th>Country Code</th>
                <th>City Name</th>
                <th>Temperature</th>
                <th>Humidity</th>
                <th>Air Pressure</th>
                <th>Weather</th>
                <th>Wind Speed</th>
                <th>Lat & Long</th>
              </tr>

    <tr  style={{ backgroundColor: "cyan" }}>
                
         <td>{data.sys.country}</td>
         <td>{data.name}</td>
         <td>
            {data.main.temp}F|{" "}
          {Math.round(data.main.temp-273.15)}&deg;C
        </td>
         <td>{data.main.humidity}%</td>
         <td>{data.main.pressure} hPa</td>
         <td>{data.weather[0].description}
        <img src={imgIcon} height='25' width='30' /></td>
         <td>{data.wind.speed}m/s</td>
         <td>{data.coord.lat}& {data.coord.lon}</td>
    </tr>
    </tbody>
     </table>
        )}
    </center>
    </>
  )
}

export default WeatherInfo