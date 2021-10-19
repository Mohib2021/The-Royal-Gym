import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
	return (
		<footer className="bg-dark text-white mt-5 pt-5">
			<Container>
				<Row>
					<Col md={4} sm={6}>
						<ul>
							<li>Emergency help&support</li>
							<li>Getting our instructor</li>
							<li>Getting our helper/supporter</li>
							<li>Asking for anything you need</li>
						</ul>
					</Col>
					<Col md={4} sm={6}>
						<ul>
							<li>Ensuring your own booking</li>
							<li>Checking your daily status</li>
							<li>Setting a goal as everyday task</li>
							<li>Becoming cautious about your health</li>
						</ul>
					</Col>
					<Col md={4} sm={6}>
						<ul>
							<li>Quick tips and tricks</li>
							<li>Reading our important blogs</li>
							<li>Most prominent links</li>
							<li>Stay healthy and wealthy</li>
						</ul>
					</Col>
				</Row>
				<Row className="py-2 g-3 small">
					<Col md={6} sm={12}>
						<span className="me-3 me-sm-4">Privacy Policy</span>
						<span className="me-3 me-sm-4">Terms & Condition</span>
						<span>Security & Guard</span>
					</Col>
					<Col className="text-start text-md-end" md={6} sm={12}>
						<p className="text-muted">
							All &copy; copyWright reserved 2010-{new Date().getFullYear()}
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;
