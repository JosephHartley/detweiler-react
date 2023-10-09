import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
	return builder.image(source);
}

function Releases() {
  let formatDate = (date) => {
    return date.toLocaleString('en-UK', {
      dateStyle: 'long'
    })
  }

	const [releases, setReleases] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "release"]{
					_id,
      title,
      releaseDate,
      description,
      link,
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

	return (
		<section className="container w-full lg:px-0 px-5 lg:w-3/4 mx-auto min-h-screen">
      <h1 className="text-3xl font-bold text-center p-5">
        Releases
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-5">
        {releases &&
          releases.map((release) => (
            <div
              className="rounded shadow-lg shadow-red-300/50 p-5 std-border"
              key={release.title}
            >
              <div className="flex flex-col items-center">
                <img
                  src={urlFor(release.image).width(200).url()}
                  alt={release.title}
                  className="rounded-l object-cover w-40 h-40 border-4 shadow-inner std-border"
                />
                <h2 className="text-2xl pt-3 font-bold capitalize">
                  {release.title}
                </h2>
              </div>
              <p className="text-center mt-3">
                {formatDate(new Date(release.releaseDate))}
              </p>
              <p className="text-center mt-3">
              <a href={release.link}>Buy</a> | <a href={release.link}>Stream</a>
              </p>
              <p className="text-sm mt-5">{release.description}</p>
            </div>
          ))}
      </div>
		</section>
	);
};

export default Releases;
