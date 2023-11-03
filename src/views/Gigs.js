import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import { Seo } from "../components/Seo.js";

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
      month: 'short', day: 'numeric'
    });
  }

  return (
    <>
      <Seo
        title="Gigs | Detweiler"
        description="Upcoming live dates for Detweiler"
      />
      <section className="container w-full lg:px-0 px-5 lg:w-3/4 mx-auto min-h-screen">
        <h1 className="text-3xl font-bold text-center p-5">
          Gigs
        </h1>
        <div className="p-5 border-8 border-payeRed rounded-xl">
        {gigs && gigs.map((gig) => (
          <div
            className=""
            key={gig._id}
          >
            <div className="flex p-5 border-t-2 border-payeRed items-center">
              <div className="basis-9/12 flex flex-col md:flex-row">
                <div className="basis-1/4">
                  <h3 className="text-payeBlue">
                    {formatDate(new Date(gig.date))}
                  </h3>
                </div>
                <div className="basis-1/2">
                  <h3 className="text-payeYellow">{gig.venue}</h3>
                </div>
                <div className="basis-1/4">
                  <h3 className="text-payeBlue">
                    {gig.location}
                  </h3>
                </div>
              </div>
              <div className="basis-3/12 flex flex-wrap justify-end">
                <div className="mb-2">
                  <button className="text-payeYellow border border-payeYellow font-bold py-2 px-4 rounded w-24">
                    <a href={gig.venueLink} target="_blank" rel="noopener noreferrer">
                      Venue
                    </a>
                  </button>
                </div>
                <div className="ml-2">
                  <button className="bg-payeYellow border border-payeYellow text-white font-bold py-2 px-4 rounded w-24">
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
    </>
  );
}

export default Gigs;
