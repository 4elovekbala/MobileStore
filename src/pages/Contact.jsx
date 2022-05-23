import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import css from './Pages.module.scss';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import GoogleMapReact from 'google-map-react';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Contact = () => {
   const defaultProps = {
    center: {
      lat: 43.238949,
      lng: 76.889709
    },
    zoom: 11
  };

   return (
      <div className={css.wrapper}>
        <div className={css.inner}>
            <h1 className={css.title}>ОБРАТНАЯ СВЯЗЬ</h1>
            <h2 className={`${css.title} ${css.left}`}>Наше местонахождение</h2>
            <div className={css.map}>
               <div style={{ height: '100vh', width: '100%' }}>
                  <GoogleMapReact
                     bootstrapURLKeys={{ key: "AIzaSyBHPZY4chDELjc7kyAMDlrR81T7y1hStBQ"}}
                     defaultCenter={defaultProps.center}
                     defaultZoom={defaultProps.zoom}
                  >
                  <div lat={43.238949} lng={76.889709}>
                     <FontAwesomeIcon icon={faMapMarkerAlt} className={css.icon} />
                  </div>
                  </GoogleMapReact>
               </div>
            </div>
            <div className={css.info}>
               <div className={css.logo}>
                  <NavLink className={css.logoItem} to="/"><FontAwesomeIcon icon={faLaptop} /> Techstore</NavLink>
               </div>
               <div className={css.contact}>
                  <div className={css.contactItem}>
                     <FontAwesomeIcon icon={faMobileAlt} />
                     <ul>
                        <li>Телефон</li>
                        <li>+77055109388</li>
                     </ul>
                  </div>
                  <div className={css.contactItem}>
                     <FontAwesomeIcon icon={faPhoneAlt} />
                     <ul>
                        <li>WhatsApp</li>
                        <li>+77075109388</li>
                     </ul>
                  </div>
                  <div className={css.contactItem}>
                     <FontAwesomeIcon icon={faKey} />
                     <ul>
                        <li>Режим работы</li>
                        <li>Ежедневно 10:00 - 20:00</li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className={css.inputWrapper}>
               <h2 className={`${css.title} ${css.left}`}>Написать нам</h2>
               <p className={css.inputItem}>
                  <label>ВАШЕ ИМЯ</label>
                  <input className={css.data} type="text" name='name' placeholder='ВВедите ваше имя' />
               </p>
               <p className={css.inputItem}>
                  <label>ВАШ E-MAIL</label>
                  <input className={css.data} type="text" name='email' placeholder='ВВедите ваш e-mail'  />
               </p>
               <p className={css.inputItem}>
                  <label>ВАШ ВОПРОС ИЛИ СООБЩЕНИЕ</label>
                  <input className={css.comment} type="text" name='comment' placeholder='ВВедите ваше сообщение' />
               </p>
               <div className={css.btnWrapper}>
                  <button className={css.send}>Отправить сообщение</button>
               </div>
            </div>
        </div>
      </div>
   );
}

export default Contact;