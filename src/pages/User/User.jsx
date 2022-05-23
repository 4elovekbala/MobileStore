import { useSelector } from 'react-redux';
import css from './User.module.scss';

const User = () => {
   const { name, mobile } = useSelector(state => state.user);

   return (
      <section className={css.section}>
         <div className={css.userWrapper}>
            <div className={css.wrapper}>
               <h1 className={css.title}>Имя : {name}</h1>
               <h2 className={css.mobile}>Номер телефона : {mobile}</h2>
            </div>
         </div>
      </section>
   );
}


export default User;