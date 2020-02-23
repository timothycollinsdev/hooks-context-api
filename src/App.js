import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';
import { UserContext } from './UserContext';

function App() {
	const [value, setValue] = useState('hello Hi');
	return (
		<UserContext.Provider value={{ value, setValue }}>
			<div className='App'>
				<User />
			</div>
		</UserContext.Provider>
	);
}

export default App;
