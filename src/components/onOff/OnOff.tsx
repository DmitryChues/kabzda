import React, { FC, useState } from 'react';

type OnOffPropsType = {
	// status: boolean
	// statusButton: () => void
}




const OnOff: FC<OnOffPropsType> = () => {
	const [status, setStatus] = useState(false)

	const onStyle = {
		width: '40px',
		height: '30px',
		border: '1px solid black',
		backgroundColor: status ? 'green' : 'white',
	}
	const offStyle = {
		width: '40px',
		height: '30px',
		border: '1px solid black',
		backgroundColor: !status ? 'red' : 'white',
	}
	const indicatorStyle = {
		width: '20px',
		height: '20px',
		borderRadius: '50%',
		border: '1px solid black',
		marginLeft: '5px',
		backgroundColor: status ? 'green' : 'red',
	}
	return (
		<>

			<div style={{ display: 'flex', alignItems: 'center' }}>
				<div style={onStyle} onClick={() => setStatus(true)}>On</div>
				<div style={offStyle} onClick={() => setStatus(false)}>Off</div>
				<div style={indicatorStyle}></div>
			</div>

			<div>
				{/* {status ? <button style={{ backgroundColor: "green" }}>On</button> : <button onClick={statusButton}>On</button>}
				{status ? <button onClick={statusButton}>Off</button> : <button style={{ backgroundColor: "red" }}>Off</button>}
				<Indicator status={status} /> */}
			</div>
		</>)
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