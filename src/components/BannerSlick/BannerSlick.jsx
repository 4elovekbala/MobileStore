import css from './BannerSlick.module.scss';
import Slider from "react-slick";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ChevRonup, ChevRonDown } from '../SectionSlider/buttons/Arrow';


const BannerSlick = () => {
   const { slider } = useSelector(state => state.hero);
   
   let settings = {
      dots: false,
      infinite: true,
      autoPlay : true,
      autoPlaySpeed: 500,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      nextArrow : <ChevRonDown />,
      prevArrow : <ChevRonup />,
   };

   return (
      <aside>
         <h2 className={css.title}>Latest</h2>
         <div className={css.slider}>
            <Slider {...settings} >
               {
                  slider && slider.map((elem, index) => {
                     return (
                        <NavLink to={`/phone/${elem.slug}`} key={index}>
                           <div className={css.item}>
                              <img className={css.image} src={elem.image} alt="phone-image" />
                              <div>
                                 <p className={css.name}>{elem.phone_name}</p>
                                 <p className={css.cost}>465000 ₸</p>
                              </div>
                           </div>
                        </NavLink>
                     );
                  })
               }
            </Slider>
         </div>
      </aside>
   );
}


export default BannerSlick