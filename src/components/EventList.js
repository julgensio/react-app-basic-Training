import React from 'react';

export default function EventList({ events, handleClick }) {
	return (
		<div>
			{events.map((event, i) => (
				<React.Fragment key={event.id}>
					<h2>
						{i} - {event.title}
					</h2>
					<button onClick={() => handleClick(event.id)}>Delete Event</button>
				</React.Fragment>
			))}
		</div>
	);
}
