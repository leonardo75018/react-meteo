import React from 'react'
import "./styles.css"

export default function Report({location,current, isLoading}, ) {

  console.log()

  return (
    <div className='report-container'>
      {
        isLoading ?  <p> Chargement </p> :
          <div>
            <div>
              <img src={current? current.condition.icon : ""} alt="" className='icon' />
              <p><strong> Localisation : {location? location.name : ""}</strong></p>
              <p> <strong>Temperature : {current? current.temp_c  + "°  " + "C": ""}</strong></p>
              <p> <strong>Humidité : {current? current.humidity + "%" : ""}</strong></p>
              <p> <strong>Vitesse du vent  : {current? current.wind_kph + " " + "km/h" : ""}</strong></p>
              

             
              <img src="image.png" alt="" />
              
            </div>
            <div className="condition">
              <div className='condition-card'>
              <p><strong>{current? current.temp_c  + " " + "C": ""}</strong></p> 
              <p><strong>{current? current.condition.text : ""}</strong></p>
              </div>
            </div>
        </div>
      }
    </div>
  )
}


