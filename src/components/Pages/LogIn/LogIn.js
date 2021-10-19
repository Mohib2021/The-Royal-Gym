import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useFirebase/useAuth";
import GoogleIcon from "../../../Icon/google.svg";
import FacebookIcon from "../../../Icon/facebook.svg";
import GithubIcon from "../../../Icon/github.svg";
// setting AOS
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
	offset: 0,
	delay: 200,
	duration: 700,
});
function LogIn() {
	// getting all function from useFirebase by calling useAuth hook
	const {
		error,
		signUpUsingGoogle,
		signUpUsingGitHub,
		signUpUsingFacebook,
		signInUsingEmailAndPassword,
		settingUserEmail,
		settingUserPassword,
	} = useAuth();
	const shadow = {
		boxShadow: "0px 0px 15px gray",
	};
	return (
		<Container>
			<Row className=" mt-4 form-container align-items-center justify-content-center">
				<Col md={5}>
					<Form
						data-aos="fade-down"
						onSubmit={(e) => signInUsingEmailAndPassword(e)}
						style={shadow}
						className="p-3"
					>
						<div className="text-center">
							<img
								style={{ width: "90px" }}
								src="https://i.ibb.co/KKvLLKr/logo2.png"
								alt=""
							/>
						</div>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								onChange={(e) => settingUserEmail(e.target.value)}
								type="email"
								placeholder="Enter email"
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								onChange={(e) => settingUserPassword(e.target.value)}
								type="password"
								placeholder="Password"
							/>
						</Form.Group>
						<Button className="w-100" variant="dark" type="submit">
							Login
						</Button>
						<p className="mt-2">
							Don't have any account? <Link to="/signup">Sign up</Link>
						</p>
						{error && <p className="text-danger"> {error} </p>}
						<div className="d-flex justify-content-center">
							<img
								onClick={signUpUsingGoogle}
								style={{ width: "70px", cursor: "pointer" }}
								className="me-3"
								src={GoogleIcon}
								alt="google icon"
							/>
							<img
								onClick={signUpUsingFacebook}
								style={{ width: "70px", cursor: "pointer" }}
								className="me-3"
								src={FacebookIcon}
								alt="google icon"
							/>
							<img
								onClick={signUpUsingGitHub}
								style={{ width: "70px", cursor: "pointer" }}
								src={GithubIcon}
								alt="google icon"
							/>
						</div>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default LogIn;
