import css from './Header.module.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../helpers/utils';

const Dropdown = () => {
   const [value, setValue] = useState({id : 0, title : "Главная"});
   const [open, setOpen] = useState(false);

   const clickHanlder = (e) => {
      const element = routes.find(item => parseInt(item.id) === parseInt(e.currentTarget.id))
      setValue(element);
      setOpen(false);
   }

   return (
      <div className={css.dropdownWrapper}>
         <div className={css.dropdownInner}>
            <ul className={css.dropdown}>
               <li onClick={() => setOpen(!open)} className={`${css.dropdownItem} ${css.activeLink}`}>{value.title}</li>
               {
                  routes.filter(item => Number(item.id) !== Number(value.id)).map(item => {
                     return (
                        <NavLink onClick={clickHanlder} className={`${css.dropdownItem} ${open ? css.activeLink : ""}`} 
                        key={item.id} id={item.id} to={`${item.path}`}>{item.title}</NavLink>
                     );
                  })
               }
            </ul>
         </div>
      </div>
   )
}

export default Dropdown;