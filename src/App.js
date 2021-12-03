import './App.css';
import { useState } from 'react';

function App() {
	const [showEvents, setShowEvents] = useState(true);

	const [events, setEvents] = useState([
		{ title: 'Mario bash boy', id: 1 },
		{ title: 'Luigi Will be your best friend', id: 2 },
		{ title: 'Peach is the princes of the game', id: 3 },
	]);

	console.log(showEvents);

	const handleClick = (id) => {
		// * Delete previous value of the updates state event (which will change in the future) from the State
		// ! Access the previous state first (Best practice)
		setEvents((prevEvents) => {
			return prevEvents.filter((event) => {
				return id !== event.id;
			});
		});
		console.log(id);
	};

	return (
		<div className='App'>
			{showEvents && ( // * Show event if true
				<div>
					<button onClick={() => setShowEvents(false)}> Hide Event</button>
				</div>
			)}

			{!showEvents && ( // * Hide event if false
				<div>
					<button onClick={() => setShowEvents(true)}>Show Events</button>
				</div>
			)}

			{showEvents && // ! Hide events if state condition is false
				events.map((event, i) => (
					<div key={event.id}>
						<h2>
							{i} - {event.title}
						</h2>
						<button onClick={() => handleClick(event.id)}>Delete Event</button>
					</div>
				))}
		</div>
	);
}

export default App;
