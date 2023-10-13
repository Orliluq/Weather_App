import React, {useState} from 'react';
import './App.css';
import Cards from '../components/Cards/Cards.jsx';
import Nav from '../components/SearchBar/Nav.jsx';
import {Route} from 'react-router-dom';
import About from '../components/About/About.jsx';
import Ciudad from '../components/Ciudad/Ciudad.jsx';
import axios from  'axios'

// Declare the inputValue variable here
let inputValue = '';

function App() {

  //Estado
  const [ciudades, setCiudades] = useState([])
  const [cityNames, setCityNames] = useState([])
  const apiKey = "5f506df9edfb68c99a8563454542ede1"

  const onSearch2 = ciudad => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    .then(r => r.json())
    .then((recurso) => {
      if(recurso.main !== undefined){
        const city = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon
        };
        if(!cityNames.includes(city.name)){
          setCiudades(ciudades => [...ciudades, city])
          setCityNames(cityNames => [...cityNames, city.name])
          alert(`The weather of ${city.name} it's the one you see on the screen`);
        }
      } else if (inputValue !== '') {
        alert("The city was not found");
      }
    }
  );
}

  function onClose(id,name){
    setCiudades(ciudades => ciudades.filter(ciudad => ciudad.id !== id))
    setCityNames(cityNames => cityNames.filter(ciudad => ciudad !== name))
    console.log(ciudades)
  }

  function onFilter(id){
    let ciudad = ciudades.filter(ciudad => ciudad.id === Number(id));
    return (ciudad.length > 0 ? ciudad[0] : null)
  }

  return (
    <div className="App"> 
    <Route path='/' render={({match}) => <Nav onSearch2={onSearch2} match={match} />}/>

    <Route exact path='/'>
      <Cards cities={ciudades} onClose={onClose}/>
    </Route>
    
    <Route path='/about'>
      <About />
    </Route>

    <Route exact path='/ciudad/:ciudadId' render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}/>
    
    </div>
  );
}

export default App;
