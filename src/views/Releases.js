import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
	return builder.image(source);
}

const Releases = () => {
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
			<div className="my-10">
				<h3 className="text-3xl font-bold text-center my-10 lg:my-5">
					Releases
				</h3>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{releases &&
						releases.map((release) => (
							<div
								className="bg-gray-100 rounded shadow-xl p-5 std-border"
								key={release.title}
							>
								<div className="flex flex-col items-center">
									<img
										src={urlFor(release.image).width(200).url()}
										alt={release.title}
										className="rounded-full object-cover w-40 h-40 border-4 shadow-inner std-border"
									/>
									<h4 className="text-2xl pt-3 font-bold capitalize">
										{release.title}
									</h4>
								</div>
								<p className="mt-5">{release.description}</p>
							</div>
						))}
				</div>
			</div>
		</section>
	);
};

export default Releases;
