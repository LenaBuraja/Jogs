import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { HeaderLine } from '../../components/HeaderLine';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootNavigation';
import { Icon } from 'react-native-elements';
import { Input } from '../../components/Input';
import { DatePickerField } from '../../components/DatePicker';
import { PATH, ROUTE_DATA } from '../../helpers/path';

type Props = StackScreenProps<RootStackParamList, 'CreateJogsScreen'>;

const CreateJogs = ({route, navigation} : Props) => {
	const [time, setTime] = useState<number>();
	const [distance, setDistance] = useState<number>();
	const [date, setDate] = useState<string>();
 
	useEffect(() => {
		if (route.params.jog) {
			setDate(new Date(route.params.jog.date).toISOString());
			setTime(route.params.jog.time);
			setDistance(route.params.jog.distance);
		}
	}, [route.params]);

	const createJog = useCallback(async () => {
		if(!date) {
			return;
		}

		await fetch(
			`${PATH}${ROUTE_DATA}/jog`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json',
					'Authorization': 'Bearer 191c650ed307b11cf9d9d52b46f4e98035d0aaadf96ed5ebd218b76ceb5076b5'
				},
				credentials: 'include',
				body: JSON.stringify({
					time,
					date: new Date(date).toISOString(),
					distance,
				}),
			}).then(res => res.json())
			.then(res => {
				if(res.error_message) {
					console.log('Error!', res.error_message.error);
				} else if (res.response) {
					navigation.navigate('JogsScreen');
				} else {
					console.log('Error!', '');
				}
				return res;
			});
	}, [date, time, distance, PATH, ROUTE_DATA]);

	const updateJog = useCallback(async () => {
		if(!date || !route.params.jog) {
			return;
		}

		await fetch(
			`${PATH}${ROUTE_DATA}/jog`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json',
					'Authorization': 'Bearer 191c650ed307b11cf9d9d52b46f4e98035d0aaadf96ed5ebd218b76ceb5076b5'
				},
				credentials: 'include',
				body: JSON.stringify({
					time,
					date: new Date(date).toISOString(),
					distance,
					jog_id: route.params.jog.id,
					user_id: route.params.jog.user_id,
				}),
			}).then(res => res.json())
			.then(res => {
				if(res.error_message) {
					console.log('Error!', res.error_message.error);
				} else if (res.response) {
					navigation.navigate('JogsScreen');
				} else {
					console.log('Error!', '');
				}
				return res;
			});
	}, [date, time, distance, PATH, ROUTE_DATA]);

	return (
		<>
			<HeaderLine isMenuScreen={false} onPress={() => navigation.navigate('MenuScreen')} />
			<View style={localeStyles.container}>
				<ScrollView>
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
						<DatePickerField label={'Date'} value={date} onChange={setDate} />
						<TouchableOpacity
							style={localeStyles.button}
							onPress={() => {
								if (time !== undefined && distance !== undefined && date && date !== '') {
									route.params.jog ? updateJog() : createJog();
								} else {
									Alert.alert('Warning!', 'Fill in all the fields.', [{ text: 'Close', onPress: () => ({}) }]);
								}
							}}
						>
							<Text style={localeStyles.text}>Save</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
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
