import { useState, useEffect } from 'react';
export const fetchUser = user => {
	const [state, setState] = useState({ name: 'ashad', address: 'something' });

	useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(res => setState({ name: res.name }));
	}, []);

	return state;
};
