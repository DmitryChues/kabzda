import { useState } from "react";

type UncontrolledRatingPropsType = {

}

export function UncontrolledRating(props: UncontrolledRatingPropsType) {
	console.log("rendering Rating");
	const [value, setValue] = useState(0)
	const onClickHandler = (rating: 1 | 2 | 3 | 4 | 5) => {
		setValue(rating)
	}
	return (
		<div>
			<Star onClick={() => onClickHandler(1)} selected={value > 0} />
			<Star onClick={() => onClickHandler(2)} selected={value > 1} />
			<Star onClick={() => onClickHandler(3)} selected={value > 2} />
			<Star onClick={() => onClickHandler(4)} selected={value > 3} />
			<Star onClick={() => onClickHandler(5)} selected={value > 4} />
		</div>
	)

}

type StarPropsType = {
	selected: boolean
	onClick: () => void
}

function Star(props: StarPropsType) {
	console.log("rendering Star");
	const onCklickHandler = () => {
		props.onClick()
	}
	return (
		<span style={{ cursor: 'pointer' }} onClick={onCklickHandler}>{props.selected ? <b>star </b> : 'star '}</span>
	)
}