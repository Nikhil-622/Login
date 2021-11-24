import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<header>
				<h3 className="logo">
					<Link to="/">Navbar</Link>
				</h3>
				<nav className="navbar">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/registration">Registration</Link>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
};

export default Navbar;
