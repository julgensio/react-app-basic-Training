import ReactDOM from 'react-dom';
import './modal.css';

// ? Elements within the Modal component in app.js are the children
export default function Modal({ children, handleClosed }) {
	return ReactDOM.createPortal(
		<div className='modal-backdrop'>
			<div className='modal'>
				{children}
				<button onClick={handleClosed}>Close</button>
			</div>
		</div>,
		document.body
	);
}
