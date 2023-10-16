import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="container lg:px-0 px-5 py-2 lg:py-0 lg:w-3/4 w-full mx-auto flex flex-col lg:flex-row justify-between h-20 items-center font-bold">
			<NavLink to="/">
				<h2 className="text-xl lg:text-2xl">Detweiler</h2>
			</NavLink>
			<div className="lg:block">
				<ul className="flex gap-x-20">
					<li>
						<NavLink
							to="/"
							exact
							className="nav-link"
							activeClassName="active-link"
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/gigs"
							className="nav-link"
							activeClassName="active-link"
						>
							Gigs
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/releases"
							className="nav-link"
							activeClassName="active-link"
						>
							Releases
						</NavLink>
					</li>
          <li>
						<NavLink
							to="/posts"
							className="nav-link"
							activeClassName="active-link"
						>
							Posts
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
