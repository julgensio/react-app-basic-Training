import './App.css';
import { useState } from 'react';

function App() {
	const [name, setName] = useState('mario');
	const [events, setEvents] = useState([
		{ title: 'Mario bash boy', id: 1 },
		{ title: 'Luigi Will be your best friend', id: 2 },
		{ title: 'Peach is the princes of the game', id: 3 },
	]);

	const handleClick = () => {
		setName('Luigi');
		console.log(name);
	};

	return (
		<div className='App'>
			<h1>My name is {name}</h1>
			<button onClick={handleClick}> Change name</button>

			{events.map((event, i) => (
				<div key={event.id} class>
					<h2>
						{i} - {event.title}
					</h2>
				</div>
			))}
		</div>
	);
}

export default App;
