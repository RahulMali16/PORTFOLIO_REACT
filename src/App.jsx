import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Project from './pages/Projects/Project'
const App = () => {
  return (
    < >
    <div className='app'>


      <Navbar></Navbar>
      <Header></Header>
      <Project></Project>
    </div>
    </>
   
  )
}

export default App