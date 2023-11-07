import React from "react";
import { Seo } from "../components/Seo";
import paye from '../images/paye_artwork.jpg';

function Home() {
  return (
    <>
      <Seo
        title="Detweiler | Northern ravey rockers"
        description="It's the website for the band Detweiler. Music, tour dates and more. New song PAYE out now"
      />
      <div className="main">
        <div className="mainDiv">
          <h1 className="gradient-text">detweiler</h1>
          <div className='announcement'>
            <h2 className="gradient-text">PAYE out now</h2>
          </div>
          <div className="line gradient-line"/>
          <div className="mb-5 px-5">
            <a href="https://songwhip.com/detweiler/paye" target="_blank" rel="noopener noreferrer">
              <img
                src={paye}
                className="w-96 object-contain rounded-lg"
                alt="paye artwork"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
