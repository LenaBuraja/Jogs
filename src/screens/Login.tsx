import React from 'react';
scimport { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { HeaderLine } from '../components/HeaderLine';
import { RootStackParamList } from '../navigation/RootNavigation';
import { StackScreenProps } from '@react-navigation/stack';

import BearHead from '../assets/bearFace@2x.png';

type Props = StackScreenProps<RootStackParamList, 'LoginScreen'>;

const Login = ({navigation} : Props) => {

	return (
		<View style={localeStyles.container}>
			<HeaderLine />
			<Image source={BearHead} style={{height: 100, resizeMode: 'contain'}} />
			<TouchableOpacity
				style={localeStyles.button}
				onPress={() => navigation.navigate('JogsScreen')}
			>
				<Text style={localeStyles.text}>Let me in</Text>
			</TouchableOpacity>
		</View>
	);
};

export { Login };

const localeStyles = StyleSheet.create({
	button: {
		width: 151,
		height: 60,
		borderRadius: 36,
		borderStyle: 'solid',
		borderWidth: 3,
		borderColor: '#e990f9',
		justifyContent: 'center',
	},
	container: {
		padding: 0,
	},
	text: {
		fontFamily: 'SFUIText',
		fontSize: 18,
		fontWeight: 'bold',
		fontStyle: 'normal',
		letterSpacing: 0,
		color: '#e990f9',
		textAlign: 'center',
	},
});
