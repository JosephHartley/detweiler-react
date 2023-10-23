import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";

function Gigs() {
  const [gigs, setGigs] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "gig" && date >= $currentDate] | order(date asc){
          _id,
      date,
      location,
      venue,
      ticketLink,
      venueLink,
    }`,
    { currentDate: new Date() }
      )
      .then((data) => setGigs(data))
      .catch(console.error);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleString("en-UK", {
      dateStyle: "medium",
    });
  }

  return (
    <section className="container w-full lg:px-0 px-5 lg:w-3/4 mx-auto min-h-screen">
      <h1 className="text-3xl font-bold text-center p-5">
        Gigs
      </h1>
      <div className="bg-detweilerPink p-5 border-8 border-white rounded">
      {gigs && gigs.map((gig) => (
        <div
          className=""
          key={gig._id}
        >
          <div className="flex p-5 border-t-4 border-blueGray items-center">
            <div className="basis-9/12 flex flex-wrap">
              <div className="basis-1/4">
                <h3 className="">
                  {formatDate(new Date(gig.date))}
                </h3>
              </div>
              <div className="basis-1/2">
                <h3 className="text-detweilerGreen">{gig.venue}</h3>
              </div>
              <div className="basis-1/4">
                <h3>{gig.location}</h3>
              </div>
            </div>
            <div className="basis-3/12 flex flex-wrap justify-end">
              <div>
                <button className="text-detweilerGreen border border-detweilerGreen font-bold py-2 px-4 rounded w-24">
                  <a href={gig.venueLink} target="_blank" rel="noopener noreferrer">
                    Venue
                  </a>
                </button>
              </div>
              <div>
                <button className="bg-detweilerGreen border border-detweilerGreen text-white font-bold py-2 px-4 rounded w-24">
                  <a href={gig.ticketLink} target="_blank" rel="noopener noreferrer">
                    Tickets
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
}

export default Gigs;
