import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useFirebase/useAuth";
import "./Header.css";
function Header() {
	// getting user and logOut form  useFirebase by calling useAuth hook
	const { user, logOut } = useAuth();
	return (
		<div className="sticky-top">
			<Navbar collapseOnSelect expand="lg" variant="light">
				<Container>
					<Navbar.Brand href="#home">
						<div className="d-flex align-items-center">
							<img src="https://i.ibb.co/KKvLLKr/logo2.png" alt="logo" />

							<h4 className="ms-2">The Royal Gym</h4>
						</div>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ms-auto text-center text-md-start navigation">
							<Nav.Link as={Link} className="active" to="/home">
								Home
							</Nav.Link>
							<Nav.Link as={Link} to="/training">
								Training
							</Nav.Link>
							<Nav.Link as={Link} to="/about">
								About
							</Nav.Link>
							<Nav.Link as={Link} to="/contact">
								Contact
							</Nav.Link>
							{!user.displayName ? (
								<Nav.Link as={Link} to="/login">
									Login
								</Nav.Link>
							) : (
								<Nav.Link onClick={logOut} as={Link} to="/home">
									LogOut
								</Nav.Link>
							)}
							{!user.displayName ? (
								<Nav.Link as={Link} to="/signup">
									Sign up
								</Nav.Link>
							) : (
								<Nav.Link>Welcome {user.displayName}</Nav.Link>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default Header;
