import { NavLink } from 'react-router-dom';
import css from './Footer.module.scss';
import { routes } from '../../helpers/utils';

const Footer = () => {
   return (
      <section className={css.section}>
         <footer className={css.footer}>
            <div className={css.logo}>
               <span className={css.red}>Your</span> Logo
            </div>
            <div className={css.info}>
               <ul className={css.infoTable}>
                  {
                     routes.map(route => (
                        <li key={route.id} className={css.infoItem}><NavLink to={route.path} className={css.item}>{route.title}</NavLink></li>
                     ))
                  }
               </ul>
            </div>
            <div className={css.certificates}>
               Certificates
            </div>
         </footer>
      </section>
   )
}

export default Footer;