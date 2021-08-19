import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
	return (
		<main className="notFound">
			<h1>
				Page Not Found <i className="far fa-question-circle fa-spin"></i>
			</h1>
			<br />
			<Link to="/" className="link">
				Return Home
			</Link>
		</main>
	);
}

export default NotFound;
