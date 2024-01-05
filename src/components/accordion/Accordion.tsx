type AccordionPropsType = {
	title: string
	collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
	console.log("rendering Accordion");

	return <div>
		<AccordionTitle title={props.title} />
		{!props.collapsed && <AccordionBody />}
	</div>

}

// export function Accordion2(props: AccordionPropsType) {
// 	console.log("rendering Accordion");
// 	if (props.collapsed === false) {
// 		return <div>
// 			<AccordionTitle title={props.title} />
// 			<AccordionBody />
// 		</div>
// 	} else {
// 		return <div>
// 			<AccordionTitle title={props.title} />
// 		</div>
// 	}
// }

type AccordionTitlePropsType = {
	title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
	console.log("rendering AccordionTitle");
	return <h3>{props.title}</h3>
}

function AccordionBody() {
	console.log("rendering AccordionBody");
	return <ul>
		<li>1</li>
		<li>2</li>
		<li>3</li>
	</ul>
}