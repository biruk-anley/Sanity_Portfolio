import React from 'react';
import { BsTwitter, BsInstagram,BsLinkedin,BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';


const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/biruk-anley/" target='_blank'>
      <BsLinkedin />
      </a>
    </div>
    
    <div>
      <a href="https://github.com/biruk-anley" target='_blank'>
      <BsGithub />
      </a>
    </div>
    <div>
     
      <a href="https://www.facebook.com/profile.php?id=100088309890637" target='_blank'>
      <FaFacebookF />
      </a>
    </div>
    
    <div>
      <a href="https://twitter.com/AnleyBiruk" target='_blank'>
      <BsTwitter />
      </a>
      
    </div>
    
   
  </div>
  
);

export default SocialMedia;
