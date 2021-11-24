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
function LogOut() {
	// getting function form useFirebase by calling useAuth hook
	const {
		error,
		signUpUsingGoogle,
		signUpUsingGitHub,
		settingUserName,
		settingUserEmail,
		settingUserPassword,
		settingConfirmPassword,
		signUpWithEmailAndPassword,
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
						onSubmit={(e) => signUpWithEmailAndPassword(e)}
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
						<Form.Group className="mb-3" controlId="formBasicName">
							<Form.Label>Full Name</Form.Label>
							<Form.Control
								onChange={(e) => settingUserName(e.target.value)}
								type="name"
								placeholder="Name"
							/>
						</Form.Group>
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
						<Form.Group className="mb-3" controlId="formBasicConfirmPassword">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								onChange={(e) => settingConfirmPassword(e.target.value)}
								type="password"
								placeholder="Re-enter Password"
							/>
						</Form.Group>
						<Button className="w-100" variant="dark" type="submit">
							Sign up
						</Button>
						<p className="mt-2">
							Already have an account? <Link to="/login">Login</Link>
						</p>
						{error && <p> {error} </p>}
						<div className="d-flex justify-content-center">
							<img
								onClick={signUpUsingGoogle}
								style={{ width: "70px", cursor: "pointer" }}
								className="me-3"
								src={GoogleIcon}
								alt="google icon"
							/>
							<img
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

export default LogOut;
