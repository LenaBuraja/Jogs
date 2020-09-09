import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import LogoGreen from '../assets/logoGreen@2x.png';
import LogoWhite from '../assets/logoWhite@2x.png';

const HeaderLine = ({isMenuScreen, onPress}: {isMenuScreen: boolean, onPress: () => void}) => {

	return (
		<View style={[localeStyles.container, { backgroundColor: isMenuScreen ? '#fff' : '#7ed321'}]}>
			<Image source={isMenuScreen ? LogoGreen : LogoWhite} style={localeStyles.image} />
			<TouchableOpacity
				onPress={onPress}
			>
				<Icon name={isMenuScreen ? 'close' : 'menu'} size={24} color={isMenuScreen ? '#888' : '#fff'} />
			</TouchableOpacity>
		</View>
	);
};

export { HeaderLine };

const localeStyles = StyleSheet.create({
	container: {
		paddingHorizontal: 25,
		paddingVertical: 20,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	image: {
		height: 37,
		width: 98,
		resizeMode: 'contain',
	},
});
