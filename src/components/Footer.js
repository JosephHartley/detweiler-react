import React from "react";
import { FaInstagram, FaTwitter, FaYoutube, FaBandcamp, FaSpotify, FaItunesNote, FaEnvelope } from "react-icons/fa";


const Footer = () => {
	return (
		<div className="mt-28 flex space-x-6 text-2xl text-payeRed justify-center items-center p-5">
      <a className="socials" href="https://detweilertheband.bandcamp.com/" target="_blank" rel="noopener noreferrer"><FaBandcamp /></a>
      <a className="socials"  href="https://open.spotify.com/artist/7zuFUpajycvDi7tzewyMaL" target="_blank" rel="noopener noreferrer"><FaSpotify /></a>
      <a className="socials"  href="https://music.apple.com/gb/artist/detweiler/1450762252" target="_blank" rel="noopener noreferrer"><FaItunesNote /></a>
      <a className="socials"  href="https://www.instagram.com/detweilerband/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      <a className="socials"  href="https://twitter.com/detweilerband" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      <a className="socials"  href="https://www.youtube.com/@detweiler5838" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
      <a className="socials"  href="mailto:band@detweiler.co.uk" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
    </div>
	);
};

export default Footer;
