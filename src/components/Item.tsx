import React from 'react';

import IconRun from '../assets/images/icon@2x.png';
import { IJog } from '../model';
import { FieldView } from './';
import { Link } from 'react-router-dom';

const Item = ({item}: {item: IJog}) => {
	const date = new Date(item.date);

	return (
		<Link
			to={`/jogs/${item.id}`}
			className='selectJog'
		>
				<img src={IconRun} className='imageJog' />
				<div>
					<div className='containerItem'>
						<div className='textDate'>{`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`}</div>
						<FieldView title={'Speed'} value={(item.distance/item.time).toFixed(2)}/>
						<FieldView title={'Distance'} value={item.distance} ancillary={'km'}/>
						<FieldView title={'Time'} value={item.time} ancillary={'min'}/>
					</div>
				</div>
		</Link>
	);
};

export default Item;
