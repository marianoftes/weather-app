import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';


const API_KEY='90a037856db6ebf956557525cac24d17';

class App extends Component {

  constructor(){
    super()
    this.state={
      city:'',
      name: '',
      temp: '',
      description:'',
      tempMin: '',
      tempMax: '',
      humidity: '',
      searchField: ''
    }
  }


  onInputChange=(event) => {
    this.setState({ searchField: event.target.value })
  } 

  onUserClick=(event) => {
    this.getCity();
  }


  getCity=()=>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.searchField}&appid=${API_KEY}&units=metric`)
      .then(response=> response.json()) 
      .then(city=> this.setState({ 
        city: city,
        name: city.name,
        temp: city.main.temp,
        tempMin: city.main.temp_min,
        tempMax: city.main.temp_max,
        description: city.weather[0].description,
        humidity: city.main.humidity
       }))
       .catch(()=>alert('Invalid or null city'))     
  }


  render() {
    return (
      <div className='container'>
        <div className='wrapper'>
          
          <Title/>
          
          <div className='weather-box'>
            <WeatherForm
            className='weather-form' 
            onInput={this.onInputChange} 
            userClick={this.onUserClick} 
            />
            
            <WeatherInfo 
            className='weather-info'
            name={this.state.name} 
            temp={this.state.temp}
            humidity={this.state.humidity} 
            description={this.state.description} 
            />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
