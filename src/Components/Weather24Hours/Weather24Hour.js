import React, {useContext} from 'react';
import GetImageById from '../../Utils/GetImageById';
import { LangContext } from '../../Utils/context';
import "../SubComp/Weather24HourStyle/Weather24HourStyle.scss";

export default function Weather24Hour() {
    const contextData = useContext(LangContext);
    var time = 0;
    

  return (
    <div className='container'>

            {
                (contextData.weatherData !== 'empty')
                ?
                    <div className='row justify-content-center'>
                        {
                            contextData.weatherData.map((item, idx)=>{
                                {time = time + 3}
                                return <div key={idx} className="the-box d-flex align-items-center flex-column">
                                            {
                                                time <= 9 ?
                                                <div className='tempNumber'>0{time}:00</div>
                                                :
                                                <div className='tempNumber'>{time}:00</div>
                                            }
                                            
                                            <img src={GetImageById(item.weather[0].id)} alt="weather" width="75px" height="75px" className='image'/>
                                        <div className='tempNumber'> {Math.round(item.main.temp)}°C </div>
                                    </div>
                            })
                        }
                </div>
                :
                null
            }
            
        
    </div>
  )
}

