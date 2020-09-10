import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { HeaderLine } from '../../components/HeaderLine';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootNavigation';

import iconNothing from '../../assets/sadRoundedSquareEmoticon@2x.png';
import { IJog } from '../../model';
import { Item } from '../../components/Item';
import { Icon } from 'react-native-elements';

type Props = StackScreenProps<RootStackParamList, 'JogsScreen'>;

const ListJogs = ({navigation} : Props) => {
	const jogs: IJog[] = [
		{
			id: '0',
			date: '09.09.2020',
			speed: 15,
			distance: 10,
			time: 60,
		},
		{
			id: '1',
			date: '09.09.2020',
			speed: 15,
			distance: 10,
			time: 60,
		}
	];

	return (
		<>
			<HeaderLine isMenuScreen={false} onPress={() => navigation.navigate('MenuScreen')} />
			<View style={localeStyles.container}>
				{
					jogs.length === 0
					? <View style={[localeStyles.list, localeStyles.emotyList]}>
						<View style={localeStyles.list}>
							<Image source={iconNothing} style={localeStyles.image} />
							<Text style={[localeStyles.text, localeStyles.colorGrey, localeStyles.paddingTop30]}>Nothing is there</Text>
						</View>
						<TouchableOpacity
							style={localeStyles.button}
							onPress={() => navigation.navigate('JogsScreen')}
						>
							<Text style={localeStyles.textButton}>Create your jog first</Text>
						</TouchableOpacity>
					</View>
					: <ScrollView contentContainerStyle={[localeStyles.emotyList, localeStyles.placeIcon]}>
						<View style={localeStyles.list}>
							{
								jogs.map(jog => {
									return <Item item={jog} onPress={() => {}}/>
								})
							}
						</View>
						<Icon
							name={'add-circle-outline'}
							size={47}
							color={'#7ed321'}
							onPress={() => navigation.navigate('CreateJogsScreen')}
							containerStyle={localeStyles.icon}
						/>
					</ScrollView>
				}
			</View>
		</>
	);
};

export { ListJogs };

const localeStyles = StyleSheet.create({
	button: {
		height: 60,
		borderRadius: 36,
		borderStyle: 'solid',
		borderWidth: 3,
		borderColor: '#e990f9',
		justifyContent: 'center',
	},
	colorGrey: {
		color: '#b0b0b0',
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	icon: {
		padding: 30,
		alignSelf: 'flex-end',
	},
	image: {
		height: 85,
		width: 85,
		resizeMode: 'contain',
	},
	emotyList: {
		flex: 1,
	},
	list: {
		flexDirection: 'column',
	},
	paddingTop30: {
		paddingTop: 30,
	},
	placeIcon: {
		justifyContent: 'space-between',
	},
	text: {
		fontSize: 24,
		fontWeight: "normal",
		fontStyle: "normal",
		lineHeight: 29,
		letterSpacing: 0,
	},
	textButton: {
		paddingHorizontal: 34,
		fontSize: 18,
		fontWeight: 'bold',
		fontStyle: 'normal',
		letterSpacing: 0,
		color: '#e990f9',
		textAlign: 'center',
	},
});
