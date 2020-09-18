import { AppDispatch } from "../store";
import { requests } from '../requests';
import { JogsModule } from '../modules';
import { IJog } from '../model';

export const updateJogs = () => async (dispatch: AppDispatch) => {
	try {
		const jogs = await requests.jogs.getJogs();
		if (!jogs.error_message && jogs.response && jogs.response.jogs) {
			dispatch(JogsModule.actions.setJogs(jogs.response.jogs.map((jog) => ({...jog, date: jog.date * 1000}))));
		}
	} catch (error) {}
 };

 export const newJog = ({time, date, distance}: {time: number, date: string, distance: number}) => async (dispatch: AppDispatch): Promise<boolean> => {
	try {
		const jog = await requests.jogs.addJog({time, date, distance});
		if (jog.error_message && !jog.response) {
			return false;
		}
		dispatch(JogsModule.actions.newJog(jog.response as IJog));
		return true
	} catch (error) {
		return false;
	}
 };

 export const updateJog = ({newJog}: {newJog: IJog}) => async (dispatch: AppDispatch): Promise<boolean> => {
	try {
		const jog = await requests.jogs.updateJog({jog: newJog});
		if (jog.error_message && !jog.response) {
			return false;
		}
		dispatch(JogsModule.actions.updateJog(jog.response as IJog));
		return true;
	} catch (error) {
		return false;
	}
 };
