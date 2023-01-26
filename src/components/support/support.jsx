import React from 'react';

import './support.scss';

const Support = () => {
    return (
        <>
        <div className="wrapper-black">
            <div className="wrapper">
                <h2>Support</h2>
                <p className='heading-p'>get in touch</p>
                <div className="contact-form">
                    <div className="contact-form contact-form__top">
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Email'/>
                        <input type="text" placeholder='Phone'/>
                    </div>
                    <div className="contact-form contact-form__bottom">
                        <input type="text" placeholder='Message'/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Support;