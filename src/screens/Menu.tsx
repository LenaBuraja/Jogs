import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { HeaderLine } from '../components/HeaderLine';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootNavigation';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = StackScreenProps<RootStackParamList, 'MenuScreen'>;

const Menu = ({navigation} : Props) => {

	const list = [
		{name: 'JOGS', navigate: 'JogsScreen'},
		{name: 'INFO', navigate: 'InfoScreen'},
		{name: 'CONTACT US', navigate: 'MenuScreen'},
	]

	return (
		<View style={localeStyles.container}>
			<HeaderLine isMenuScreen={true} onPress={() => navigation.goBack()} />
			<View style={localeStyles.list}>
				{
					list.map((item, idx) => {
						return <TouchableOpacity
							key={idx}
							onPress={() => navigation.navigate(item.navigate)}
							style={localeStyles.button}
						>
							<Text style={[localeStyles.item, {color: idx % 2 === 0 ? '#000': '#7ed321'}]}>{item.name}</Text>
						</TouchableOpacity>
					})
				}
			</View>
		</View>
	);
};

export { Menu };

const localeStyles = StyleSheet.create({
	button: {
		paddingVertical: 20,
		alignItems: 'center',
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	item: {
		fontSize: 25,
		fontWeight: 'bold',
		fontStyle: 'normal',
		letterSpacing: 0,
	},
	list: {
		paddingTop: 50,
	},
});
