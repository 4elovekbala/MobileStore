import css from './Desires.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import SectionCard from '../../components/SectionCard/SectionCard';
import { addPhonesToCart } from '../../store/CartReducer';
import { addPhonesToCompareThunk } from '../../store/CompareReducer';
import { addPhoneThunk } from '../../store/PhoneReducer';
import { deletePhonesFromDesires } from '../../store/UserReducer';
import { cartHandler, clickHandler, compareHandler } from '../../helpers/commonFunc';

const Desires = () => {
   const dispatch = useDispatch();
   const { desires } = useSelector(state => state.user);
   const { all_phones } = useSelector(state => state.hero);
   const { compare_phones } = useSelector(state => state.compare);

   return (
      <section className={css.section}>
         <div className={css.desiresWrapper}>
            <div className={css.desires}>
               <h1 className={css.title}><FontAwesomeIcon icon={faHeart} className={css.desireIcon} />  Желания</h1>
               <div className={css.phoneContainer}>
                  {
                     desires.length !== 0 ? desires.map((item, index) => <div key={index} className={css.wrapper}>
                           <SectionCard
                                 compareHandler={(e) => compareHandler(e.currentTarget.id, all_phones, dispatch, addPhonesToCompareThunk, compare_phones)} 
                                 cartHandler={(e) => cartHandler(e.currentTarget.id, all_phones, dispatch, addPhonesToCart)} 
                                 dispatch={dispatch} 
                                 addPhoneThunk={addPhoneThunk} 
                                 item={item}
                                 index={index}
                                 ad={true}
                                 key={item.slug}
                                 hover={true}
                                 clickHandler={(e) => clickHandler(e.currentTarget.id, dispatch, deletePhonesFromDesires)}
                           />
                     </div>)
                     : "Корзина желании пуста!"
                  }
               </div>
            </div>
         </div>
      </section>
   );
}

export default Desires;