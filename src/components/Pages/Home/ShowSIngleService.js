import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function ShowSIngleService({ selected }) {
	const { name, detailDesc, fewWord, img, instruction } = selected;
	const [first, second, third, fourth] = instruction;
	return (
		<Container>
			<Row className="g-4 mt-4">
				<Col md={6} sm={12}>
					<div>
						<img className="img-fluid" src={img} alt="" />
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
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default ShowSIngleService;
