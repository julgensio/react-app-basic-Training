import { useState } from 'react';
import './NewEventForm.css';

export default function NewEventForm() {
	const [title, setTitle] = useState('');
	const [date, setDate] = useState('');

	const resetForm = () => {
		setTitle('');
		setDate('');
	};

	return (
		<form className='new-event-form'>
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
			<p>
				Title - {title}, Date - {date}
			</p>
			<p onClick={resetForm}> reset form </p>
		</form>
	);
}
