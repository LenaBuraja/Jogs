import React, { useState, useEffect } from 'react';
import { Item } from '../../components';
import { DatePickerField } from '../../components';

import iconNothing from '../../assets/images/sadRoundedSquareEmoticon@2x.png';
import iconClose from '../../assets/images/cancel@2x.png';
import iconAdd from '../../assets/images/add@2x.png';
import { IJog } from '../../model';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppDispatch, AppState } from '../../store';
import { actions } from '../../actions';
import { JogsModule } from '../../modules';

export interface ListJogsComponentProps {
	updateJogs: () => unknown;
	setFiltered: (value: boolean) => unknown;
	jogs: IJog[];
	filtered: boolean;
 }

const ListJogsComponent: React.FunctionComponent<ListJogsComponentProps> = (props) => {
	const { jogs, filtered } = props;
	const [dateStart, setDateStart] = useState<string>();
	const [dateEnd, setDateEnd] = useState<string>();

	useEffect(() => {
		props.updateJogs();
	}, [props]);
 
	const renderItem = ({jog}: {jog: IJog}) => (<Item key={jog.id} item={jog} />);

	return (
		<>
			<div className='containerList'>
				{
					jogs.length === 0
					? <div className='listJogs emotyList'>
						<div className='nothingContainer'>
							<img src={iconNothing} className='imageNothing' alt='' />
							<div className='textNothing colorGrey paddingTop30'>Nothing is there</div>
						</div>
						<Link
							className='buttonCreate'
							to='/jogs/new'
						>
							<div className='textButtonCreate'>Create your jog first</div>
						</Link>
					</div>
					: <>
						{
							filtered
							? <div className='filterContainer'>
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
								<img
									src={iconClose}
									onClick={() => {
										setDateStart(undefined);
										setDateEnd(undefined);
										props.setFiltered(false);
									}}
									className='iconCloseFilter'
									alt=''
								/>
							</div>
							: undefined
						}
						<Link
							to='/jogs/new'
							className='containerIconAdd'
						>
							<img
								src={iconAdd}
								className='iconAdd'
								alt=''
							/>
						</Link>
						{
							jogs.filter((jog) => {
								return ((!dateStart
								|| jog.date >= new Date(dateStart).getTime())
								&& (!dateEnd || jog.date <= new Date(dateEnd).getTime()))
							}).map(jog => renderItem({jog}))
						}
						
					</>
				}
			</div>
		</>
	);
};

const ListJogs = connect(
	(state: AppState) => ({
		jogs: state.jogs.jogs,
		filtered: state.jogs.filtered
	}),
	(dispatch: AppDispatch) => ({
		updateJogs: () => dispatch(actions.jogs.updateJogs()),
		setFiltered: (value: boolean) => dispatch(JogsModule.actions.setFiltered(value))
	}),
)(ListJogsComponent);

export default ListJogs;
