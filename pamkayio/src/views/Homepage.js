import React from 'react';
import './style.css';
import Typewriter from 'typewriter-effect';
import pamIcon from '../images/pam.jpg';
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";

function HomePage() {
  return (
    <div className="HomePage">
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <div className = "image-container">
            <img className = "image" src={pamIcon}/>
          </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <div className="HomePage-header">
            <p className= "HomePage-title">
              Hey! <br />I'm Pam
            </p>
            <div className= "HomePage-typewriter">
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
          </div>

        </GridItem>
      </GridContainer>

    </div>
  );
}

export default HomePage;
