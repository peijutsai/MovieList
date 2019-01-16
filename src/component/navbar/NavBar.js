import React from 'react'

import NavItems from './navitems/NavItems'

import './NavBar.scss'

const NavBar = (props) => {
    return (
        <nav className='NavBar'>
            <NavItems clicked={props.clicked}/>
        </nav>
    )
}

export default NavBar