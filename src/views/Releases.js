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
        title="Releases | Detweiler"
        description="All releases by Detweiler"
      />
      <section className="container w-full lg:px-0 px-5 lg:w-3/4 mx-auto min-h-screen">
        <h1 className="text-3xl font-bold text-center p-5">Releases</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-5">
          {releases &&
            releases.map((release) => (
              <div
                className=""
                key={release.title}
              >
                <div className="flex flex-col items-center">
                  <img
                    src={urlFor(release.image).width(200).url()}
                    alt={release.title}
                    className="rounded-l object-cover w-40 h-40 border-4 shadow-inner std-border"
                  />
                  <h2 className="text-center text-2xl pt-3 text-payeYellow">
                    {release.title}
                  </h2>
                <p className="text-payeBlue mt-3">
                  <a href={release.link}>Buy</a> |{" "}
                  <a href={release.stream}>Stream</a> |{" "}
                  <button onClick={() => handleInfoClick(release._id)}>
                    Info
                  </button>
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
