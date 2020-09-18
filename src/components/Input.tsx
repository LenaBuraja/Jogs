import React from 'react';

const Input = ({label, value, onChange}: {label: string, value: string | number, onChange: (text: string) => void}) => {

	return (
		<div>
			<div className='label'>{label}</div>
			<div className='inputContainer'>
				<input
					value={value.toString()}
					onChange={(event) => onChange(event.target.value)}
					type='decimal-pad'
				/>
			</div>
		</div>
	);
};

export default Input;
