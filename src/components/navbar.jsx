import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<nav>
			<div>
				<p></p>
			</div>
			<ul>
				<li>
					<Link to="/adventures" className="link">
						Adventure
					</Link>
				</li>
				<li>
					<Link to="/items" className="link">
						Item
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
