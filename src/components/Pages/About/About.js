import React from "react";
import { Container, Row } from "react-bootstrap";
import useData from "../../Hooks/useData/useData";
import ShowAbout from "./ShowAbout";

function About() {
	// getting all data
	const datum = useData();
	// getting just about data
	const aboutUs = datum.filter((data) => data.category === "About");
	return (
		<Container>
			<Row className="g-4 mt-1">
				<div className="px-2">
					<h3 className="py-3 bg-dark rounded text-center text-white">
						All About Us
					</h3>
				</div>
				{aboutUs.map((about) => (
					<ShowAbout key={about.id} about={about} />
				))}
			</Row>
		</Container>
	);
}

export default About;
