import Slider from 'react-slick';
import css from './SectionSlider.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { addPhonesToCart } from '../../store/CartReducer';
import { addPhonesToCompareThunk } from '../../store/CompareReducer';
import { NextArrow, PreviousArrow } from './buttons/Arrow';
import { addPhoneThunk } from '../../store/PhoneReducer';
import { addToDesires } from '../../store/UserReducer';
import SectionCard from '../SectionCard/SectionCard';
import { cartHandler, compareHandler, desireHandler } from '../../helpers/commonFunc';



const SectionSlider = ({title, arr, search}) => {
   const dispatch = useDispatch();
   const { all_phones, apple_phones, samsung_phones, xiaomi_phones} = useSelector(state => state.hero);
   const { compare_phones } = useSelector(state => state.compare);
   const { status } = useSelector(state => state.user);

   const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow : <NextArrow />,
      prevArrow : <PreviousArrow />,
   };

   return (
      <section className={css.section}>
         <div className={css.titleWrapper}><h2 className={css.title}>{title}</h2> <span className={css.popular}>Популярные</span></div>
         <div className={css.sliderWrapper}>
            <div className={css.slider}>
               {
                  search 
                  ? <Slider {...settings}>
                     {
                        arr && arr.map((item, index) => {
                           return (
                              <SectionCard compareHandler={(e) => compareHandler(e.currentTarget.id, all_phones, dispatch, addPhonesToCompareThunk, compare_phones)} 
                              cartHandler={(e) => cartHandler(e.currentTarget.id, all_phones, dispatch, addPhonesToCart)} 
                              desireHandler={(e) => desireHandler(e.currentTarget.id, all_phones, dispatch, addToDesires, status)}
                              dispatch={dispatch} 
                              addPhoneThunk={addPhoneThunk} 
                              item={item}
                              index={index}
                              ad={false}
                              key={item.slug}
                              />
                           );
                        })
                     }
                  </Slider>
                  : <>
                     <Slider {...settings}>
                     {
                        title == "Apple" 
                        ? apple_phones && apple_phones.map((item, index) => {
                           return (
                              <SectionCard compareHandler={(e) => compareHandler(e.currentTarget.id, all_phones, dispatch, addPhonesToCompareThunk, compare_phones)} 
                              cartHandler={(e) => cartHandler(e.currentTarget.id, all_phones, dispatch, addPhonesToCart)} 
                              desireHandler={(e) => desireHandler(e.currentTarget.id, all_phones, dispatch, addToDesires, status)}
                              dispatch={dispatch} 
                              addPhoneThunk={addPhoneThunk} 
                              item={item}
                              index={index}
                              ad={true}
                              key={item.slug}
                              />
                           );
                        }) 
                        : title == "Samsung" 
                        ? samsung_phones && samsung_phones.map((item, index) => {
                           return (
                              <SectionCard compareHandler={(e) => compareHandler(e.currentTarget.id, all_phones, dispatch, addPhonesToCompareThunk, compare_phones)} 
                              cartHandler={(e) => cartHandler(e.currentTarget.id, all_phones, dispatch, addPhonesToCart)} 
                              desireHandler={(e) => desireHandler(e.currentTarget.id, all_phones, dispatch, addToDesires, status)}
                              dispatch={dispatch} 
                              addPhoneThunk={addPhoneThunk} 
                              item={item}
                              index={index}
                              ad={true}
                              key={item.slug}
                              />
                           );
                        }) 
                        : xiaomi_phones && xiaomi_phones.map((item, index) => {
                           return (
                              <SectionCard compareHandler={(e) => compareHandler(e.currentTarget.id, all_phones, dispatch, addPhonesToCompareThunk, compare_phones)} 
                              cartHandler={(e) => cartHandler(e.currentTarget.id, all_phones, dispatch, addPhonesToCart)} 
                              desireHandler={(e) => desireHandler(e.currentTarget.id, all_phones, dispatch, addToDesires, status)}
                              dispatch={dispatch} 
                              addPhoneThunk={addPhoneThunk} 
                              item={item}
                              index={index}
                              ad={true}
                              key={item.slug}
                              />
                           );
                        }) 
                     }
                  </Slider>
                  </>
               }
            </div>
         </div>
      </section>
   );
}


export default SectionSlider;