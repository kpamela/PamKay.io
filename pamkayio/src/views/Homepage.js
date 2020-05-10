import React from 'react';
import './style.css';
import Typewriter from 'typewriter-effect';
import pamIcon from '../images/pam.jpg';
import Button from "../components/Button/Button.js";
import Grid from '@material-ui/core/Grid';
import ScaleText from "react-scale-text";



function HomePage() {
  return (
    <div className="HomePage">
      <Grid container spacing={3}>
        <Grid xs>
          <div className = "image-container">
            <img className = "image" src={pamIcon}/>
          </div>
        </Grid>
        <Grid xs>
            <p className= "HomePage-title">
              Hey! <br />I'm Pam
            </p>
            <div className= "HomePage-typewriter">
             I do{'\u00A0'}
              <Typewriter
                options={{
                  strings: ['<span style="color:#6AA65B";> UX/UI design </span>',
                  '<span style="color:#37BC16;"> web dev </span>',
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
              I'm building one hell of a story (this site is under construction) but you can visit the following links meanwhile. <br/>
            </div>
            <div className="HomePage-buttons-container">
              <a href="https://www.linkedin.com/in/pamela-khouri"> <Button size="md" skeleton>  Linkedin </Button></a>
              <a href="https://www.pamkay.ca">  <Button size="md" skeleton>  Portfolio </Button></a>
              <a href="https://www.github.com/kpamela">  <Button size="md" skeleton>  Github </Button></a>
              <a href="https://www.instagram.com/pamkay.ca">  <Button size="md" skeleton>  Instagram </Button></a>
            </div>
        </Grid>
      </Grid>

    </div>
  );
}

export default HomePage;
