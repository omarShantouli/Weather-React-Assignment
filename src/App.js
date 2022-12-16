import React, {useState} from 'react';
import Search from './Components/Search/Search';
import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
import CurrentWeather from './Components/CurrentWeather/CurrentWeather';
import { LangContext } from './Utils/context';


function App() {
  const [weatherData, setWeatherData] = useState("empty")
  const [id, setId] = useState(202);

  function updateWeatherData(data){
    setWeatherData(data);
  }

  function changeId(_id){
    setId(_id);
  }

  return (
    <div style={{backgroundColor: "lavender"}}>
      <LangContext.Provider
        value={{
          updateWeatherData,
          weatherData, 
          changeId
        }}
      >
        <header className="app__header">
                <Search />
        </header>
    
        {
          id === 404?
          <div className='h1 d-flex align-items-center justify-content-center min-vh-100 text-danger'>
            City Name Not Found
          </div>
              :
              <main className="app__main">
              <CurrentWeather />
            </main>
        }
        
         
        
      </LangContext.Provider>
    </div>
  );
}


export default App;
