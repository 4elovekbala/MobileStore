import css from './Phone.module.scss';
import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoneThunk } from '../../store/PhoneReducer';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tabs from './Tabs';
import SectionSlider from '../../components/SectionSlider/SectionSlider';
import { searchPhone } from '../../api/api';
import CartCounter from '../Cart/CartCounter';
import Zoom from '../../components/Zoom/Zoom';
import Loader from '../../components/Loader/Loader';

const Phone = () => {
   let { id } = useParams();
   const dispatch = useDispatch();
   const { status, data, fetching } = useSelector(state => state.phone);
   const colors = ['Черный', 'Белый', 'Красный', 'Желтый', 'Зеленый'];
   const [slider, setSlider] = useState([]);
   const [title, setTitle] = useState("");

   useEffect(() => {
      dispatch(addPhoneThunk(id));
   }, []);


   useEffect(() => {
      if(data.brand !== ""){
         searchPhone(data.brand).then(response => {
            setSlider(response.data.data.phones);
            setTitle(response.data.data.title.split(" ").pop().replaceAll('"', ""));
         });
      }
   }, [data]);


   return (
      <div className={css.itemContainer}>
         {
            status &&
               <div className={css.container}>
                  <div className={css.imageContainer}>
                     {fetching ? <Loader /> : null}
                     <Zoom img={{src : data.phone_images[0], alt : "phone-image", width : "500"}} />
                     <div className={css.miniImage}>
                        {
                           data.phone_images.map((item, index) => {
                              if(index > 0){
                                 return (
                                    <Zoom key={index} img={{src : item, alt : "phone-image", width : "100"}} item={true} />
                                 );
                              }
                              return null;
                           })
                        }
                     </div>
                  </div>
                  <div className={css.info}>
                     <h2 className={css.phoneTitle}>{data.phone_name}</h2>
                     <div className={css.comment}>
                        <p>
                           <FontAwesomeIcon className={css.star} icon={faStar} />
                           <FontAwesomeIcon className={css.star} icon={faStar} />
                           <FontAwesomeIcon className={css.star} icon={faStar} />
                           <FontAwesomeIcon className={css.star} icon={faStar} />
                           <FontAwesomeIcon className={css.star} icon={faStar} />
                        </p>
                        <p>0 отзывов</p>
                        <p>Написать отзыв</p>
                     </div>
                     <div className={css.manufacturer}>
                        <p>Производитель: <span>{data.brand}</span></p>
                        <p>Модель: <span>{data.phone_name}</span></p>
                        <p>Наличие: <span>Есть в наличии</span></p>
                     </div>
                     <div className={css.cost}>
                        <p>600000  ₸</p>
                     </div>
                     <div className={css.colors}>
                        Доступные Цвета: 
                        {
                           colors.map((item, index) => {
                              return (
                                 <div className={css.radioWrapper} key={index}>
                                    <span>
                                       <input type="radio" name="color"/>
                                       <label>{item}</label>
                                    </span>
                                 </div>
                              );
                           })
                        }
                     </div>
                     <div className={css.count}>
                        Количество 
                        <CartCounter />
                        <button className={css.btn}>Купить</button>
                     </div>
                  </div>
               </div>
         }
         <div className={css.tabs}>
            <Tabs />
         </div>
         <div className={css.recommendWrapper}>
            <div className={css.recommend}>
                  <SectionSlider arr={slider} search={true} title={title} />
            </div>
         </div>
      </div>
   )
}

export default Phone;