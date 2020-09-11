import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const Input = ({label, value, onChange}: {label: string, value: string | number, onChange: (text: string) => void}) => {

	return (
		<View>
			<Text style={localeStyles.label}>{label}</Text>
			<View style={localeStyles.inputContainer}>
				<TextInput
					value={value.toString()}
					onChangeText={onChange}
				/>
			</View>
		</View>
	);
};

export { Input };

const localeStyles = StyleSheet.create({
	inputContainer: {
		backgroundColor: '#fff',
		borderColor: '#888',
		borderRadius: 7,
		borderStyle: "solid",
		borderWidth: 1,
		padding: 10,
		minWidth: '75%',
	},
	label: {
		color: '#000',
		fontWeight: 'normal',
		paddingVertical: 5,
	},
});
