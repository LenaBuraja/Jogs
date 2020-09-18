import React, { useState } from 'react';
import '../assets/styles/login.css';

import BearHead from '../assets/images/bearFace@2x.png';
import { connect } from 'react-redux';
import { AppDispatch } from '../store';
import { actions } from '../actions';
import { Redirect } from 'react-router-dom';
import { RoutePath } from '../route/RootRouter';

export interface LoginComponentProps {
	login: () => Promise<boolean>;
 }

const LoginComponent: React.FunctionComponent<LoginComponentProps> = (props) => {

	const [redirect, setRedirect] = useState(false);

	if (redirect) return <Redirect to={RoutePath.JOGS} />;

	return (
		<>
			<div className='containerLogin'>
				<img src={BearHead} className='imageBear' />
					<div
						className='buttonLogin'
						onClick={async () => {
							const logged = await props.login();
							if (logged) setRedirect(true);
						}}
					>
						<div className='textLogin'>Let me in</div>
					</div>
			</div>
		</>
	);
};

const Login = connect(
	() => ({}),
	(dispatch: AppDispatch) => ({
		login: () => dispatch(actions.auth.login()),
	}),
)(LoginComponent);

export default Login;
