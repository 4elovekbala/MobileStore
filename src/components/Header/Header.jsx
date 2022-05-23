import { useState } from 'react';
import css from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faRandom } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { searchPhone } from '../../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoneThunk } from '../../store/PhoneReducer';
import { logOutThunk } from '../../store/UserReducer';

const Header = () => {
   const dispatch = useDispatch();
   const { name, status, isLoggedIn } = useSelector(state => state.user);
   const [search, setSearch] = useState('');
   const [items, setItems] = useState([]);


   const searchHandler = () => {
      if(search !== ""){
         searchPhone(search).then(response => setItems(response.data.data.phones));
      } else {
         alert("Write Something!!!");
      }
      setSearch('');
   }

   const logoutHandler = () => {
      dispatch(logOutThunk());
   }


   return (
      <section className={css.section}>
         <header className={css.header}>
            <div className={css.logo}>
               <NavLink className={css.logoItem} to="/"><FontAwesomeIcon icon={faLaptop} /> Techstore</NavLink>
            </div>
            <div className={css.searchContainer}>
               <span className={css.searchWrapper}>
                  <input onChange={(e) => setSearch(e.currentTarget.value)} value={search} className={css.search} placeholder="Search devices" />
                  <span className={css.searchInner}>
                     <FontAwesomeIcon onClick={searchHandler} className={css.searchIcon} icon={faSearch} />
                  </span>
               </span>
               {
                  items.length >= 0 && <>
                     <div className={css.itemsWrapper}>
                        {
                           items.map((item, index) => {
                              return (
                                    <div className={css.items} key={index}>
                                       <NavLink to={`/phone/${item.slug}`} className={css.itemsItem} 
                                       onClick={() => {
                                          dispatch(addPhoneThunk(item.slug));
                                          setItems([]);
                                       }}>
                                          <img src={item.image} alt="phone-thumbnail" />
                                          <p>{item.phone_name}</p>
                                       </NavLink>
                                    </div>
                              );
                           })
                        }
                     </div>
                  </>
               }
            </div>
            <div className={css.userProfile}>
               <ul className={css.auth}>
                  <li className={css.authItem}>
                     <NavLink className={css.item} to={isLoggedIn ? '/user' : '/auth'}><FontAwesomeIcon icon={faUserCircle} /> {name ? name : "Личный Кабинет"}</NavLink>
                  </li>
                  {
                     isLoggedIn && <li onClick={logoutHandler} className={css.authItemLoggin}>Log out</li>
                  }
                  <li className={css.authItem}>
                     {
                        isLoggedIn 
                        ?
                        <>
                           <NavLink className={css.shopWrapper} to="/desires">
                              <FontAwesomeIcon className={css.shoppingCart} icon={faHeart} /> Желания
                           </NavLink>
                           <NavLink className={css.shopWrapper} to="/cart">
                              <FontAwesomeIcon className={css.shoppingCart} icon={faShoppingCart} /> Корзина 
                           </NavLink>
                           <NavLink className={css.shopWrapper} to="/compare">
                              <FontAwesomeIcon className={css.shoppingCart} icon={faRandom} /> Сравнение
                           </NavLink>
                        </> 
                        : 
                        <>
                           <NavLink className={css.shopWrapper} to="/cart">
                              <FontAwesomeIcon className={css.shoppingCart} icon={faShoppingCart} /> Корзина 
                           </NavLink>
                           <NavLink className={css.shopWrapper} to="/compare">
                              <FontAwesomeIcon className={css.shoppingCart} icon={faRandom} /> Сравнение
                           </NavLink>
                        </>
                     }
                  </li>
               </ul>
            </div>
         </header>
      </section>
   )
}

export default Header;