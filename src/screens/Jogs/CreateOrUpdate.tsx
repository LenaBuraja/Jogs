import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { HeaderLine } from '../../components/HeaderLine';

const CreateJogs = () => {

	return (
		<View style={localeStyles.container}>
			<HeaderLine />
			<Text>Create or update jog</Text>
		</View>
	);
};

export { CreateJogs };

const localeStyles = StyleSheet.create({
	container: {
		padding:0,
	},
});
