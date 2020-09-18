import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

const DatePickerField = ({label, value, onChange}: {label: string, value?: string, onChange: (text: string) => void}) => {

	const [date, setDate] = useState<Date>();

	useEffect(() => {
		setDate(value ? new Date(value) : undefined);
	}, [value]);

	useEffect(() => {
		if (date) {
			onChange(date?.toISOString());
		}
	}, [date, onChange]);

	return (
		<div>
			<div className='labelIput'>{label}</div>
			<div className='datePicker'>
				<DatePicker
					dateFormat='dd.MM.yyyy'
					selected={date}
					onChange={date => !date ? undefined : Array.isArray(date) ? setDate(date[0]) : setDate(date)}
				/>
			</div>
		</div>
	);
};

export default DatePickerField;
