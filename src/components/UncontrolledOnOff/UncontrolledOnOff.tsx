import React, { FC, useState } from 'react';

type UncontrolledOnOffProps = {
	onChange: (status: boolean) => void
}

export const UncontrolledOnOff: FC<UncontrolledOnOffProps> = ({ onChange }) => {
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

	const onClikedHandler = () => {
		setStatus(true)
		onChange(true)
	}
	const offClikedHandler = () => {
		setStatus(false)
		onChange(false)
	}
	return (
		<>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<div style={onStyle} onClick={onClikedHandler}>On</div>
				<div style={offStyle} onClick={offClikedHandler}>Off</div>
				<div style={indicatorStyle}></div>
			</div>
		</>)
};

const Indicator = (props: { status: boolean }) => {
	return <div style={{ display: "inline-block", width: "10px", height: "10px", backgroundColor: `${props.status ? 'green' : 'red'}`, borderRadius: "50%" }}></div>
}