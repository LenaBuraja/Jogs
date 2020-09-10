import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Login } from '../screens/Login';
import { ListJogs } from '../screens/Jogs/List';
import { Info } from '../screens/Info';
import { Menu } from '../screens/Menu';
import { CreateJogs } from '../screens/Jogs/CreateOrUpdate';
import { IJog } from '../model';

export type RootStackParamList = {
	LoginScreen: undefined;
	JogsScreen: undefined;
	CreateJogsScreen: {
		jog?: IJog;
	};
	InfoScreen: undefined;
	MenuScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
	 <Stack.Navigator
		initialRouteName="LoginScreen"
		screenOptions={{ headerShown: false }}
	>
      <Stack.Screen
        key="Login"
        name="LoginScreen"
		  component={Login}
        options={{ title: 'Login' }}
      />
      <Stack.Screen
        key="Jogs"
        name="JogsScreen"
        component={ListJogs}
        options={{ title: 'Jogs' }}
      />
      <Stack.Screen
			key="CreateJogs"
			name="CreateJogsScreen"
			component={CreateJogs}
			options={{ title: 'Create/Update' }}
		/>
      <Stack.Screen
			key="Info"
			name="InfoScreen"
			component={Info}
			options={{ title: 'Info' }}
		/>
      <Stack.Screen
			key="Menu"
			name="MenuScreen"
			component={Menu}
			options={{ title: 'Menu' }}
		/>
    </Stack.Navigator>
  );
};

export default RootNavigator;
