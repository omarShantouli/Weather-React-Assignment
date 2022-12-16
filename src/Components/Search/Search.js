import React, { useState, useContext } from 'react'
import {Fetch} from "../../Utils/AppUtils"
import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
import "../SubComp/SearchStyle/SearchStyle.scss"
import {LangContext} from "../../Utils/context"


const API = "c3a4918fed054f7b8f2e7082432da73d"; 

export default function Search() {

    const [cityName, setCityName] = useState("");
    var contextData = useContext(LangContext);

    function changeCityName(e){
        setCityName(e.target.value)
    }


    async function getWeatherData(e){
        e.preventDefault();
        const resp = await Fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=8&units=metric&appid=${API}`,'GET');
        if(resp.status === 200){
            let temp = resp.data.list.map((time)=>{
                return time;
            })
            contextData.updateWeatherData(temp);
            temp.shift()
           contextData.changeId(200);
        }else{
            console.warn("sorry this api failed");
            contextData.changeId(404);
        }

    }
  
  return (
        <div
        >

        <div className='search'>
            <form onSubmit={getWeatherData} className="formStyle d-flex justify-content-start">
                
                    <input
                        type="text" 
                        placeholder="Type in a city name" 
                        value={cityName}
                        onChange={changeCityName}
                    />
                    <button>FIND WEATHER</button>  

                
            </form>
         
        </div>
        </div>
    
  )
}
