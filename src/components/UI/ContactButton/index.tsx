import React from 'react';
import { useDispatch } from 'react-redux';
import { setContactUsPopUp } from '../../../redux/slices/popUpSlice';

const ContactButton: React.FC = (props) => {
	const dispatch = useDispatch();

	const onClickContactUs = () => {
		dispatch(setContactUsPopUp(true));
	};

	return (
		<button onClick={onClickContactUs} className={`button`}>
			Зв'язатися з нами
		</button>
	);
};

export default ContactButton;
