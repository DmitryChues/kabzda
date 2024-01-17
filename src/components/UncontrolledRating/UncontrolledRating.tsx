import { useState } from "react";

type RatingPropsType = {
	// value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating(props: RatingPropsType) {
	console.log("rendering Rating");
	const [value, setValue] = useState(0)
	const onClickHandler = (rating: 1 | 2 | 3 | 4 | 5) => {
		setValue(rating)
	}
	return (
		<div>
			<Star onClickHandler={() => onClickHandler(1)} selected={value > 0} />
			<Star onClickHandler={() => onClickHandler(2)} selected={value > 1} />
			<Star onClickHandler={() => onClickHandler(3)} selected={value > 2} />
			<Star onClickHandler={() => onClickHandler(4)} selected={value > 3} />
			<Star onClickHandler={() => onClickHandler(5)} selected={value > 4} />
		</div>
	)

}

type StarPropsType = {
	selected: boolean
	onClickHandler: () => void
}

function Star(props: StarPropsType) {
	console.log("rendering Star");
	return (
		props.selected
			? <span style={{ cursor: "pointer" }} onClick={props.onClickHandler}>
				<b>star </b>
			</span>
			: <span style={{ cursor: "pointer" }} onClick={props.onClickHandler}>star </span>
	)
	// if (props.selected === true) {
	// 	return <span style={{ cursor: "pointer" }} onClick={props.onClickHandler}><b>star</b> </span>
	// }
	// return <span style={{ cursor: "pointer" }} onClick={props.onClickHandler}>star </span>
}