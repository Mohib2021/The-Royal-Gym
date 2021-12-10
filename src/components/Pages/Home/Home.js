import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
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
				<div className=" mt-4">
					<div className="px-2">
						<h3 className="text-center rounded bg-dark text-white py-3 ">
							Our Prominent Health Services
						</h3>
					</div>
					{!services.length ? (
						<div
							style={{ height: "90vh" }}
							className="mt-5 d-flex align-items-center justify-content-center"
						>
							<h4 className="me-2">Loading...</h4>
							<Spinner animation="border" variant="dark" />
						</div>
					) : (
						<Row className=" mt-1 g-4">
							{services.map((service) => (
								<Service key={service.id} service={service} />
							))}
						</Row>
					)}
				</div>
			</Container>
		</div>
	);
}

export default Home;
