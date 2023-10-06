import React from "react";

import bandImage from "../images/detweiler_home.jpeg"

function Home() {
	return (
		<section className="container w-full lg:px-0 px-5 lg:w-3/4 mx-auto min-h-screen">
			<div className="mt-16">
				<h3 className="text-3xl font-bold text-center my-10 lg:my-5">
					Detweiler
				</h3>
				<div className="flex gap-10 justify-center items-center flex-col lg:flex-row mt-10">
        <div className="relative w-96 h-96">
  <img
    src={bandImage}
    className="w-full h-full object-cover rounded-xl lg:rounded-l-xl"
    alt=""
  />
  <div className="absolute inset-0 rounded-xl lg:rounded-l-xl animate-pulse"></div>
  <div className="absolute inset-0 bg-green-500 opacity-50 rounded-xl lg:rounded-l-xl animate-pulse-color"></div>
</div>

					<div className="w-full lg:w-1/3 flex gap-5 mb-10 lg:mb-0 flex-col">
						⭐⭐⭐
						<p>
							Northern ravey rockers
						</p>
						<p>
							David Holt
						</p>
						<p>
							Marianne Holt
						</p>
						⭐⭐⭐
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
