import React from "react";
import { useHistory } from "react-router";
import "./NotFound.css";
function NotFound() {
	const history = useHistory();
	const goToHome = () => {
		history.push("/home");
	};
	return (
		<div className="mt-4">
			<div className="not-found">
				<img
					className="img-fluid"
					src="https://i.ibb.co/vD07j1V/404-error-poster-with-page-not-found-to-use-for-website-vector-illustration.jpg"
					alt="page not found img"
				/>
				<button onClick={goToHome} className="btn back-btn btn-primary">
					Back to Home
				</button>
			</div>
		</div>
	);
}

export default NotFound;
