import React from 'react';
import './App.css';
import { Accordion } from './components/accordion/Accordion';
import { Rating } from './components/rating/Rating';

function App() {
	console.log("rendering App");
	return (
		<div className="App">
			<PageTitle title={"This is App component"} />
			<Rating value={3} />
			<Accordion title={"Pizza"} collapsed={true} />
			<Accordion title={"Coffee"} collapsed={false} />
			<Rating value={0} />
			<Rating value={1} />
			<Rating value={2} />
			<Rating value={3} />
			<Rating value={4} />
			<Rating value={5} />
		</div>
	);
}

function PageTitle(props: { title: string }) {
	console.log("rendering AppTitle");
	return (
		<h2>
			{props.title}
		</h2>
	)
}

export default App;
