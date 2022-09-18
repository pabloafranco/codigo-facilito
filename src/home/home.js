import React from 'react'
import './home.css'
import TheOffice from "../assets/the_office.jpg"

const Home = () => {
  return (
    <>
    <h1>The Office</h1>
    <img className='poster' src={TheOffice} alt="La Oficina" />
    <h2>The Office es una serie de television norteamericana</h2>
    <h3>
      Antes del segundo episodio, los escritores pasaron
      Un problema habitual con la escritura
    </h3>
    </>
  )
}

export default Home