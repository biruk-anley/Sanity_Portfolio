import React from 'react';
import { BsTwitter, BsInstagram,BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsLinkedin />
    </div>
    
    <div>
      <BsInstagram />
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <BsTwitter />
    </div>
  </div>
);

export default SocialMedia;
