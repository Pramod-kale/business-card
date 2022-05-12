import React from 'react';
import Profile from '../images/Profile.jpg'

export default function Header() {
    return (
        <header>
            <img className='header-img' src={Profile} alt='header account' />
            <h1 className='profile-name' >Pramod Kale</h1>
            <h2 className='profile-desgn' >Frontend Developer</h2>
            <h3 className='profile-site' >Pramodkale.website</h3>

        </header>
    )
}