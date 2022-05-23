import BannerSlick from '../../components/BannerSlick/BannerSlick';
import Slick from '../../components/Slick/Slick';
import SectionSlider from '../../components/SectionSlider/SectionSlider';
import css from './Hero.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import Modal from '../../components/Modal/Modal';


const Hero = () => {
   return (
      <>
         <Modal />
         <section className={css.section}>
            <div className={css.hero}>
               <Slick />
            </div>
            <div className={css.products}>
               <BannerSlick />
               <div className={css.rowSlider}>
                  <SectionSlider title={"Apple"} />
                  <SectionSlider title={"Samsung"} />
                  <SectionSlider title={"Xiaomi"} />
               </div>
            </div>
            <div className={css.guarantee}>
               <div className={css.quaranteeItem}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                  <div>
                     <h3>БЕСПЛАТНАЯ ДОСТАВКА</h3>
                     <p>По Алматы</p>
                  </div>
               </div>
               <div className={css.quaranteeItem}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <div>
                     <h3>ГАРАНТИЯ КАЧЕСТВА</h3>
                     <p>Официальный товар</p>
                  </div>
               </div>
               <div className={css.quaranteeItem}>
                  <FontAwesomeIcon icon={faCommentDots} />
                  <div>
                     <h3>ОНЛАЙН ЗАКАЗЫ 24/7</h3>
                     <p>Оформляйте заказы в любое время</p>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Hero;