import { PATH, ROUTE_AUTH } from '../helpers';
import { IResponse, IUser } from '../model';

export const checkUser = async(): Promise<IResponse<IUser>> => {
	const tocken = await localStorage.getItem('Jogs/Authorization');

	return await fetch(
		`${PATH}${ROUTE_AUTH}/user`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': tocken !== null ? tocken : '',
			},
			credentials: 'include',
		}).then(res => res.json());
};

export const login = async(): Promise<IResponse<{access_token: string, token_type: string}>> => {
	return await fetch(
		`${PATH}${ROUTE_AUTH}/uuidLogin`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
			credentials: 'include',
			body: JSON.stringify({
				uuid: 'hello'
			}),
		}).then(res => res.json());
};
