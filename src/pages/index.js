import React from 'react'
import Link from 'gatsby-link'
import style from './styling.css';
import Particles from 'react-particles-js';
import Typist from 'react-typist';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import { SocialIcon } from 'react-social-icons';
const delay = require('delay');
import Typing from 'react-typing-animation';

console.log(style);

const IndexPage = () => (
  <div>
    <div id="outer">
      <div id="ele1"><img id="image-intro" src="https://avatars0.githubusercontent.com/u/20878070"></img></div>
        <div>
          <Typing>
            <h3>I am a <i>Web Developer</i> and a <i>Open Source Enthusiast</i>.</h3><br />
            <Typist.Delay ms={300} />
            <p class="textdeco">I &#x2764; Ruby so most of my projects are in Ruby on Rails. I also work on MEAN Stack.</p>

            <p class="textdeco">I am a Google Summer of Code Intern at <b>Public Lab</b></p>
            </Typing>
            <Typist>
            <Bounce right>
              <Typist.Delay ms={5000} />
            <h4>For knowing more about me visit - <a href="http://gauravsachdeva.me">http://gauravsachdeva.me</a></h4>
          </Bounce>
          
          <Zoom>
            <span><SocialIcon url="https://linkedin.com/in/gauravano" />&nbsp;&nbsp;
            <SocialIcon url="https://github.com/gauravano/" color="black" />&nbsp;&nbsp;
            <SocialIcon url="https://twitter.com/gauravano/" />&nbsp;&nbsp;
            <SocialIcon url="https://www.facebook.com/gaurav27051997" />&nbsp;&nbsp;
            <SocialIcon url="mailto:sachdeva.gaurav1997@gmail.com" network="google" />&nbsp;&nbsp;
            </span>
          </Zoom>
</Typist>
        </div>
      </div>


  </div>

)

export default IndexPage
