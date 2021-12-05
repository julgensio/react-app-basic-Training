import React from 'react';
import styles from './EventList.module.css';

export default function EventList({ events, handleClick }) {
	return (
		<div>
			{events.map((event, i) => (
				<div className={styles.card} key={event.id}>
					<h2>
						{i} - {event.title}
					</h2>
					<button onClick={() => handleClick(event.id)}>Delete Event</button>
				</div>
			))}
		</div>
	);
}
