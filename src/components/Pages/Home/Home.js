import React from "react";
import { Container, Row } from "react-bootstrap";
import GetData from "../../Hooks/useData/GetData";
import Carousal from "./Carousal";
import Service from "./Service";

function Home() {
	const datum = GetData();
	const services = datum.filter((data) => data.category === "service");
	return (
		<div>
			<Carousal />
			<Container>
				<Row className="mt-md-5 mt-sm-4 mt-2 g-4">
					<div className="p-2">
						<h3 className="text-center rounded bg-dark text-white py-3 ">
							Our Prominent Health Services
						</h3>
					</div>
					{services.map((service) => (
						<Service key={service.id} service={service} />
					))}
				</Row>
			</Container>
		</div>
	);
}

export default Home;
