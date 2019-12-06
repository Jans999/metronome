import React from 'react';
import './App.css';
import Header from './components/Header.js'
import Button from './components/Button.js'
import Slider from './components/Slider.js'


class App extends React.Component {


// Slider value
  state = {
    value: 100,
    clicksPerSecond: 600,
  }

// Handles controlled component value for slider and updates the state
  handleValueChange = (e) => {
      this.setState({value: e.target.value})
  }
  
// Calculates and updates the ms time interval for clicks (I think it calc wrong atm)
  changeClicksPerSecond = () => {
    this.setState({
        clicksPerSecond: 60000/this.state.value,
    })
  }

// Handler  bundled to two functions
  handleChange = (e) => {
    this.handleValueChange(e);
    this.changeClicksPerSecond();
    console.log(this.state.clicksPerSecond)
  }

  render() {
    return(
      <div className="container">
      
        <Header />

        <main>
          <Button value={this.state.value} clicksPerSecond={this.state.clicksPerSecond} />
          <Slider value={this.state.value} handleChange={this.handleChange}  />
        </main>

      </div>
    )
  }

}

export default App;
