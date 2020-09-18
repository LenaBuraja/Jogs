import { PATH, ROUTE_DATA } from '../helpers';
import { IJog, IResponse, IUser } from '../model';

export const getJogs = async(): Promise<IResponse<{ jogs: IJog[]; users: IUser[] }>> => {
	const tocken = await localStorage.getItem('Jogs/Authorization');

	return await fetch(
		`${PATH}${ROUTE_DATA}/sync`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': tocken !== null ? tocken : '',
			},
			credentials: 'include',
		 }
		).then(res => res.json());
};

export const addJog = async({time, date, distance}: {time: number, date: string, distance: number}): Promise<IResponse<IJog>> => {
	const tocken = await localStorage.getItem('Jogs/Authorization');

	return await fetch(
		`${PATH}${ROUTE_DATA}/jog`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': tocken !== null ? tocken : '',
			},
			credentials: 'include',
			body: JSON.stringify({
				time,
				date,
				distance,
			}),
		}).then(res => res.json());
};

export const updateJog = async({jog}: {jog: IJog}): Promise<IResponse<IJog>> => {
	const tocken = await localStorage.getItem('Jogs/Authorization');

	return await fetch(
		`${PATH}${ROUTE_DATA}/jog`,
		{
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': tocken !== null ? tocken : '',
			},
			credentials: 'include',
			body: JSON.stringify({
				time: jog.time,
				date: new Date(jog.date).toISOString(),
				distance: jog.distance,
				jog_id: jog.id,
				user_id: jog.user_id,
			}),
		}).then(res => res.json());
};
