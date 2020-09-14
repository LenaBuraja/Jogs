import React, { useCallback } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { HeaderLine } from '../components/HeaderLine';
import { RootStackParamList } from '../navigation/RootNavigation';
import { StackScreenProps } from '@react-navigation/stack';

import BearHead from '../assets/bearFace@2x.png';
import { PATH, ROUTE_AUTH } from '../helpers/path';

type Props = StackScreenProps<RootStackParamList, 'LoginScreen'>;

const Login = ({navigation} : Props) => {

	const login = useCallback(async () => {
		await fetch(
			`${PATH}${ROUTE_AUTH}/uuidLogin`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json',
				},
				credentials: 'include',
				body: JSON.stringify({
					uuid: 'hello'
				}),
			}).then(res => res.json())
			.then(res => {
				if(res.error_message) {
					console.log('Error!', res.error_message.error);
				} else if (res.response) {
					localStorage.setItem('Jogs/Authorization', `${res.response.token_type} ${res.response.access_token}`);
					navigation.navigate('JogsScreen');
				} else {
					console.log('Error!', '');
				}
				return res;
			});
	}, []);

	return (
		<>
			<HeaderLine isMenuScreen={false} onPress={() => navigation.navigate('MenuScreen')} />
			<View style={localeStyles.container}>
				<Image source={BearHead} style={localeStyles.image} />
				<TouchableOpacity
					style={localeStyles.button}
					onPress={login}
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
		fontSize: 18,
		fontWeight: 'bold',
		fontStyle: 'normal',
		letterSpacing: 0,
		color: '#e990f9',
		textAlign: 'center',
	},
});
