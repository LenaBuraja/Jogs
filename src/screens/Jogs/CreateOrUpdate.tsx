import React, { useState, useEffect, useCallback } from 'react';
import { Input, DatePickerField } from '../../components';
import { PATH, ROUTE_DATA } from '../../helpers/path';
import { useParams, Link, useHistory, withRouter } from 'react-router-dom';
import IconClose from '../../assets/images/cancel@2x.png';
import { IJog } from '../../model';
import { connect } from 'react-redux';
import { AppState, AppDispatch } from '../../store';
import { actions } from '../../actions';

export interface CreateJogsComponentProps {
	updateJog: ({newJog}: {newJog: IJog}) => Promise<boolean>,
	addJog: ({time, date, distance}: {time: number, date: string, distance: number}) => Promise<boolean>,

	jogs: IJog[];
}

const CreateJogsComponent: React.FunctionComponent<CreateJogsComponentProps> = (props) => {
	const { id } = useParams();
	const history = useHistory();
	const [time, setTime] = useState<number>();
	const [distance, setDistance] = useState<number>();
	const [date, setDate] = useState<string>();
	const [user_id, setUserId] = useState<string>();

	useEffect(() => {
		const jog = props.jogs.find(item => item.id === Number(id));
		if (jog) {
			setDate(new Date(jog.date).toISOString());
			setTime(jog.time);
			setDistance(jog.distance);
			setUserId(jog.user_id);
		}
	}, [id, props.jogs]);

	const createJog = useCallback(async () => {
		if(!date && time === undefined && distance === undefined) {
			return;
		}

		return await props.addJog({
			time: time ? time : 0,
			date: date ? new Date(date).toISOString() : '',
			distance: distance ? distance : 0
		}) ? history.goBack() : undefined;
	}, [date, time, distance, PATH, ROUTE_DATA]);

	const updateJog = useCallback(async () => {
		if(!date || id === undefined) {
			return;
		}

		return await props.updateJog({
			newJog: {
				id: id,
				time: time ? time : 0,
				distance: distance ? distance : 0,
				date: date ? new Date(date).getTime() : 0,
				user_id: user_id ? user_id : '0',
			}
		}) ? history.goBack() : undefined;
	}, [date, time, distance, PATH, ROUTE_DATA]);

	return (
		<>
			<div className='container'>
				<div className='form'>
					<Link to='/jogs' className='icon' >
						<img src={IconClose} />
					</Link>
					<Input
						label='Distance'
						//value={distance ?? ''}
						value={distance ? distance : ''}
						onChange={(value) => value === '' ? setDistance(undefined) : !Number.isNaN(Number(value)) ? setDistance(Number(value)) : undefined }
					/>
					<Input
						label='Time'
						value={time ? time : ''}
						onChange={(value) => value === '' ? setTime(undefined) : !Number.isNaN(Number(value)) ? setTime(Number(value)) : undefined }
					/>
					<DatePickerField label={'Date'} value={date} onChange={setDate} />
					<div
						className='buttonSave'
						onClick={() => {
							if (time !== undefined && distance !== undefined && date && date !== '') {
								id !== undefined && !!Number(id) ? updateJog() : createJog();
							} else {
								alert('Warning! Fill in all the fields.');
							}
						}}
					>
						<div className='textSave'>Save</div>
					</div>
				</div>
			</div>
		</>
	);
};

const CreateJogs = connect(
	(state: AppState) => ({
		jogs: state.jogs.jogs,
	}),
	(dispatch: AppDispatch) => ({
		updateJog: ({newJog}: {newJog: IJog}) => dispatch(actions.jogs.updateJog({newJog})),
		addJog: ({time, date, distance}: {time: number, date: string, distance: number}) => dispatch(actions.jogs.newJog({time, date, distance})),
	}),
)(CreateJogsComponent);

export default withRouter(CreateJogs);
