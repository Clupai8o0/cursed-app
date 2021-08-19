import React from "react";

const Adventure = ({ data }) => {
	return (
		<div className="adventure">
			<div className="cont-1">
				<img src={data.url} />
			</div>
			<div className="cont-2">
				<h2>
					{data.name} (ID: {data.id})
				</h2>
				<p>{data.description}</p>
			</div>
			<div className="cont-3">
				<div className="requirements">
					<h3>Requirements</h3>
					<ul>
						<li>Level: {data.requirements.level}</li>
						<li>Time: {data.requirements.time}</li>
						<li>Attack: {data.requirements.atk}</li>
						<li>Defence: {data.requirements.def}</li>
					</ul>
				</div>
				<div>
					<h3 className="reward">Reward</h3>
					<ul>
						<li>Money: {data.reward.money}</li>
						<li>XP: {data.reward.xp}</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Adventure;
