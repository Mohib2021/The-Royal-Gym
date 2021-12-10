import React from "react";
import { Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
// setting AOS
AOS.init({
	offset: 150,
	delay: 0.5,
	duration: 1000,
});
function ShowTraining({ training }) {
	// destructuring training data
	const { name, trainingCategory, img, fewWord, detailDesc, keyFeature } =
		training;
	const [first, second, third, fourth] = keyFeature;
	return (
		<>
			<Col md={6} sm={12}>
				<div data-aos="fade-right">
					<img className="img-fluid" src={img} alt="Training" />
				</div>
			</Col>
			<Col md={6} sm={12}>
				<div data-aos="fade-left">
					<h4>{trainingCategory}</h4>
					<h6 className="ms-5">
						<span className="blockquote-footer">
							<cite title={name}>{name}</cite>
						</span>
					</h6>
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
		</>
	);
}

export default ShowTraining;
