import React from 'react'
import MenuItem from '../menu-item/menu-item'
import './menu.css'


const Menu = () => {
  return (<header className="menu-wrapper">
    <nav>
        <ul className='menu'>
            <MenuItem
            text='Home'
            link='/'
            />

            <MenuItem
            text='Personajes'
            link='/personajes'
            />

            <MenuItem
            text='Citas'
            link='/citas'
            />

            <MenuItem
            text='Episodios'
            link='/episodios'
            />
   
        </ul>
    </nav>
  </header>
  )
}

export default Menu