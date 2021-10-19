import React from "react";
import { Container, Row } from "react-bootstrap";
import useData from "../../Hooks/useData/useData";
import ShowContact from "./ShowContact";

function Contact() {
	const datum = useData();
	const contacts = datum.filter((data) => data.category === "Contact");
	return (
		<Container>
			<Row className="g-4 mt-1">
				<div className="px-2">
					<h3 className="text-center rounded bg-dark text-white py-3 ">
						Contact With Us
					</h3>
				</div>
				{contacts.map((contact) => (
					<ShowContact key={contact.id} contact={contact} />
				))}
			</Row>
		</Container>
	);
}

export default Contact;
