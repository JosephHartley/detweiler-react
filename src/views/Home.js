import React from "react";
import { Seo } from "../components/Seo";
import { FaInstagram, FaTwitter, FaYoutube, FaBandcamp, FaSpotify, FaItunesNote, FaEnvelope } from "react-icons/fa";
import paye from '../images/paye_artwork.jpg';

function Home() {
  return (
    <>
      <Seo
        title="Detweiler"
        description="It's the website for the band Detweiler. Music, tour dates and more. New song PAYE out now."
      />
      <div className="main">
        <div className="mainDiv">
          <h1 className="text-payeYellow relative">Detweiler</h1>
          <div className="ground relative">
            <div className="ground-shadow"></div>
          </div>
          <div className='announcement'>
            <h2 className="text-payeYellow">PAYE out now</h2>
          </div>
          <div className="line noise-red"/>
          <div className="w-96 h-96 mb-5 px-5">
            <a href="https://distrokid.com/hyperfollow/detweiler/paye-feat-love-trapezium">
              <img
                src={paye}
                className="w-full h-full object-contain rounded-xl"
                alt=""
              />
            </a>
            </div>
          <div className="flex space-x-4 text-3xl text-payeRed justify-center items-center p-5">
            <a className="socials" href="https://detweilertheband.bandcamp.com/"><FaBandcamp /></a>
            <a className="socials"  href="https://open.spotify.com/artist/7zuFUpajycvDi7tzewyMaL"><FaSpotify /></a>
            <a className="socials"  href="https://music.apple.com/gb/artist/detweiler/1450762252"><FaItunesNote /></a>
            <a className="socials"  href="https://www.instagram.com/detweilerband/"><FaInstagram /></a>
            <a className="socials"  href="https://twitter.com/detweilerband"><FaTwitter /></a>
            <a className="socials"  href="https://www.youtube.com/@detweiler5838"><FaYoutube /></a>
            <a className="socials"  href="mailto:band@detweiler.co.uk"><FaEnvelope /></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
