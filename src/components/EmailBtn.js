import React from 'react';
import Mail from '../images/Mail.png'

export default function EmailBtn() {
    return (
        <div className='Email-btn'>
            <a title='mail to Pramod' className='emailbtn' href='mailto:pramodkale.sit@gmail.com'>
                <img className='emailpng' src={Mail} target='_blank' alt='Email logo' />
                Email</a>
        </div>
    )
}