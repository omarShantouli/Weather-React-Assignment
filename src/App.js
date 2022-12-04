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

  function changeId(){
    setId(404);
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
        {
          id === 404?
          <div className='d-flex justify-content-center align-items-center flex-column min-vh-100 bg-light'>
            <h1 className='display-2 w-50 d-flex text-center mb-5 bg-light'>City Name Not Found</h1>
            <button onClick={()=>{setId(202)}} className='border-0 text-primary display-6 bg-light'>HOME</button>
          </div>
           
           :
          <>
              <header className="app__header">
                <Search />
              </header>

              <main className="app__main">
                <CurrentWeather />
              </main>
          </>
        }
        
      </LangContext.Provider>
    </div>
  );
}


export default App;
