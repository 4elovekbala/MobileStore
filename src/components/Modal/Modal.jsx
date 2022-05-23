import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import css from './Modal.module.scss';
import { useEffect, useState } from 'react';
import { addToModal } from '../../helpers/commonFunc';

const Modal = () => {
   const [phone, setPhone] = useState('');
   const [status, setStatus] = useState(false);
   const [title, setTitle] = useState('');
   const { cart_phones } = useSelector(state => state.cart);
   const { compare_phones } = useSelector(state => state.compare);
   const { desires } = useSelector(state => state.user);

   const closeHandler = () => {
      setStatus(false);
   }

   // useCallback болу керек 
   useEffect(() => {
      addToModal(cart_phones, setPhone, setStatus, setTitle, "Добавлен в Корзину");
      return () => {
         setStatus(false);
      }
   }, [cart_phones])

   useEffect(() => {
      addToModal(desires, setPhone, setStatus, setTitle, "Добавлен в Корзину желании");
      return () => {
         setStatus(false);
      }
   }, [desires])

   useEffect(() => {
      addToModal(compare_phones, setPhone, setStatus, setTitle, "Добавлена в Сравнения");
      return () => {
         setStatus(false);
      }
   }, [compare_phones])


   return (
      <>
         <section className={`${css.section} ${status ? css.activeModal : ""}`}>
            <div className={css.modal}>
               <div className={css.checkAndName}>
                  <p className={css.check}>
                     <FontAwesomeIcon icon={faCheck} />
                  </p>
                  <p className={css.name}>{phone} {title}</p>
               </div>
               <p className={css.cross}>
                  <FontAwesomeIcon onClick={closeHandler} icon={faTimes} />
               </p>
            </div>
         </section>
      </>
   );
}


export default Modal;