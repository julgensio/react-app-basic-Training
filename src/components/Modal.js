import ReactDOM from 'react-dom';
import './modal.css';

// ? Elements within the Modal component in app.js are the children
export default function Modal({ children, handleClosed, isSalesModel }) {
	console.log(isSalesModel);

	return ReactDOM.createPortal(
		<div className='modal-backdrop'>
			<div
				className='modal'
				style={{
					border: '4px solid',
					borderColor: !isSalesModel ? '#ff4500' : '#555', // ? Dynamic inline Styles
					textAlign: 'center',
				}}
			>
				{children}
				<button
					onClick={handleClosed}
					className={isSalesModel ? 'sales-btn' : ''} // ? Dynamic conditional CSs Classes
				>
					Close
				</button>
			</div>
		</div>,
		document.body
	);
}
