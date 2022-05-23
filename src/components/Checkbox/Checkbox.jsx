import { useState } from 'react';
import css from './Checkbox.module.scss';

const Checkbox = () => {
   const [value, setValue] = useState(false);

   return (
      <>
         <div className={`${css.switchBtn} ${value && css.switchOn}`} onClick={() => setValue(!value)}></div>
      </>
   )
}


export default Checkbox;