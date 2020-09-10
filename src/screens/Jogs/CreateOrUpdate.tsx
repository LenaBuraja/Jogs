import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { HeaderLine } from '../../components/HeaderLine';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootNavigation';
import { Icon } from 'react-native-elements';
import { Input } from '../../components/Input';

type Props = StackScreenProps<RootStackParamList, 'CreateJogsScreen'>;

const CreateJogs = ({route, navigation} : Props) => {
	const [time, setTime] = useState<number>();
	const [distance, setDistance] = useState<number>();
	const [date, setDate] = useState<string>();
	const [speed, setSpeed] = useState<number>();

	useEffect(() => {
		if (route.params.jog) {
			setDate(route.params.jog.date);
			setTime(route.params.jog.time);
			setDistance(route.params.jog.distance);
			setSpeed(route.params.jog.speed);
		}
	}, [route.params]);

	return (
		<>
			<HeaderLine isMenuScreen={false} onPress={() => navigation.navigate('MenuScreen')} />
			<View style={localeStyles.container}>
				<View style={localeStyles.form}>
					<Icon
						name={'close'}
						size={24}
						color={'#fff'}
						containerStyle={localeStyles.icon}
						onPress={() => navigation.goBack()}
					/>
					<Input
						label='Distance'
						value={distance ?? ''}
						onChange={(value) => value === '' ? setDistance(undefined) : !Number.isNaN(Number(value)) ? setDistance(Number(value)) : undefined }
					/>
					<Input
						label='Time'
						value={time ?? ''}
						onChange={(value) => value === '' ? setTime(undefined) : !Number.isNaN(Number(value)) ? setTime(Number(value)) : undefined }
					/>
					<Input
						label='Speed'
						value={speed ?? ''}
						onChange={(value) => value === '' ? setSpeed(undefined) : !Number.isNaN(Number(value)) ? setSpeed(Number(value)) : undefined }
					/>
					<Input
						label='Date'
						value={date ?? ''}
						onChange={setDate}
					/>
					<TouchableOpacity
						style={localeStyles.button}
						onPress={() => {
							if (speed !== undefined && time !== undefined && distance !== undefined && date && date !== '') {
								navigation.goBack();
							} else {
								Alert.alert('Warning!', 'Fill in all the fields.', [{ text: 'Close', onPress: () => ({}) }]);
							}
						}}
					>
						<Text style={localeStyles.text}>Save</Text>
					</TouchableOpacity>

				</View>
			</View>
		</>
	);
};

export { CreateJogs };

const localeStyles = StyleSheet.create({
	button: {
		borderRadius: 36,
		borderStyle: 'solid',
		borderWidth: 3,
		borderColor: '#fff',
		justifyContent: 'center',
		marginTop: 35,
		padding: 13,
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	form: {
		padding: 35,
		borderRadius: 29,
		backgroundColor: '#7ed321',
		margin: 10,
	},
	icon: {
		alignSelf: 'flex-end',
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
		fontStyle: 'normal',
		letterSpacing: 0,
		color: '#fff',
		textAlign: 'center',
	},
});
