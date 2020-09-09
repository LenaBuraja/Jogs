import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { HeaderLine } from '../components/HeaderLine';
import { RootStackParamList } from '../navigation/RootNavigation';
import { StackScreenProps } from '@react-navigation/stack';

import BearHead from '../assets/bearFace@2x.png';

type Props = StackScreenProps<RootStackParamList, 'LoginScreen'>;

const Login = ({navigation} : Props) => {

	return (
		<>
			<HeaderLine isMenuScreen={false} onPress={() => navigation.navigate('MenuScreen')} />
			<View style={localeStyles.container}>
				<Image source={BearHead} style={localeStyles.image} />
				<TouchableOpacity
					style={localeStyles.button}
					onPress={() => navigation.navigate('JogsScreen')}
				>
					<Text style={localeStyles.text}>Let me in</Text>
				</TouchableOpacity>
			</View>
		</>
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
	image: {
		height: 160,
		width: 150,
		resizeMode: 'contain',
	},
	container: {
		flex: 1,
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		backgroundColor: '#fff'
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
