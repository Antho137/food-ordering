import React from 'react';
import { FaGithub, FaFacebook, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
	let today = new Date();
    let year = today.getFullYear();

    return (
        <div className='footer'>
            <p>
	        <FaGithub className='fas' size={20} />
	        <FaLinkedinIn className='fas' size={20} />
	        <FaTwitter className='fas' size={20} />
		<FaWhatsapp className='fas' size={20} />
		<FaFacebook className='fas' size={20} />
	    </p>
            <p className='copyright'>Copyright &copy; <span className="year">{year}</span>&#160; Quick One &#160;</p>
        </div>
    );
}

export default Footer;
