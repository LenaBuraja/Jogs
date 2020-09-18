import React, { FunctionComponent, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'; 
import { Login, Info, Menu, ListJogs, CreateOrUpdateJog } from '../screens';
import { connect } from 'react-redux';
import { AppState } from '../store';
import App from '../screens/App';

export enum RoutePath {
	INDEX = "/",
	LOGIN = "/login",
	MENU = "/menu",
	INFO = "/info",
	JOGS = "/jogs",
	CREATE_JOG = "/jogs/:id?",
}

const AuthRouteComponent = (props: { isLogged: boolean; loggedOnly?: boolean } & Route["props"]): JSX.Element => {
	const { isLogged, loggedOnly, ...rest } = props;

	if (loggedOnly && !isLogged) return <Redirect to={RoutePath.LOGIN} />;
	return <Route {...rest} />;
 };
 
 const AuthRoute = connect((state: AppState) => ({ isLogged: !!state.auth.logged }))(AuthRouteComponent);
 
 const RootRouter: FunctionComponent = () => (
	<App>
		<Switch>
			<Route exact path={RoutePath.INDEX} component={() => <Login />} />
			<AuthRoute exact path={RoutePath.LOGIN} component={() => <Login />} />
			<AuthRoute exact path={RoutePath.MENU} loggedOnly component={() => <Menu />} />
			<AuthRoute exact path={RoutePath.INFO} loggedOnly component={() => <Info />} />
			<AuthRoute exact path={RoutePath.JOGS} loggedOnly component={() => <ListJogs />} />
			<AuthRoute path={RoutePath.CREATE_JOG} loggedOnly component={() => <CreateOrUpdateJog />} />
		</Switch>
	</App>
 );

export default RootRouter;
