import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import LogoGreen from '../assets/logoGreen@2x.png';
import LogoWhite from '../assets/logoWhite@2x.png';

const HeaderLine = ({isMenuScreen, onPress, ancillaryOnPress}: {isMenuScreen: boolean,  onPress: () => void, ancillaryOnPress?: () => void}) => {

	return (
		<View style={[localeStyles.container, { backgroundColor: isMenuScreen ? '#fff' : '#7ed321'}]}>
			<Image source={isMenuScreen ? LogoGreen : LogoWhite} style={localeStyles.image} />
			<View style={localeStyles.icons}>
				{
					ancillaryOnPress
					? <TouchableOpacity
							onPress={ancillaryOnPress}
							style={localeStyles.padding}
						>
							<Icon type='antdesign' name='filter' size={30} color={isMenuScreen ? '#888' : '#fff'} />
						</TouchableOpacity>
					: undefined
				}
				<TouchableOpacity
					onPress={onPress}
				>
					<Icon name={isMenuScreen ? 'close' : 'menu'} size={30} color={isMenuScreen ? '#888' : '#fff'} />
				</TouchableOpacity>
			</View>
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
	icons: {
		display: 'flex',
		flexDirection: 'row',
	},
	padding: {
		paddingRight: 40,
	},
	image: {
		height: 37,
		width: 98,
		resizeMode: 'contain',
	},
});
