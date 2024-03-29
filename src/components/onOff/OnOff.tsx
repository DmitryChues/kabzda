import React, { FC, useState } from 'react';

type OnOffPropsType = {
	status: boolean
	onChange: (status: boolean) => void
	// statusButton: () => void
}




const OnOff: FC<OnOffPropsType> = ({ status, onChange }) => {

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
				<div style={onStyle} onClick={() => onChange(true)}>On</div>
				<div style={offStyle} onClick={() => onChange(false)}>Off</div>
				<div style={indicatorStyle}></div>
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