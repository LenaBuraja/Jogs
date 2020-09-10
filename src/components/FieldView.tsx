import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const FieldView = ({title, value, ancillary}: {title: string, value: string | number, ancillary?: string}) => {

	return (
		<View style={localeStyles.container}>
			<Text style={localeStyles.textKey}>{title}: </Text>
			<Text style={localeStyles.textValue}>{value}</Text>
			{ancillary ? <Text style={localeStyles.textValue}> {ancillary}</Text> : undefined}
		</View>
	);
};

export { FieldView };

const localeStyles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		paddingBottom: 4,
	},
	textKey: {
		fontSize: 14,
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 0,
	},
	textValue: {
		fontSize: 14,
		fontStyle: 'normal',
		letterSpacing: 0,
		color: '#808080',
	},
});
