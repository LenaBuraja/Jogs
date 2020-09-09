import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { HeaderLine } from '../../components/HeaderLine';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootNavigation';

type Props = StackScreenProps<RootStackParamList, 'JogsScreen'>;

const ListJogs = ({navigation} : Props) => {

	return (
		<View style={localeStyles.container}>
			<HeaderLine isMenuScreen={false} onPress={() => navigation.navigate('MenuScreen')} />
			<Text>List of jog</Text>
		</View>
	);
};

export { ListJogs };

const localeStyles = StyleSheet.create({
	container: {
		padding:0,
	},
});
