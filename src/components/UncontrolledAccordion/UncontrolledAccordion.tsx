import { useState } from "react";

type AccordionPropsType = {
	title: string
	// collapsed: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {
	console.log("rendering Accordion");

	const [collapsed, setCollapsed] = useState(false)
	const onClickHandler = () => {
		setCollapsed(!collapsed)
	}
	return <div>
		<AccordionTitle onClick={onClickHandler} title={props.title} />
		{!collapsed && <AccordionBody />}
	</div>

}

type AccordionTitlePropsType = {
	title: string
	onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
	console.log("rendering AccordionTitle");
	const onClickHandler = () => {
		props.onClick()
	}
	return <h3 style={{ cursor: "pointer" }} onClick={onClickHandler}>{props.title}</h3>
}

function AccordionBody() {
	console.log("rendering AccordionBody");
	return <ul>
		<li>1</li>
		<li>2</li>
		<li>3</li>
	</ul>
}