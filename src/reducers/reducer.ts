import { AuthModule, JogsModule } from "../modules";

export const reducers = {
  auth: AuthModule.reducer,
  jogs: JogsModule.reducer,
};
