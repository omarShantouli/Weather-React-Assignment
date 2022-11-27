import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from  "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import storm from "../img/weather-icons/storm.svg";
import unknown from  "../img/weather-icons/unknown.svg";

export default function GetImageById(id) {
  if(id < 300)
  return storm;
  if(id >= 300 && id <= 499)
  return drizzle;
  if(id >= 500 && id <= 599)
  return rain;
  if(id >= 600 && id <= 699)
  return snow;
  if(id >= 700 && id <= 799)
  return fog;
  if(id === 800)
  return clear;
  if(id === 801)
  return partlycloudy;
  if(id > 801 && id <= 805)
  return mostlycloudy;

}
