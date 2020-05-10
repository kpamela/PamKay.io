import React from 'react';
import './style.css';
import Typewriter from 'typewriter-effect';
import pamIcon from '../images/pam.jpg';


function HomePage() {
  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <p className= "HomePage-title">
          Hey! <br />I'm Pam
        </p>
        <div className= "HomePage-typewriter">
        <img src={pamIcon} />
        I do{'\u00A0'}
          <Typewriter
            options={{
              strings: ['<span style="color:#B0CCBD";> UX / UI design </span>',
              '<span style="color:#A7F893;"> web development </span>',
              '<span style=";color:#9A6FE4;"> photography </span>',
              '<span style="display:inline;color:#636BD9;"> videography </span>' ],
              autoStart: true,
              loop: true,
              deleteSpeed: 20,
              delay: 55,
              pauseFor: 50
            }}
          />
        </div>
        <div className="HomePage-regular-text">
        I'm building one hell of a story (this site is under construction) but you can visit the following links meanwhile.
        </div>
      </header>
    </div>
  );
}

export default HomePage;
