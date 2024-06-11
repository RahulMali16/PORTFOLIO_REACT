import React from 'react'
import "./Navbar.css"

const Navbar = () => {
     
    const showSidebar = ()=>{
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
    }
    const ignoreSidebar= ()=>{
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'

    }
  return (
  
        
        <nav className="navbar">
              <ul className='sidebar'>
                <li onClick={ignoreSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Education</a></li>
            </ul>
            <ul>
                <li className='logo'>PORTFOLIO-RAHULMALI</li>
                <li className='hide'><a href="#">About</a></li>
                <li className='hide'><a href="#">Projects</a></li>
                <li className='hide'><a href="#">Skills</a></li>
                <li className='hide'><a href="#">Contact</a></li>
                <li className='hide'><a href="#">Education</a></li>
                <li onClick={showSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>


            </ul>

        </nav>
 
  )
}

export default Navbar