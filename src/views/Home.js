import React from "react";
import { FaInstagram, FaTwitter, FaYoutube, FaBandcamp, FaSpotify, FaItunesNote, FaEnvelope } from "react-icons/fa";
import paye from '../images/paye_artwork.jpg';
// function Home() {
// 	return (
//     <section className="flex flex-col container w-full lg:px-0 px-5 lg:w-3/4 mx-auto min-h-screen">
//       <div className="flex gap-10 justify-center items-center flex-col lg:flex-row mt-10">
//         <div className="w-96 h-96">
//           <img
//             src={paye}
//             className="w-full h-full object-cover rounded-xl lg:rounded-l-xl"
//             alt=""
//           />
//         <div className="inset-0 rounded-xl lg:rounded-l-xl"></div>
//         </div>
//         <div className="w-full lg:w-1/3 flex gap-3 mb-10 lg:mb-0 flex-col text-white">
//           ⭐⭐⭐
//           <p>Northern ravey rockers</p>
//           <p>David Holt</p>
//           <p>Marianne Holt</p>
//           ⭐⭐⭐
//         </div>
//       </div>
//       <div className="flex space-x-4 text-3xl text-white justify-center items-center p-5">
//         <a href="https://detweiler.bandcamp.com/"><FaBandcamp /></a>
//         <a href="https://open.spotify.com/artist/2B1Qb8o1l8W0YX6m0ZJG6j"><FaSpotify /></a>
//         <a href="https://music.apple.com/us/artist/detweiler/1550731618"><FaItunesNote /></a>
//         <a href="https://www.instagram.com/detweilerband/"><FaInstagram /></a>
//         <a href="https://twitter.com/detweilerband"><FaTwitter /></a>
//         <a href="https://www.youtube.com/channel/UCJQ5B1Y6qY0xw5x7J4qW0GQ"><FaYoutube /></a>
//         <a href="mailto:band@detweiler.co.uk"><FaEnvelope /></a>
//       </div>
//     </section>
// 	);
// };

function Home() {
  return (
    <div className="main">
      <div className="mainDiv">
        <h1 className="text-payeYellow relative">Detweiler</h1>
        <div className="ground relative">
          <div class="ground-shadow"></div>
        </div>
        <div className='announcement'>
          <h2 className="text-payeYellow">PAYE out now</h2>
        </div>
        <div className="line noise-red"/>
        <div className="w-96 h-96 mb-5">
          <img
            src={paye}
            className="w-full h-full object-cover rounded-xl"
            alt=""
          />
          </div>
        <div className="flex space-x-4 text-3xl text-white justify-center items-center p-5">
          <a href="https://detweiler.bandcamp.com/"><FaBandcamp /></a>
          <a href="https://open.spotify.com/artist/2B1Qb8o1l8W0YX6m0ZJG6j"><FaSpotify /></a>
          <a href="https://music.apple.com/us/artist/detweiler/1550731618"><FaItunesNote /></a>
          <a href="https://www.instagram.com/detweilerband/"><FaInstagram /></a>
          <a href="https://twitter.com/detweilerband"><FaTwitter /></a>
          <a href="https://www.youtube.com/channel/UCJQ5B1Y6qY0xw5x7J4qW0GQ"><FaYoutube /></a>
          <a href="mailto:band@detweiler.co.uk"><FaEnvelope /></a>
        </div>
      </div>
    </div>
  )
}

export default Home;
