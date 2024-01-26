type AccordionData = {
	id: number,
	title: string,
	points: string[],
	collapsed: boolean,
}

type AccordionPropsType = {
	accordionData: AccordionData
	changeCollapsed: (accordionId: number, newStatus: boolean) => void
}

export function Accordion(props: AccordionPropsType) {
	const { accordionData: { collapsed, id, points, title }, changeCollapsed } = props
	console.log("rendering Accordion");

	return <div>
		<AccordionTitle changeCollapsed={changeCollapsed} collapsed={collapsed} id={id} title={title} />
		{!collapsed && <AccordionBody points={points} />}
	</div>

}

type AccordionTitlePropsType = {
	title: string
	collapsed: boolean
	id: number
	changeCollapsed: (accordionId: number, newStatus: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
	console.log("rendering AccordionTitle");
	const onClickHandler = (id: number,) => {
		props.changeCollapsed(props.id, !props.collapsed)
	}
	return <h3 onClick={() => props.changeCollapsed(props.id, !props.collapsed)}>{props.title}</h3>
}

type AccordionBody = {
	points: string[]
}

function AccordionBody(props: AccordionBody) {
	const { points } = props
	console.log("rendering AccordionBody");
	return <ul>
		{points.map(p => <li>{p}</li>)}
	</ul>
}

// ================================================================

// type AccordionPropsType = {
// 	title: string
// 	collapsed: boolean
// }

// export function Accordion(props: AccordionPropsType) {
// 	console.log("rendering Accordion");

// 	return <div>
// 		<AccordionTitle title={props.title} />
// 		{!props.collapsed && <AccordionBody />}
// 	</div>

// }

// type AccordionTitlePropsType = {
// 	title: string
// }

// function AccordionTitle(props: AccordionTitlePropsType) {
// 	console.log("rendering AccordionTitle");
// 	return <h3>{props.title}</h3>
// }

// function AccordionBody() {
// 	console.log("rendering AccordionBody");
// 	return <ul>
// 		<li>1</li>
// 		<li>2</li>
// 		<li>3</li>
// 	</ul>
// }