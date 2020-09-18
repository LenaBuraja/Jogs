import { createModule } from "../helpers";
import { IJog } from '../model';

export type JogsModuleState = {
	jogs: IJog[];
	filtered: boolean;
 };

export interface JogsModulePayloads {
	setJogs: IJog[];
	newJog: IJog;
	updateJog: IJog;
	setFiltered: boolean;
}

export const JogsModule = createModule<JogsModuleState, JogsModulePayloads>({
  name: "jogs",
  initialState: { jogs: [] as IJog[], filtered: false },
  reducers: { 
		setJogs: (state, { payload }) => {
			state.jogs = payload;
		 },
		newJog: (state, { payload }) => {
			state.jogs = [...state.jogs, payload];
		 },
		updateJog: (state, { payload }) => {
			const idx = state.jogs.findIndex((jog: IJog) => jog.id === payload.id);
			state.jogs = [...state.jogs.slice(0, idx),
               payload,
              ...state.jogs.slice(idx + 1)];
		 },
		 setFiltered: (state, { payload }) => {
			 state.filtered = payload;
		 }
   },
});
