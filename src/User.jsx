import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const User = () => {
	const context = useContext(UserContext);
	console.log({ con: context });

	return (
		<div>
			{context.value}
			<button onClick={() => context.setValue('ashad nasim')}>Change</button>
		</div>
	);
};

export default User;
