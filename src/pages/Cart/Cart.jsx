import css from './Cart.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deletePhones } from '../../store/CartReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import CartCounter from './CartCounter';
import { clickHandler } from '../../helpers/commonFunc';

const Cart = () => {
   const { cart_phones } = useSelector(state => state.cart);
   const dispatch = useDispatch();
   return (
      <section className={css.section}>
         <div className={css.cartWrapper}>
            <div className={css.cart}>
               <h1 className={css.title}><FontAwesomeIcon icon={faShoppingBag} className={css.shopIcon} />  Корзина покупок</h1>
               <div className={css.products}>
                  {
                     cart_phones.length !== 0
                     ? <table className={css.table}>
                     <thead>
                        <tr className={css.tableItem}>
                           <th className={css.tableTitle}>ИЗОБРАЖЕНИЕ</th>
                           <th className={css.tableTitle}>НАЗВАНИЕ</th>
                           <th className={css.tableTitle}>КОЛИЧЕСТВО</th>
                           <th className={css.tableTitle}>ЦЕНА ЗА ШТ.</th>
                           <th className={css.tableTitle}>ВСЕГО</th>
                           <th className={css.tableTitle}></th>
                        </tr> 
                     </thead>
                     <tbody>
                     {
                        cart_phones && cart_phones.map((item, index) => {
                           return (
                              <tr className={css.tableItem} key={index}>
                                 <td className={css.tableInfo}>
                                    <img className={css.image} src={item.image} alt="phone-image" />
                                 </td>
                                 <td className={css.tableInfo}>
                                    <NavLink to={`/phone/${item.slug}`}>{item.phone_name}</NavLink>
                                 </td>
                                 <td className={css.tableInfo}>
                                    <CartCounter />
                                 </td>
                                 <td className={css.tableInfo}>1000 ₸</td>
                                 <td className={css.tableInfo}>2000 ₸</td>
                                 <td className={css.tableInfo}><FontAwesomeIcon onClick={(e) => clickHandler(e.currentTarget.id, dispatch, deletePhones)} className={css.trash} icon={faTrash} id={index} /></td>
                              </tr>
                           );
                        })
                     }
                     </tbody>
                  </table>
                     : "Корзина пуста!"
                  }
               </div>
            </div>
         </div>
      </section>
   );
}


export default Cart;