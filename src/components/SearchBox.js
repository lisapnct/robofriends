import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<div className='sticky pb3'>
			<h1 className='f2 washed-green'>Robofriends</h1>
				<input 
					className='pa2 ba br2 b--light-green bg-washed-blue'
					type='search' 
					placeholder='find a robot'
					onChange = {searchChange}
				/>
		</div>
	);
}

export default SearchBox;