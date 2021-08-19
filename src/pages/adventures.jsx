import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Adventure from "../components/adventure";
import Loading from "../components/fetchLoading";
import FormAdventure from "../components/form-adventure"
import { api } from "../constants/url";

function Adventures() {
	const [adventures, setAdventures] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [form, setForm] = useState(false);

	useEffect(() => {
		fetch(`${api}adventures`)
			.then((resp) => resp.json())
			.then((data) => {
				setAdventures(data);
				setLoaded(true);
			});
	}, []);

	useEffect(() => {
		console.log(adventures);
		console.log(adventures[0]);
	}, [adventures]);

	return (
		<main className="adventure-container">
			{!loaded ? (
				<Loading />
			) : (
				<div>
					<div className="form-nav">
						<i
							class="far fa-plus-square fa-3x"
							onClick={() => setForm(true)}
						></i>
					</div>
					{!form ? (
						<div></div>
					) : (
						ReactDOM.createPortal(
							<FormAdventure/>,
							document.getElementById("form")
						)
					)}
					{adventures.map((adventure) => {
						return <Adventure data={adventure} />;
					})}
				</div>
			)}
		</main>
	);
}

export default Adventures;
