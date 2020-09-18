import React from 'react';

const FieldView = ({title, value, ancillary}: {title: string, value: string | number, ancillary?: string}) => {

	return (
		<div className='containerField'>
			<div className='textKey'>{title}: </div>
			<div className='textValue'>{value}</div>
			{ancillary ? <div className='textValue'> {ancillary}</div> : undefined}
		</div>
	);
};

export default FieldView;
