import React from "react";
import { Carousel, Col, ListGroup } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
	offset: 150,
	delay: 200,
	duration: 700,
});
function ShowAbout({ about }) {
	const { img, title, category, desc, atAGlance } = about;
	const [first, second, third] = atAGlance;
	const [one, two, three] = img;
	const shadow = {
		boxShadow: "0px 0px 15px gray",
	};
	return (
		<Col md={4} sm={6}>
			<div data-aos="fade-up" style={shadow} className="p-2">
				<div>
					<Carousel>
						<Carousel.Item>
							<img
								className="d-block rounded w-100"
								src={one}
								alt="First slide"
							/>
							<Carousel.Caption></Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block rounded w-100"
								src={two}
								alt="Second slide"
							/>
							<Carousel.Caption></Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block rounded w-100"
								src={three}
								alt="Third slide"
							/>
							<Carousel.Caption></Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
				<div className="text-center mt-3">
					<h4>
						{category} {title}
					</h4>
					<ListGroup variant="flush">
						<ListGroup.Item>{first}</ListGroup.Item>
						<ListGroup.Item>{second}</ListGroup.Item>
						<ListGroup.Item>{third}</ListGroup.Item>
					</ListGroup>
					<p className="text-start">
						<b>Description : </b>
						{desc}
					</p>
				</div>
			</div>
		</Col>
	);
}

export default ShowAbout;
