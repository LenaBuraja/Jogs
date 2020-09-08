import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const HeaderLine = () => {

	return (
		<View style={localeStyles.container}>
			<Text style={localeStyles.text}>Header</Text>
		</View>
	);
};

export { HeaderLine };

const localeStyles = StyleSheet.create({
	container: {
		height: 77,
		backgroundColor: '#7ed321',
	},
	text: {
		color: '#FFF',
	},
});
