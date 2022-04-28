import React from "react";
import Navbar from "./Navbar";

const About = () => {
	return (
		<div>
			<section id="about" className="section-bg">
				<header>
					<Navbar />
				</header>
				<div className="text">
					<h1>About Cory Marker</h1>
					<h3>
						<ul className="list-group">
							<li className="list-group-item">JavaScript</li>
							<li className="list-group-item">ReactJS</li>
							<li className="list-group-item">Redux</li>
							<li className="list-group-item">Ruby on Rails</li>
						</ul>
					</h3>
				</div>
			</section>
		</div>
	);
};

export default About;
