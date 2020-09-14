import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker  from '@react-native-community/datetimepicker';
import { Input } from './Input';

const DatePickerField = React.memo(({label, value, isEnter, onChange}: {label: string, value?: string, isEnter?: boolean, onChange: (text: string) => void}) => {

	const [date, setDate] = useState<Date>();
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
		setDate(value ? new Date(value) : isEnter ? new Date() : undefined);
	}, [value]);

	useEffect(() => {
		setDateString(date ? `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}` : '');
	}, [date]);

	return (
		<View>
			{
				Platform.OS === 'web'
				? <Input
					label={label}
					value={dateString}
					onChange={(text) => { onChange(text); setDateString(text)}}
				/>
				: <View>
					<Text style={localeStyles.label}>{label}</Text>
					<TouchableOpacity style={localeStyles.inputContainer} onPress={showDatepicker}>
						<Text>{dateString}</Text>
					</TouchableOpacity>
				</View>
			}
			{show && (
			<DateTimePicker
				value={date ?? new Date()}
				mode={'date'}
				is24Hour={true}
				display="default"
				onChange={(_, newValue) => onChangeDate(newValue)}
			/>
			)}
		</View>
	);
});

export { DatePickerField };

const localeStyles = StyleSheet.create({
	inputContainer: {
		backgroundColor: '#fff',
		borderColor: '#888',
		borderRadius: 7,
		borderStyle: "solid",
		borderWidth: 1,
		padding: 10,
		paddingVertical: 15,
	},
	label: {
		color: '#000',
		fontWeight: 'normal',
		paddingVertical: 5,
	},
});
