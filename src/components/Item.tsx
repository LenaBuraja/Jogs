import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

import IconRun from '../assets/icon@2x.png';
import { IJog } from '../model';
import { FieldView } from './FieldView';

const Item = ({item, onPress}: {item: IJog, onPress: () => void}) => {

	return (
		<TouchableOpacity
			style={localeStyles.button}
			onPress={onPress}
		>
			<Image source={IconRun} style={localeStyles.image} />
			<View style={localeStyles.container}>
				<Text style={localeStyles.text}>{item.date}</Text>
				<FieldView title={'Speed'} value={(item.distance/item.time).toFixed(2)}/>
				<FieldView title={'Distance'} value={item.distance} ancillary={'km'}/>
				<FieldView title={'Time'} value={item.time} ancillary={'min'}/>
			</View>
		</TouchableOpacity>
	);
};

export { Item };

const localeStyles = StyleSheet.create({
	button: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		padding: 20,
		borderBottomColor: '#b0b0b0',
		borderBottomWidth: 1,
	},
	image: {
		height: 87,
		width: 87,
		resizeMode: 'contain',
	},
	container: {
	},
	text: {
		paddingBottom: 10,
		fontSize: 14,
		fontStyle: 'normal',
		letterSpacing: 0,
		color: '#808080',
	},
});
