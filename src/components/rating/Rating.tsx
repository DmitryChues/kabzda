
export type RatingValue = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
	value: RatingValue
	onClick: (value: RatingValue) => void
}

export function Rating(props: RatingPropsType) {
	console.log("rendering Rating");

	return (
		<div>
			<Star onClick={props.onClick} selected={props.value > 0} value={1} />
			<Star onClick={props.onClick} selected={props.value > 1} value={2} />
			<Star onClick={props.onClick} selected={props.value > 2} value={3} />
			<Star onClick={props.onClick} selected={props.value > 3} value={4} />
			<Star onClick={props.onClick} selected={props.value > 4} value={5} />
		</div>
	)

}

type StarPropsType = {
	selected: boolean
	value: RatingValue
	onClick: (value: RatingValue) => void
}

function Star(props: StarPropsType) {
	console.log("rendering Star");
	return <span onClick={() => props.onClick(props.value)}>{props.selected ? <b>star </b> : 'star '}</span>
}