import React from 'react';
import { api } from '../constants/url';

function FormAdventure() {
  return (
		<div className="form-adventure">
			<form method="post" action={`${api}/adventure/add`}>
				<h2>Adventure Creator</h2>
				<div>
					<input
						className=""
						type="text"
						name="name"
						placeholder="Adventure Name"
						autocomplete="off"
						autofocus
						required
					/>
				</div>
				<div>
					<textarea
						className=""
						name="description"
						placeholder="Description for the adventure"
						rows="14"
						autocomplete="off"
						spellcheck="true"
						autofocus
						required
					/>
				</div>
				<div>
					<label>Requirements</label>
					<input
						className=""
						type="number"
						name="level"
						placeholder="Level"
						autocomplete="off"
						min="1"
						max="250"
						autofocus
						required
					/>
					<input
						className=""
						type="number"
						name="time"
						placeholder="Time (In Seconds)"
						autocomplete="off"
						min="360"
						max="259200"
						autofocus
						required
					/>
				</div>
				<div>
					<label>Reward</label>
					<input
						className=""
						type="number"
						name="money"
						placeholder="Money"
						autocomplete="off"
						min="2"
						max="10000000"
						autofocus
						required
					/>
					<input
						className=""
						type="number"
						name="xp"
						placeholder="XP"
						autocomplete="off"
						min="100"
						max="10000000"
						autofocus
						required
					/>
				</div>
				<div>
					<input
						className=""
						type="url"
						name="url"
						placeholder="Image Url (must have an https:// and must end with a jpg or png)"
						autocomplete="off"
						autofocus
						required
					/>
				</div>
				<div>
					<button className type="submit">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default FormAdventure;