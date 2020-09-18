import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/menu.css';

const Menu: React.FunctionComponent<{}> = (props) => {

	const list = [
		{name: 'JOGS', navigate: '/jogs'},
		{name: 'INFO', navigate: '/info'},
		{name: 'CONTACT US', navigate: '/menu'},
	]

	return (
		<div className='containerMenu'>
			<div className='list'>
				{
					list.map((item, idx) => {
						return <Link
							to={item.navigate}
							key={idx}
							className='button'
						>
							<div className='item' style={{color: idx % 2 === 0 ? '#000': '#7ed321'}}>{item.name}</div>
						</Link>
					})
				}
			</div>
		</div>
	);
};

export default Menu;
