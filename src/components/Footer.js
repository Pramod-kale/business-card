import React from 'react';
import git from '../images/Git.png'
import File from '../images/File.png'
import Call from '../images/Call.png'
import resume from '../components/Resume.pdf'




export default function Footer() {
    return (
        <footer className='footer'>
            <a title='code and share' target='_blank' href='https://github.com/Pramod-kale'><img className='github' src={git} alt='image of github' /></a>
            <a title='Resume.pdf' target='_blank' href={resume} ><img className='github' src={File} alt='image of File' /></a>
            <a title='Call to' href="tel:+919844471906"><img className='github' src={Call} alt='image of Caller' /></a>
        </footer>
    )
}
