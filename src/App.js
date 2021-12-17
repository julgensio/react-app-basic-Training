import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
	const [showModal, setShowModal] = useState(false);
	const [showEvents, setShowEvents] = useState(true);

	const [events, setEvents] = useState([]);

	const addEvent = (event) => {
		setEvents((prevEvents) => {
			// * Add the previous events and at the new event into the object
			return [...prevEvents, event];
		});
		// * Hide modal after submitted the new event
		setShowModal(false);
	};

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
				<button onClick={() => setShowModal(true)}>Add New Event</button>
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
					<NewEventForm addEvent={addEvent} />
				</Modal>
			)}
		</div>
	);
}

export default App;
