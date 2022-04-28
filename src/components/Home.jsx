import React from "react";
import Navbar from "./Navbar";

const Home = () => {
	return (
		<div>
			<section id="home" className="section-bg">
				<header>
					<Navbar />
				</header>
				<div className="text">
					<h1>Cory Marker</h1>
					<p>
						Hello, I'm a Flatiron School graduate with training in
						full-stack web development.
					</p>
					<p>I have knowledge in Ruby on Rails and ReactJS.</p>
				</div>
			</section>
		</div>
	);
};

export default Home;
