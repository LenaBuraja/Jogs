import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { HeaderLine } from '../../components/HeaderLine';

const ListJogs = () => {

	return (
		<View style={localeStyles.container}>
			<HeaderLine />
			<Text>List of jog</Text>
		</View>
	);
};

export { ListJogs };

const localeStyles = StyleSheet.create({
	container: {
		padding:0,
	},
});
