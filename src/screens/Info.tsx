import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { HeaderLine } from '../components/HeaderLine';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootNavigation';

type Props = StackScreenProps<RootStackParamList, 'InfoScreen'>;

const Info = ({navigation} : Props) => {

	return (
		<>
			<HeaderLine isMenuScreen={false} onPress={() => navigation.navigate('MenuScreen')} />
			<View style={localeStyles.container}>
				<Text style={localeStyles.title}>INFO</Text>
				<Text style={localeStyles.text}>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
					when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
					It has survived not only five centuries, but also the leap into electronic typesetting, 
					remaining essentially unchanged. 
					It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
					and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</Text>
				<Text style={localeStyles.text}>
					It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
					The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
					content here', making it look like readable English.
				</Text>
			</View>
		</>
	);
};

export { Info };

const localeStyles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 25,
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 25,
		fontWeight: "bold",
		fontStyle: "normal",
		letterSpacing: 0,
		color: '#7ed321',
	},
	text: {
		paddingBottom: 50,
		fontSize: 12,
		fontWeight: "normal",
		fontStyle: "normal",
		lineHeight: 24,
		letterSpacing: 0,
	},
});
