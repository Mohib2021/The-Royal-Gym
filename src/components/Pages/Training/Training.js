import React from "react";
import { Container, Row } from "react-bootstrap";
import useData from "../../Hooks/useData/useData";
import ShowTraining from "./ShowTraining";

function Training() {
	const datum = useData();
	const training = datum.filter((data) => data.category === "Training");
	return (
		<div>
			<Container>
				<Row className="g-4 align-items-center mt-3">
					<div className="p-2">
						<h3 className="text-center rounded bg-dark text-white py-3 ">
							Our Popular Health Care
						</h3>
					</div>
					{training.map((singleTraining) => (
						<ShowTraining key={singleTraining.id} training={singleTraining} />
					))}
				</Row>
			</Container>
		</div>
	);
}

export default Training;