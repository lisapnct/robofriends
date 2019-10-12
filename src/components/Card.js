import React from 'react';

const Card = ({id, name, email}) => {
	return (
		<div className ='tc bg-washed-green dark-gray dib br3 pa3 ma2 grow bw2 shadow-3'>
			<img src={`https://robohash.org/${id}?size=200x200`} alt='robot'/>
			<div>
				<h2 className='f5'>{name}</h2>
				<p className='f7'>{email}</p>
			</div>
		</div>
		);
}

export default Card;
