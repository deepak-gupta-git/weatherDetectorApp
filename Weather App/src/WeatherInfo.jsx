import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./WeatherInfo.css"

const WeatherInfo = ({ info }) => {
    const INIT_URL = 
        "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ;

  return (
    <div className="infoBox">
      <div className='cards'>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {INIT_URL}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
         <div>
            <p>Humidity :{info.humidity}</p>
            <p>Feels Like: {info.feelslike}</p>
            <p>Temperature: {info.temp}</p>
            <p>Min-Temperature: {info.tempMin}</p>
            <p>Max-Temperature: {info.tempMax}</p>
            <p>weather is Saying {info.weather} and feels 
            like {info.feelslike}&deg;C</p>
            
         </div>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

    </div>
  )
}

export default WeatherInfo;
