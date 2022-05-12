import React from 'react';
import linkedin from '../images/Linkedin.png'



export default function LinkedinBtn() {
    return (
        <div className='linkedin-btn'>
            <a title='Connect on LinkedIN' target='_blank' className='linkedinbtn' href='https://www.linkedin.com/in/pramod-kale'>
                <img className='linkedinpng' src={linkedin} alt='Linkedin logo' />
                Linkedin</a>
        </div>
    )
}