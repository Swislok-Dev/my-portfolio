import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<nav className="navbar">
				<NavLink to="/" className='nav-link'>Home</NavLink>
				<NavLink to='/about' className="nav-link">About</NavLink>
				<NavLink to='/projects' className="nav-link">Projects</NavLink>
				<NavLink to='/contact' className="nav-link">Contact</NavLink>
			</nav>
			<Outlet />
		</div>
		
	);
};

export default Navbar;
