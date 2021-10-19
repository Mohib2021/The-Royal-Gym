import React from "react";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
	offset: 0,
	delay: 200,
	duration: 1000,
});
function ShowContact({ contact }) {
	const { name, img, title, email, phone } = contact;
	const shadow = {
		boxShadow: "0px 0px 15px gray",
	};
	const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
	return (
		<Col>
			<div data-aos="fade-left" style={shadow} className="p-2 rounded">
				<div>
					<img
						className="rounded"
						src={img}
						className="img-fluid"
						alt="contact img"
					/>
				</div>
				<div className="mt-2">
					<h4>{name}</h4>

					<h6 className="blockquote-footer mt-3">
						<cite title={title}>{title}</cite>
					</h6>
					<p className="mb-2">Email : {email}</p>
					<p className="mb-2">
						Telephone : {phoneIcon} {phone}
					</p>
				</div>
			</div>
		</Col>
	);
}

export default ShowContact;
