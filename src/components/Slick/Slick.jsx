import css from './Slick.module.scss';
import { bestDevices } from '../../data/fakeData';
import Slider from "react-slick";
import asus from '../../assets/images/asus.jpg';
import samsung from '../../assets/images/samsung.jpg';

const Slick = () => {
   let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows : false
  };

   return (
      <>
         <div className={css.inner}>
            <div className={css.slider}>
               <Slider {...settings} >
               {
                  bestDevices.map(device => (
                     <a key={device.id} href='#' className={`${css.smartphone} ${css.parent}`}>
                        <img className={`${css.smartphoneItem} ${css.item}`} src={device.image} alt="Iphone-poster" />
                        <div className={css.sliderBanner}>
                           <h3 className={`${css.sliderText} ${css.slideUp}`}>{device.title}</h3>
                           <div className={`${css.sliderText} ${css.slideLeft}`}>
                              <p>{device.priceText}</p>
                              <em>{device.price}</em>
                           </div>
                           <button className={`${css.sliderBtn} ${css.slideLeft}`}>КУПИТЬ!</button>
                        </div>
                     </a>
                  ))
               }
            </Slider>
            </div>
            <div className={css.banner}>
               <a href='#' className={`${css.tablet} ${css.bannerWrapper}`}>
                  <img className={`${css.tabletItem} ${css.bannerItem}`} src={asus} alt="Asus-poster" />
                  <div className={css.desc}>
                     <h3>Apple Ipad 9 от</h3>
                     <span className={css.price}>232 500</span>
                  </div>
               </a>
               <a href='#' className={`${css.phone} ${css.smartwatch} ${css.bannerWrapper}`}>
                  <img className={`${css.smartwatchItem} ${css.bannerItem}`} src={samsung} alt="Samsung-poster" />
                  <div className={css.desc}>
                     <h3>X3 Pro 128GB</h3>
                     <span className={css.price}>
                        <span>150 000</span>
                              138 000
                     </span>
                  </div>
               </a>
            </div>
         </div>
      </>
   );
}


export default Slick;