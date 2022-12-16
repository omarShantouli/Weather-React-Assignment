import React, {useContext} from 'react';
import { LangContext } from '../../Utils/context';
import GetImageById from '../../Utils/GetImageById';
import "../SubComp/CurrentWeatherStyle/CurrentWeatherStyle.scss"
import Weather24Hour from '../Weather24Hours/Weather24Hour';

export default function CurrentWeather() {
  var contextData = useContext(LangContext);
  var temp_min = "", temp_max = "", humidity = "", pressure = "";
if(contextData.weatherData !== 'empty')
{
  console.log(contextData?.weatherData[0]?.weather[0]?.id);

  temp_min = Math.round(contextData?.weatherData[0]?.main?.temp_min);
  temp_max = Math.round(contextData?.weatherData[0]?.main?.temp_max);
  humidity = contextData?.weatherData[0]?.main?.humidity;
  pressure = contextData?.weatherData[0]?.main?.pressure;
}
  return (
    <div>

      <div>
        {
          (contextData.weatherData !== 'empty')
          ?
          <div className='currentWeather'>
            <img src={GetImageById(contextData?.weatherData[0].weather[0].id)} alt="omar hantouli weather web page" />
            <div className='description'>
              {contextData?.weatherData[0].weather[0].description}
            </div>

            <div className='temp'>
              Temperature &nbsp;&nbsp;<span id="tempNumber">{temp_min}°  &nbsp;to &nbsp;{temp_max}°C</span>
            </div>

            <div className='info'>
              Humidity &nbsp; {humidity}% &nbsp;
              Pressure &nbsp; {pressure}
            </div>
            <div>
                <Weather24Hour />
            </div>
          </div>
          
          :
          null
        }

        

     </div>
      
    </div>
  )
}
