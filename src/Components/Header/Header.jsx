import React from 'react'
import "./Header.css"
// import'./assets/profile.jpeg'
import { assets } from '../../assets/assets';

const Header = () => {
   
    
  return (
    <div class="about-container">
    <div class="image-container">
        <img src={assets.image} alt="" />
      
</div>
    <div class="description">
        <h1>Hey There!</h1>
        <p>
            I'm <span className='Name'>RAHUL MALI</span>, a <span class="word-change">Web Developer, Programmer,</span> and an ECE student at NIT Bhopal. 
            With a background in Electronics and Communication engineering, I have developed skills in both hardware and software, 
            <br />
            <br />
            I am always eager to learn more and take on new challenges. 
            In my free time, I enjoy coding, experimenting with new technologies, and engaging in creative projects.
        </p>
    </div>
</div>

  )
}

export default Header