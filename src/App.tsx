import React, { useState } from 'react';
import './App.css';
import { Accordion } from './components/accordion/Accordion';
import { Rating } from './components/rating/Rating';
import OnOff from './components/onOff/OnOff';
import { UncontrolledAccordion } from './components/UncontrolledAccordion/UncontrolledAccordion';
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating';

function App() {
	console.log("rendering App");

	const [status, setStatus] = useState(false)
	const statusButton = () => {
		setStatus(!status)
	}

	const accordionData = [
		{
			title: 'Pizza',
			points: ['Capri', 'Margarita', 'Pepperoni'],
			collapsed: true,
		},
		{
			title: 'Coffee',
			points: ['Latte', 'Cappuccino', 'Americano'],
			collapsed: false,
		},
	]

	const changeCollapsed = () => {

	}

	return (
		<div className="App">
			{/* <PageTitle title={"This is App component"} />
			<Rating value={3} /> */}
			<Accordion title={"Pizza"} collapsed={true} />
			<Accordion title={"Coffee"} collapsed={false} />
			{/* <Rating value={0} />
			<Rating value={1} />
			<Rating value={2} />
			<Rating value={3} />
			<Rating value={4} />
			<Rating value={5} /> */}
			<OnOff />
			<OnOff />
			<OnOff />
			<UncontrolledAccordion title={'Pizza'} />
			<UncontrolledRating />
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
