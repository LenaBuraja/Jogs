import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { HeaderLine } from '../../components/HeaderLine';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootNavigation';

import iconNothing from '../../assets/sadRoundedSquareEmoticon@2x.png';
import { IJog } from '../../model';
import { Item } from '../../components/Item';
import { Icon } from 'react-native-elements';
import { useScrollToTop } from '@react-navigation/native';
import { DatePickerField } from '../../components/DatePicker';

type Props = StackScreenProps<RootStackParamList, 'JogsScreen'>;

const ListJogs = ({navigation} : Props) => {
	const jogs: IJog[] = [
		{
			id: '0',
			date: '09.09.2020',
			distance: 10,
			time: 60,
		},
		{
			id: '1',
			date: '08.09.2020',
			distance: 10,
			time: 60,
		},
		{
			id: '2',
			date: '2.09.2020',
			distance: 10,
			time: 60,
		},
		{
			id: '3',
			date: '09.02.2020',
			distance: 10,
			time: 60,
		},
		{
			id: '4',
			date: '09.09.2020',
			distance: 10,
			time: 60,
		},
		{
			id: '5',
			date: '09.12.2020',
			distance: 10,
			time: 60,
		},
		{
			id: '6',
			date: '09.10.2020',
			distance: 10,
			time: 60,
		},
		{
			id: '7',
			date: '09.09.2018',
			distance: 10,
			time: 60,
		}
	];

	const [isFilter, setIsFilter] = useState(false);
	const [dateStart, setDateStart] = useState<string>();
	const [dateEnd, setDateEnd] = useState<string>();

	const ref = React.useRef<FlatList<IJog>>(null);
	useScrollToTop(ref);
 
	const renderItem = ({jog}: {jog: IJog}) => (<Item item={jog} onPress={() => navigation.navigate('CreateJogsScreen', {jog})}/>);

	return (
		<>
			<HeaderLine
				isMenuScreen={false}
				onPress={() => navigation.navigate('MenuScreen')}
				ancillaryOnPress={() => {
					setIsFilter(true);
				}}
			/>
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
					: <>
					{
						isFilter
						? <View>
							<DatePickerField
								label='Date from'
								value={dateStart}
								onChange={setDateStart}
							/>
							<DatePickerField
								label='Date to'
								value={dateEnd}
								onChange={setDateEnd}
							/>
							<Icon
								name={'close'}
								size={47}
								color={'#7ed321'}
								onPress={() => {
									setDateStart(undefined);
									setDateEnd(undefined);
									setIsFilter(false)
								}}
							/>
						</View>
						: undefined
					}
						<FlatList
							ref={ref}
							data={jogs.filter((jog) =>
								{
									const currDate = (jog.date).split('.').map((item) => Number(item)).reverse();
									const currDateStart = dateStart ? (dateStart).split('.').map((item) => Number(item)).reverse() : undefined;
									const currDateEnd = dateEnd ? (jog.date).split('.').map((item) => Number(item)).reverse() : undefined;
									return (!currDateStart
									|| (new Date(currDate[0], currDate[1], currDate[2]).getTime() >= new Date(currDateStart[0], currDateStart[1], currDateStart[2]).getTime())
									&& (!currDateEnd || new Date(currDate[0], currDate[1], currDate[2]).getTime() <= new Date(currDateEnd[0], currDateEnd[1], currDateEnd[2]).getTime()))
								})
							}
							keyExtractor={(_, i) => String(i)}
							renderItem={({item}) => renderItem({jog: item})}
							ListEmptyComponent={<Text>Ничего не выбрано</Text>}
						/>
						<View style={localeStyles.icon}>
							<Icon
								name={'add-circle-outline'}
								size={47}
								color={'#7ed321'}
								onPress={() => navigation.navigate('CreateJogsScreen', {})}
							/>
						</View>
					</>
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
		paddingBottom: 30,
		paddingRight: 30,
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
