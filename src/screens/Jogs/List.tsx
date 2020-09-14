import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { HeaderLine } from '../../components/HeaderLine';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootNavigation';

import iconNothing from '../../assets/sadRoundedSquareEmoticon@2x.png';
import { IJog } from '../../model';
import { Item } from '../../components/Item';
import { Icon } from 'react-native-elements';
import { useScrollToTop, useIsFocused } from '@react-navigation/native';
import { DatePickerField } from '../../components/DatePicker';
import { PATH, ROUTE_DATA } from '../../helpers/path';

type Props = StackScreenProps<RootStackParamList, 'JogsScreen'>;

const ListJogs = ({navigation} : Props) => {
	const [jogs, setJogs] = useState<IJog[]>([]);
	const [isFilter, setIsFilter] = useState(false);
	const [dateStart, setDateStart] = useState<string>();
	const [dateEnd, setDateEnd] = useState<string>();
	const isFocused = useIsFocused();

	useEffect(() => {
		const getData = async () => {
			const response = await fetch(
				`${PATH}${ROUTE_DATA}/sync`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'Accept': 'application/json',
						'Authorization': 'Bearer 191c650ed307b11cf9d9d52b46f4e98035d0aaadf96ed5ebd218b76ceb5076b5'
					},
					credentials: 'include',
				 }
				).then(res => res.json())
				.then(res => {
					if(res.error_message) {
						console.log('Error!', res.error_message.error);
					} else if (res.response) {
						const data = res.response.jogs.map((item: IJog) => ({...item, date: item.date * 1000}));
						setJogs(data);
					} else {
						console.log('Error!', '');
					}
					return res;
				});
		};

		isFocused ? getData() : undefined;
	}, [isFocused]);

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
						<View style={localeStyles.nothingContainer}>
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
						? <View style={localeStyles.filterContainer}>
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
								size={35}
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
							data={jogs.filter((jog) => {
								return (!dateStart
								|| (jog.date * 100 >= new Date(dateStart).getTime())
								&& (!dateEnd || jog.date * 100 <= new Date(dateEnd).getTime()))
							})}
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
	emotyList: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	filterContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 25,
		backgroundColor: '#eaeaea',
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
	list: {
		flexDirection: 'column',
	},
	nothingContainer: {
		alignItems: 'center',
		paddingVertical: 10,
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
