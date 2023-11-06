import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import { Seo } from "../components/Seo.js";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

function Releases() {
  const [releases, setReleases] = useState(null);
  const [expandedRelease, setExpandedRelease] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "release"] | order(releaseDate desc){
					_id,
      title,
      releaseDate,
      description,
      link,
      stream,
      image{
        asset->{
          _id,
          url
        },
      },
    }`
      )
      .then((data) => setReleases(data))
      .catch(console.error);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleString("en-UK", {
      dateStyle: "long",
    });
  };

  const handleInfoClick = (releaseId) => {
    setExpandedRelease((prev) => (prev === releaseId ? null : releaseId));
  };

  return (
    <>
      <Seo
        title="Music | Detweiler"
        description="All music and releases by Detweiler"
      />
      <section className="container w-full lg:px-0 px-5 lg:w-3/4 mx-auto min-h-screen">
        <h1 className="text-2xl font-bold text-center p-5">music</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-5">
          {releases &&
            releases.map((release) => (
              <div
                key={release.title}
              >
                <div className="flex flex-col items-center">
                <a href={release.stream} target="_blank" rel="noopener noreferrer">
                  <img
                    src={urlFor(release.image).width(200).url()}
                    alt={release.title}
                    className="rounded-lg object-cover w-40 h-40 border-2 shadow-inner border-payeRed"
                  />
                </a>
                <a href={release.stream} target="_blank" rel="noopener noreferrer">
                  <h2 className="text-center text-2xl pt-3 text-payeYellow">
                    {release.title}
                  </h2>
                </a>
                <p className="text-payeBlue mt-3">
                  {release.link && (
                    <>
                      <a className="release-link" href={release.link} target="_blank" rel="noopener noreferrer">Buy</a> |{" "}
                    </>
                  )}
                  <a className="release-link" href={release.stream} target="_blank" rel="noopener noreferrer">Listen</a> |{" "}
                  <button className="release-link" onClick={() => handleInfoClick(release._id)}>Info</button>
                </p>
                {expandedRelease === release._id && (
                  <p
                  className="text-sm mt-5 rounded backdrop-opacity-10 backdrop-invert bg-blue-300/10 shadow-lg p-5 std-border">
                    <b>Released {formatDate(new Date(release.releaseDate))}</b>
                    <br />
                    {release.description}
                  </p>
                )}
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default Releases;
