import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";

function ShowSIngleService({ selected }) {
	// destructuring data
	const { name, detailDesc, fewWord, img, instruction } = selected;
	const [first, second, third, fourth] = instruction;
	const history = useHistory();
	const handleGoBack = () => {
		history.push("/home");
	};

	return (
		<Container>
			<Row className="gx-4 gy-4 gy-md-0 align-items-center mt-4">
				<Col md={6} sm={12}>
					<div>
						<img className="img-fluid" src={img} alt="Service's" />
					</div>
				</Col>
				<Col md={6} sm={12}>
					<div>
						<h4>{name}</h4>
						<p className="">Proper guideline :-</p>
						<ul>
							<li>{first}</li>
							<li>{second}</li>
							<li>{third}</li>
							<li>{fourth}</li>
						</ul>
						<div className=" text-muted">
							<p>{fewWord}</p>
							<p>{detailDesc}</p>
							<button onClick={handleGoBack} className="btn btn-dark">
								Go Back
							</button>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default ShowSIngleService;
