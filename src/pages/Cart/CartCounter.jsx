import { useState } from 'react';
import css from './Cart.module.scss';

const CartCounter = () => {
   const [value, setValue] = useState(1);

   const changeHandler = (e) => {
      const value = e.target.value;
      if(Number(value) && value <= 100 && value >= 1){
         setValue(Number(value));
      }
   }

   const clickHandler = (e) => {
      const target = e.target.id;
      if(target == "minus" && value > 1){
         setValue((prev) => prev - 1);
      } else if(target == "plus" && value < 100){
         setValue((prev) => prev + 1);
      }
   }

   return (
      <div className={css.counterWrapper}>
         <button onClick={clickHandler} className={css.counterBtn} id="minus">-</button>
         <input onChange={changeHandler} value={value} className={css.counterInput} type="text"/>
         <button onClick={clickHandler} className={css.counterBtn} id="plus">+</button>
      </div>
   );
}


export default CartCounter;