import React from "react";

const Card = (props) => {
	return (
		<div className="card">
			<img className="news-image" src={"~/images/logo192.png"} alt="test logo" />
			<div className="card-body">
				<h2>Title</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam.
				</p>
				<h5>Test author</h5>
			</div>
		</div>
	);
};

export default Card;
