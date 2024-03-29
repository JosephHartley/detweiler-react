import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav id="menu" className="container lg:px-0 px-5 py-2 lg:py-0 lg:w-3/4 w-full mx-auto flex flex-col lg:flex-row justify-between h-20 items-center font-bold">
			<h2 className="title text-xl lg:text-2xl">
        <NavLink
          to="/"
          className="nav-link"
        >
          detweiler
        </NavLink>
      </h2>
			<div className="lg:block">
				<ul className="flex gap-x-10">
					<li>
						<NavLink
							to="/gigs"
							className="nav-link"
						>
							live
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/releases"
							className="nav-link"
						>
							music
						</NavLink>
					</li>
          <li>
						<NavLink
							to="/news"
							className="nav-link"
						>
							news
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
