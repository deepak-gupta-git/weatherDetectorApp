import { useState } from "react"
import SearchBox from "./SearchBox"
import WeatherInfo from "./WeatherInfo"


const WeatherApp = () => {

    const [weatherInfo, setWeatherInfo] = useState({
        feels_like:23.34,
        humidity:34,
        city:"Kushinagar",
        temp:24,
        tempMax:24,
        tempMin:24,
        weather:"Few clouds",
        description: "overcast clouds",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };
  return (
    <div style={{textAlign:"center"}}>
      <h1>WeatherApp</h1>
      <SearchBox updateInfo={updateInfo}/>
      <WeatherInfo info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp;
