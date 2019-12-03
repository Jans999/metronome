import React from 'react';
import './App.css';
import Header from './components/Header.js'

function App() {
  return (

    <div className="container">
     
      <Header />


      <main>

        <div className="button">
            <button>Play</button>
        </div>

        <div className="slider">
            <label for="bpm"> 150 BPM</label>
            <input type="range" min="45" max="150" name="bpm"></input>
        </div>

      </main>
    </div>
  );
}

export default App;
