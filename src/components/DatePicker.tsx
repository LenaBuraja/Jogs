import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker  from '@react-native-community/datetimepicker';
import { Input } from './Input';

const DatePicker = ({value, onChange}: {value?: string, onChange: (text: string) => void}) => {

	const [date, setDate] = useState(value ? new Date(value) : new Date());
	const [show, setShow] = useState(false);
	const [dateString, setDateString] = useState<string>('');
 
	const onChangeDate = (selectedDate?: Date) => {
	  const currentDate = selectedDate || date;
	  setShow(Platform.OS === 'ios');
	  setDate(currentDate);
	};
 
	const showDatepicker = () => {
	  setShow(true);
	};

	useEffect(() => {
		setDateString(`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`);
	}, [date]);

	return (
		<View>
			{
				Platform.OS === 'web'
				? <Input
					label='Date'
					value={dateString}
					onChange={(text) => { onChange(text); setDateString(text)}}
				/>
				: <View>
					<Text style={localeStyles.label}>Date</Text>
					<TouchableOpacity style={localeStyles.inputContainer} onPress={showDatepicker}>
						<Text>{dateString}</Text>
					</TouchableOpacity>
				</View>
			}
			{show && (
			<DateTimePicker
				value={date}
				mode={'date'}
				is24Hour={true}
				display="default"
				onChange={(_, newValue) => onChangeDate(newValue)}
			/>
			)}
		</View>
	);
};

export { DatePicker };

const localeStyles = StyleSheet.create({
	inputContainer: {
		backgroundColor: '#fff',
		borderColor: '#888',
		borderRadius: 7,
		borderStyle: "solid",
		borderWidth: 1,
		padding: 10,
	},
	label: {
		color: '#000',
		fontWeight: 'normal',
		paddingVertical: 5,
	},
});
