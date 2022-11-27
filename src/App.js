import React, {useState} from 'react';
import Search from './Components/Search/Search';
import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
import CurrentWeather from './Components/CurrentWeather/CurrentWeather';
import { LangContext } from './Utils/context';


function App() {
  const [weatherData, setWeatherData] = useState("empty")

  function updateWeatherData(data){
    setWeatherData(data);
  }


  return (
    <div style={{backgroundColor: "lavender"}}>
      <LangContext.Provider
        value={{
          updateWeatherData,
          weatherData
        }}
      >

      <header className="app__header">
        <Search />
      </header>

      <main className="app__main">
        <CurrentWeather />
      </main>
      </LangContext.Provider>
    </div>
  );
}


export default App;
