import React from 'react';
import {BsFacebook, BsInstagram, BsTwitter, BsYoutube  } from 'react-icons/bs';
import './SocialMedia.css';


export default function SocialMedia() {
  return (
    <div className='socials'>
        <h5>GET SOCIAL</h5>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{color:'inherit'}}>
        <BsFacebook className='me-3 h4' /></a>

        <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{color:'inherit'}}>
        <BsInstagram className='me-3 h4'/></a> 
        <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{color:'inherit'}}>
        <BsTwitter className='me-3 h4'/></a> 
        <a href="https://youtube.com" target="_blank" rel="noreferrer" style={{color:'inherit'}}>
        <BsYoutube className='me-3 h4'/></a>

    </div>
  );
}
