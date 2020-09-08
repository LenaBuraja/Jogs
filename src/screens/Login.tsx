import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { HeaderLine } from '../components/HeaderLine';

const Login = () => {

	return (
		<View style={localeStyles.container}>
			<HeaderLine />
			<Text>Header</Text>
		</View>
	);
};

export { Login };

const localeStyles = StyleSheet.create({
	container: {
		padding: 0,
	},
});
