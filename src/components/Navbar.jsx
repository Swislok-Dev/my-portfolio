import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="border">
			<nav className="navbar border">
				<NavLink to="/" className='nav-link'>Home</NavLink>
				<NavLink to='/about' className="nav-link">About</NavLink>
				<NavLink to='/project' className="nav-link">Projects</NavLink>
				<NavLink to='/contact' className="nav-link">Contact</NavLink>
			</nav>
			<Outlet />
		</div>
		
	);
};

export default Navbar;
