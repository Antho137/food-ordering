import React from 'react';
import { FaGithub, FaFacebook, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
	let today = new Date();
    let year = today.getFullYear();

    return (
        <div className='footer'>
            <p>
	        <a href="https://github.com/Antho137">
		   <FaGithub className='fas' size={20} />
	        </a>
	        <a href="https://www.linkedin.com/in/antonio-sala-antho-b85636256">
		   <FaLinkedinIn className='fas' size={20} />
	        </a>
		<a href="https://twitter.com/antoniosala73">
		   <FaTwitter className='fas' size={20} />
		</a>
		<a href="https://wa.me/244923506453">
		   <FaWhatsapp className='fas' size={20} />
		</a>
		<a href="https://www.facebook.com/antonio.sala.5623">
		   <FaFacebook className='fas' size={20} />
		</a>
            </p>
            <p className='copyright'>Copyright &copy; <span className="year">{year}</span>&#160; Quick One &#160;</p>
        </div>
    );
}

export default Footer;
