import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';

function App() {
	const [showModal, setShowModal] = useState(true);
	const [showEvents, setShowEvents] = useState(true);

	const [events, setEvents] = useState([
		{ title: 'Mario bash boy', id: 1 },
		{ title: 'Luigi Will be your best friend', id: 2 },
		{ title: 'Peach is the princes of the game', id: 3 },
	]);

	const handleClick = (id) => {
		// * Delete previous value of the updates state event (which will change in the future) from the State
		// ! Access the previous state first (Best practice)
		setEvents((prevEvents) => {
			return prevEvents.filter((event) => {
				return id !== event.id;
			});
		});
	};

	// * Close or open Modal in state
	const handleClosed = () => {
		setShowModal((prevModal) => !prevModal);
	};

	const subtitle = 'This will be the prop title';

	return (
		<div className='App'>
			<Title title='This will be the title component' subtitle={subtitle} />
			<div className='btn'>
				<button onClick={() => setShowModal(true)}>Show modal</button>
			</div>
			{showEvents && ( // * Show event if true
				<div className='btn-event'>
					<button onClick={() => setShowEvents(false)}> Hide Event</button>
				</div>
			)}
			{!showEvents && ( // * Hide event if false
				<div>
					<button onClick={() => setShowEvents(true)}>Show Events</button>
				</div>
			)}

			{showEvents && ( // * Hide events if state condition is false
				<EventList events={events} handleClick={handleClick} />
			)}

			{showModal && (
				<Modal handleClosed={handleClosed} isSalesModel={true}>
					<h2>Terms of life</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus
						aliquam eleifend mi in nulla posuere sollicitudin. Orci sagittis eu
						volutpat odio facilisis mauris. Consequat mauris nunc congue nisi. .
					</p>
				</Modal>
			)}
		</div>
	);
}

export default App;
