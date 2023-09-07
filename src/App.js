import List from './items';
import React, { Component } from 'react';
import './Beach.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomValue: null
    };

    this.array = List;
  }
  componentDidMount(){
    this.setRandomValue();
    this.createWave();
    this.interval = setInterval(this.createWave, 2000);
    
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  createWave = () => {
    const ocean = document.querySelector('.ocean');
    const wave = document.createElement('div');
    wave.style.position = 'absolute';
    wave.style.bottom = `${Math.random() * 30}px`;
    wave.style.left = `${Math.random() * 100}vw`;
    wave.style.width = `${50 + Math.random() * 50}px`;
    wave.style.height = '5px';
    wave.style.background = 'rgba(255, 255, 255, 0.7)';
    wave.style.borderRadius = '50%';
    ocean.appendChild(wave);

    setTimeout(() => {
      wave.remove();
    }, 2000);
  }

  // Generate a random index between 0 and array length - 1
  getRandomIndex = () => {
    return Math.floor(Math.random() * this.array.length);
  }

  setRandomValue = () => {
    const randomIndex = this.getRandomIndex();
    console.log(this.array[randomIndex])
    this.setState({ randomValue: this.array[randomIndex] });
  }

  render() {
    return (
        <div className="scene">
          <div className="sun"></div>
          <div className="ocean"></div>
          <div className="sand"></div>
          <div className="item-container">
            <h3>{this.state.randomValue}</h3>
            <button className='button-center btn btn-primary btn-lg' onClick={this.setRandomValue}>Get New Icebreaker</button>
          </div>
        </div>
    );
  }
}


export default App;
