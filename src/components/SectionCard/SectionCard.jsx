import css from './SectionCard.module.scss';
import Zoom from '../Zoom/Zoom';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom, faShoppingCart, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';

const SectionCard = ({compareHandler, cartHandler, desireHandler, dispatch, addPhoneThunk, item, ad, hover, clickHandler, index}) => {
   return (
      <div className={hover ? `${css.linkWrapper} ${css.effect}` : css.linkWrapper} key={item.slug}>
      {hover ? <FontAwesomeIcon icon={faTrash} className={css.trash} onClick={clickHandler} id={index} /> : ""}
         <NavLink to={`/phone/${item.slug}`} className={css.item}>
            <div className={css.center}>
               <Zoom img={{src : item.image, alt : "phone-image", width : "100", section : true}} />
            </div>
            <p onClick={() => {
               dispatch(addPhoneThunk(item.slug));
            }} 
            className={css.itemName}>{item.phone_name}</p>
            <p className={css.cost}>70500 ₸</p>
         </NavLink>
         {
            ad && <>
               <div className={css.addInfo}>
                  {
                     compareHandler && <FontAwesomeIcon onClick={compareHandler} className={css.icon} icon={faRandom} id={item.phone_name} />
                  }
                  {
                     cartHandler && <FontAwesomeIcon onClick={cartHandler} className={css.icon} icon={faShoppingCart} id={item.phone_name} />
                  }
                  {
                     desireHandler && <FontAwesomeIcon onClick={desireHandler} className={css.icon} icon={faHeart} id={item.phone_name} />
                  }
               </div>
            </> 
         }
      </div>
   );
}

export default SectionCard;