import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousal.css";
function Carousal() {
	// holding img in variable
	const item1 =
		"https://images.pexels.com/photos/116079/pexels-photo-116079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
	const item2 =
		"https://images.unsplash.com/photo-1604480133080-602261a680df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80";
	const item3 =
		"https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
	return (
		<div>
			<Carousel fade>
				<Carousel.Item>
					<img className="d-block w-100" src={item1} alt="First slide" />
					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={item2} alt="Second slide" />
					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={item3} alt="Third slide" />
					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Carousal;
