import { createModule } from "../helpers";

export type AuthModuleState = {
  login: { process: boolean; error: string | null };
  logged: boolean;
};

export interface AuthModulePayloads {
  setLoginProcess: boolean;
  setLoginError: string | null;
  setLogged: boolean;
}

export const AuthModule = createModule<AuthModuleState, AuthModulePayloads>({
  name: "auth",
  initialState: {
	 login: { process: false, error: null },
	 logged: false,
  },
  reducers: {
    setLoginProcess: (state, { payload }) => {
      state.login.process = payload;
    },
    setLoginError: (state, { payload }) => {
      state.login.error = payload;
	 },
	 setLogged: (state, { payload }) => {
		state.logged= payload;
	 },
  },
});
