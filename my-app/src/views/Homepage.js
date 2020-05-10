import React from 'react';
import './style.css';
import Typewriter from 'typewriter-effect';
import pamIcon from '../images/pam.jpg';

function HomePage() {
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
        <img className="ui medium circular image" src='../images/pam.jpg'/>
        I am
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Hello World!')
              .callFunction(() => {
                console.log('String typed out!');
              })
              .pauseFor(2500)
              .deleteAll()
              .callFunction(() => {
                console.log('All strings were deleted');
              })
              .start();
          }}
        />
      </header>
    </div>
  );
}

export default HomePage;
