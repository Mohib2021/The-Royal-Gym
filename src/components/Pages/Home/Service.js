import React from "react";
import { Col, ListGroup } from "react-bootstrap";
import { useHistory } from "react-router";
function Service({ service }) {
	const { img, name, instruction, fewWord } = service;
	const [first, second, third] = instruction;
	const shadow = {
		boxShadow: "0px 0px 15px gray",
	};
	const history = useHistory();
	const handleSeeMore = () => {
		history.push(`/service/${service.id}`);
	};
	return (
		<Col md={4} sm={6}>
			<div style={shadow} className=" p-2 rounded text-center">
				<img className="img-fluid rounded" src={img} alt="service image" />
				<h4 className="mt-3">{name}</h4>
				<b>Instruction:-</b>
				<ListGroup variant="flush">
					<ListGroup.Item>{first}</ListGroup.Item>
					<ListGroup.Item>{second}</ListGroup.Item>
					<ListGroup.Item>{third}</ListGroup.Item>
				</ListGroup>
				<div className="text-start">
					<b>Little Description : </b>
					<span>{fewWord}</span>
				</div>
				<button onClick={handleSeeMore} className="btn btn-outline-dark mt-2">
					See more
				</button>
			</div>
		</Col>
	);
}

export default Service;