import React from 'react';



const OnOff = (props: { status: boolean }) => {
	if (props.status === true) {
		return (
			<>
				<button style={{ backgroundColor: "green" }}>On</button>
				<button>Off</button>
				<Indicator status={props.status} />
			</>
		)
	}
	return (
		<>
			<button>On</button>
			<button style={{ backgroundColor: "red" }}>Off</button>
			<Indicator status={props.status} />
		</>)


	// return (
	// 	<>
	// 		<button style={{ backgroundColor: "green" }}>On</button>
	// 		<button style={{ backgroundColor: "red" }}>Off</button>
	// 	</>
	// )
	// return (
	// 	<>
	// 		<Button name={'On'} />
	// 		<Button name={'Off'} />
	// 		<Indicator status={false} />
	// 	</>
	// );
};

const Indicator = (props: { status: boolean }) => {
	if (props.status) {
		return (
			<span style={{ display: "inline-block", width: "10px", height: "10px", backgroundColor: "green", borderRadius: "50%" }}></span>
		)
	}
	return (
		<span style={{ display: "inline-block", width: "10px", height: "10px", backgroundColor: "red", borderRadius: "50%" }}></span>
	)
}

export default OnOff;