import React from 'react';
import github from '/images/github.png';

const Footer = () => {
	let today = new Date();
    let year = today.getFullYear();

    return (
        <div className='footer'>
            <p>
                <img src={github} alt="github" />
                <img src="./images/link.png" alt="linkedin" />
                <img src="./images/twit.png" alt="twitter" />
                <img src="./images/whatsapp.png" alt="whatsapp" />
                <img src="./images/face.png" alt="facebook" />
            </p>
            <p className='copyright'>Copyright &copy; <span className="year">{year}</span>&#160;  Quick One &#160;</p>
        </div>
    );
}

export default Footer;
