import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

const SearchBox = ({updateInfo}) => {
    let [city, setCity] = useState ("");
    const API_KEY = "63a460a3171b36fe7944756affd7f485";
    const API_URl = "https://api.openweathermap.org/data/2.5/weather"

    let getWeatherInfo = async () => {
        let response = await fetch(
            `${API_URl}?q=${city}&appid=${API_KEY}&units=metric`
        );

        let jsonResponse = await response.json();
        // console.log(jsonResponse);

        let result = {
            city:city,
            name:jsonResponse.name,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelslike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
    }
    let changeHandle = (evt) =>{
       setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
    }

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        
        <TextField id="outlined-basic" 
        label="City" 
        variant="outlined"
         required
         value={city}
         onChange={changeHandle}/>
        <br /> <br />
        <Button variant="contained" type='submit' 
       >
        Search
      </Button>
      </form>
    </div>
  )
}

export default SearchBox;
