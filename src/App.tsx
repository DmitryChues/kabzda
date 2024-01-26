import React, { useState } from 'react';
import './App.css';
import { Accordion } from './components/accordion/Accordion';
import { Rating, RatingValue } from './components/rating/Rating';
import OnOff from './components/onOff/OnOff';
import { UncontrolledAccordion } from './components/UncontrolledAccordion/UncontrolledAccordion';
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating';
import { UncontrolledOnOff } from './components/UncontrolledOnOff/UncontrolledOnOff';

function App() {
	console.log("rendering App");

	const [accordionData, setAccordionData] = useState([
		{
			id: 1,
			title: 'Pizza',
			points: ['Capri', 'Margarita', 'Pepperoni'],
			collapsed: true,
		},
		{
			id: 2,
			title: 'Coffee',
			points: ['Latte', 'Cappuccino', 'Americano'],
			collapsed: false,
		},
	])

	const changeCollapsed = (accordionId: number, newStatus: boolean) => {
		let newAccordionStatus = accordionData.find(t => t.id === accordionId)
		if (newAccordionStatus) {
			newAccordionStatus.collapsed = newStatus
		}
		setAccordionData([...accordionData])
	}

	const [ratingValue, setRatingValue] = useState<RatingValue>(0)

	const changeRatingValue = (value: RatingValue) => {
		setRatingValue(value)
	}

	const [status, setStatus] = useState<boolean>(false)


	return (
		<div className="App">
			<Accordion changeCollapsed={changeCollapsed} accordionData={accordionData[0]} />
			<Accordion changeCollapsed={changeCollapsed} accordionData={accordionData[1]} />

			{/* <OnOff status={status} onChange={(status) => setStatus(status)} />
			<OnOff status={status} onChange={(status) => setStatus(status)} /> */}
			{/* <OnOff />
			<OnOff /> */}

			<UncontrolledOnOff onChange={setStatus} /> {status.toString()}

			<UncontrolledAccordion title={'Pizza'} />
			<UncontrolledRating />
			<Rating value={ratingValue} onClick={changeRatingValue} />
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
