import { AppDispatch } from "../store";
import { AuthModule } from '../modules';
import { requests } from '../requests';

export const checkAuth = () => async (dispatch: AppDispatch) => {
	try {
	  const profile = await requests.auth.checkUser();
	  dispatch(AuthModule.actions.setLogged(!profile.error_message));
	} catch (error) {}
 };
 
export const login = () => async (dispatch: AppDispatch): Promise<boolean> => {
	try {
		dispatch(AuthModule.actions.setLoginProcess(true));
		const profile = await requests.auth.login();
		const logged = !profile.error_message;
		if (logged) await localStorage.setItem('Jogs/Authorization', `${profile?.response?.token_type} ${profile?.response?.access_token}`);
		dispatch(AuthModule.actions.setLogged(logged));
		return logged;
	} catch (error) {
		dispatch(AuthModule.actions.setLoginError(error.message));
		return false;
	} finally {
		dispatch(AuthModule.actions.setLoginProcess(false));
	}
};

export const init = () => (dispatch: AppDispatch) => dispatch(checkAuth());
