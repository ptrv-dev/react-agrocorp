import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setContactUsPopUp } from '../../redux/slices/popUpSlice';
import { RootState } from '../../redux/store';

import './PopUp.scss';

const PopUp: React.FC = () => {
  const contactUsPopUp = useSelector(
    (state: RootState) => state.popUp.contactUsPopUp
  );
  const [visibility, setVisibility] = React.useState(contactUsPopUp);
  React.useEffect(() => {
    setVisibility(contactUsPopUp || false);
  }, [contactUsPopUp]);

  React.useEffect(() => {
    if (visibility) document.body.classList.add('no-scroll');
    else document.body.classList.remove('no-scroll');
  }, [visibility]);

  const dispatch = useDispatch();

  return (
    <div className={`popup ${visibility ? 'active' : ''}`}>
      {contactUsPopUp && (
        <div className="contact-us-popup">
          <h3 className="contact-us-popup__title">Зв’язок з нами</h3>
          <div className="contact-us-popup__body">
            <div className="contact-us-popup__phone">
              <p>Номер телефону для довідок:</p>
              <a href="tel:+380931873449">+(380) 93 187 34 49</a>
              <a href="tel:+380931873423">+(380) 93 187 34 23</a>
            </div>
            <div className="contact-us-popup__email">
              <p>Електронна адреса:</p>
              <a href="mailto:tov.agrocorp@gmail.com">tov.agrocorp@gmail.com</a>
            </div>
          </div>
          <button
            onClick={() => {
              dispatch(setContactUsPopUp(false));
            }}
            className="button popup__close"
          >
            Закрити
          </button>
        </div>
      )}
    </div>
  );
};

export default PopUp;
