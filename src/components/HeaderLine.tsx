import React, { useEffect, useState } from 'react';
import LogoGreen from '../assets/images/logoGreen@2x.png';
import LogoWhite from '../assets/images/logoWhite@2x.png';
import IconFilter from '../assets/images/filter@2x.png';
import IconMenu from '../assets/images/menu@2x.png';
import IconClose from '../assets/images/inconCloseGrey24.png';
import { useHistory, withRouter } from 'react-router-dom';
import { AppState, AppDispatch } from '../store';
import { connect } from 'react-redux';
import { RoutePath } from '../route/RootRouter';
import { JogsModule } from '../modules';

export interface HeaderComponentProps {
	logged: boolean;
	filtered: boolean;
	setFiltered: (value: boolean) => unknown;
}

const HeaderLineComponent: React.FunctionComponent<HeaderComponentProps> = (props) => {
	const { logged, filtered} = props;
	const history = useHistory();
	const [isMenuScreen, setIsMenuScreen] = useState(false);

	useEffect(() => {
		setIsMenuScreen(history.location.pathname === RoutePath.MENU);
	}, [props]);

	return (
		<div className='containerHeader' style={{ backgroundColor: isMenuScreen ? '#fff' : '#7ed321'}}>
			<img src={isMenuScreen ? LogoGreen : LogoWhite} className='image' />
			<div className='icons'>
				{
					history.location.pathname === RoutePath.JOGS
					? <div
							onClick={() => props.setFiltered(!filtered)}
							className='paddingRight'
						>
							<img src={IconFilter} className='iconMenu' />
						</div>
					: undefined
				}
				{
					logged
					? <div
							onClick={() => isMenuScreen ? history.goBack() : history.push('/menu')}
						>
							<img src={isMenuScreen ? IconClose : IconMenu} className='iconMenu' />
						</div>
					: undefined
				}
			</div>
		</div>
	);
};

const HeaderLine = connect(
	(state: AppState) => ({
		logged: state.auth.logged,
		filtered: state.jogs.filtered,
	}),
	(dispatch: AppDispatch) => ({
		setFiltered: (value: boolean) => dispatch(JogsModule.actions.setFiltered(value)),
	}),
)(HeaderLineComponent);

export default withRouter(HeaderLine);
