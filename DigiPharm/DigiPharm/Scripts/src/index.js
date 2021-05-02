import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card.js'

const App = () => {
	return (
		<div>
			<h1>New Asp.net + React Project</h1>
			<Card />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));