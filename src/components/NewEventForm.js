import { useState, useRef } from 'react';
import './NewEventForm.css';

export default function NewEventForm({ addEvent }) {
	const title = useRef();
	const date = useRef();
	const location = useRef();

	// * Reset the form of the events
	const resetForm = () => {
		title.current.value = '';
		date.current.value = '';
		location.current.value = 'The blocks';
	};
	// * Submitted event form the event form
	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(title, date);

		// * New event object from user
		const event = {
			title: title.current.value,
			date: date.current.value,
			location: location.current.value,
			id: Math.floor(Math.random() * 100000000000000000000), // Temporary id number for events (that are submitted)
		};
		console.log(event);
		addEvent(event);
		resetForm();
	};

	return (
		<form className='new-event-form' onSubmit={handleSubmit}>
			<label>
				<span>Event Title:</span>
				<input type='text' ref={title} />
			</label>
			<label>
				<span>Event Date:</span>
				<input type='date' ref={date} />
			</label>
			<label>
				<span>Event location: </span>
				<select ref={location}>
					<option value='The Blocks'>The Blocks</option>
					<option value='Amsterdam'>Amsterdam</option>
					<option value='New York'>New York</option>
				</select>
			</label>
			<button>Submit</button>
		</form>
	);
}
