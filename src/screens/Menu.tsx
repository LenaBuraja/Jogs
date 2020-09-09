import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { HeaderLine } from '../components/HeaderLine';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootNavigation';

type Props = StackScreenProps<RootStackParamList, 'MenuScreen'>;

const Menu = ({navigation} : Props) => {

	return (
		<View style={localeStyles.container}>
			<HeaderLine isMenuScreen={true} onPress={() => navigation.goBack()} />
			<Text>Menu</Text>
		</View>
	);
};

export { Menu };

const localeStyles = StyleSheet.create({
	container: {
		padding:0,
	},
});
