import React, {useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import Typewriter from 'typewriter-effect';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Typewriter
          options={{
            strings: ['Hello', 'World'],
            autoStart: true,
            loop: true,
          }}
        />
      </header>
    </div>
  );
}

export default App;
