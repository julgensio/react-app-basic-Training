import { useState } from 'react';
import './NewEventForm.css';

export default function NewEventForm() {
	const [title, setTitle] = useState('');
	const [date, setDate] = useState('');

	// * Reset the form of the events
	const resetForm = () => {
		setTitle('');
		setDate('');
	};
	// * Submitted event form the event form
	const handleSubmit = (e) => {
		e.preventDefault();

		const event = {
			title: title,
			date: date,
			id: Math.floor(Math.random() * 100000000000000000000), // Temporary id number for events (that are submitted)
		};

		console.log(event);
		resetForm();
	};

	return (
		<form className='new-event-form' onSubmit={handleSubmit}>
			<label>
				<span>Event Title:</span>
				<input
					type='text'
					onChange={(e) => setTitle(e.target.value)} // * Update state with the given title
					value={title} // * Reset input
				/>
			</label>
			<label>
				<span>Event Date:</span>
				<input
					type='date'
					onChange={(e) => setDate(e.target.value)} // * Update state with the given date
					value={date} // * Reset input
				/>
			</label>
			<button>Submit</button>
		</form>
	);
}
