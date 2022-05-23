import { useState } from 'react';
import css from './Auth.module.scss';
import { Modal } from 'react-responsive-modal';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUser, logInThunk } from '../../store/UserReducer';

const Auth = () => {
   const dispatch = useDispatch();
   const [tab, setTab] = useState(0);
   const [number, setNumber] = useState("8-777-777-77-77");
   const [openModal, setOpenModal] = useState(false);

   const onOpenModal = () => setOpenModal(true);
   const onCloseModal = () => setOpenModal(false);


   const tabs = [
      {
         id : 0,
         title : "АВТОРИЗАЦИЯ"
      },
      {
         id : 1,
         title : "РЕГИСТРАЦИЯ"
      },
   ];
   

   const changeHandler = (e) => {
      const value = e.currentTarget.value;
      if(Number(value) && value.length <= 10){
         setNumber(value);
      }
   }

   const loginHandler = () => {
      dispatch(logInThunk());
      dispatch(getUser());
   }

   return (
      <section className={css.section}>
         <div className={css.authWrapper}>
            <div className={css.auth}>
               <div className={css.tabHeader}>
               {
                  tabs.map(item => {
                     return (
                        <h2 onClick={(e) => setTab(item.id)} 
                        className={tab === item.id ? `${css.tab} ${css.active}` : css.tab} 
                        id={item.id}
                        key={item.id}
                        >{item.title}</h2>
                     );
                  })
               }
               </div>
               <div className={css.tabBody}>
               {
                  tab === 0 && <>
                     <div className={css.inputWrapper}>
                        <label className={css.label}>Номер мобильного телефона</label>
                        <input className={css.input} 
                        type="tel" 
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                        name="mobile-phone" 
                        placeholder='8-777-777-77-77'
                        defaultValue={"8-777-777-77-77"} />
                     </div>
                     <div className={css.inputWrapper}>
                        <label className={css.label}>Пароль</label>
                        <input className={css.input} type="password" name="password" placeholder='Введите пароль' defaultValue={"1234"} />
                     </div>
                     <div className={css.checkboxWrapper}>
                        <p className={css.checkboxContainer}><input type="checkbox" className={css.checkbox} /> Запомнить меня</p>
                        <a className={css.link} onClick={onOpenModal}>Забыли пароль?</a>
                     </div>
                     <NavLink className={css.authBtn} onClick={loginHandler} to="/">Войти</NavLink>
                     <div className={css.forgot}>
                     Нет учетной записи?
                        <a onClick={() => setTab(1)}> Зарегистрироваться</a>
                     </div>
                  </>
               }
               {
                  tab === 1 && <>
                     <div className={css.inputWrapper}>
                        <label className={css.label}>Имя</label>
                        <input className={css.input} type="text" name="name" placeholder='Введите имя' />
                     </div>
                     <div className={css.inputWrapper}>
                        <label className={css.label}>Мобильный телефон</label>
                        <input className={css.input} 
                        type="tel" 
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                        name="mobile-phone" 
                        placeholder='8-777-777-77-77'
                         />
                     </div>
                     <div className={css.inputWrapper}>
                        <label className={css.label}>Email</label>
                        <input className={css.input} type="text" name="email" placeholder='Введите e-mail' />
                     </div>
                     <div className={css.inputWrapper}>
                        <label className={css.label}>Придумайте пароль</label>
                        <input className={css.input} type="password" name="password" placeholder='Введите пароль' />
                     </div>
                     <div className={css.inputWrapper}>
                        <label className={css.label}>Повторите пароль</label>
                        <input className={css.input} type="password" name="password" placeholder='Введите пароль' />
                     </div>
                     <div className={css.checkboxWrapper}>
                        <p className={css.checkboxContainer}><input type="checkbox" className={css.checkbox} /> Подтверждая регистрацию, я соглашаюсь с
условиями предоставления персональных данных</p>
                     </div>
                     <button className={css.btn}>Зарегистрироваться</button>
                  </>
               }
               </div>
            </div>
         </div>
         <Modal open={openModal} onClose={onCloseModal} center>
            <div className={css.modal}>
               <p className={css.inputWrapper}>
                  <label className={css.label}>Мобильный телефон</label>
                  <input className={css.input} 
                  type="tel" 
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                  name="mobile-phone" 
                  placeholder='8-777-777-77-77'
                  />
               </p>
               <button className={css.btn}>Отправить код авторизации</button>
            </div>
         </Modal>
      </section>
   );
}


export default Auth;
