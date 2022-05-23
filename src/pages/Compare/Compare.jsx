import css from './Compare.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { deletePhonesFromComapre } from '../../store/CompareReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { clickHandler } from '../../helpers/commonFunc';

const Compare = () => {
   const { compare_phones } = useSelector(state => state.compare);
   const dispatch = useDispatch();

   return (
      <section className={css.section}>
         <div className={css.compareWrapper}>
            <div className={css.compare}>
               <h1 className={css.compareTitle}><span><FontAwesomeIcon className={css.titleIcon} icon={faExchangeAlt} /> </span> СРАВНЕНИЕ ТОВАРОВ</h1>
               {
                  compare_phones.length >= 1 
                  ? <div className={css.data}>
                     {
                        compare_phones && compare_phones.map((item, index) => {
                           return (
                              <div className={css.wrapper} key={index}>
                                 <div className={css.heading}>
                                    <div className={css.imageWrapper}>
                                       <img className={css.image} src={item.phone_images[0]} alt="phone-image" />
                                       <p className={css.tableInfo}><FontAwesomeIcon 
                                       onClick={(e) => clickHandler(e.currentTarget.id, dispatch, deletePhonesFromComapre)} 
                                       className={css.trash} icon={faTrash} id={index} /></p>
                                    </div>
                                    <div className={css.cost}>
                                    <p>602000 ₸</p> 
                                    </div>
                                    <div className={css.tableInfo}>
                                       <p className={css.phoneTitle}>{item.phone_name}</p>
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
                                    </div>
                                 </div>
                                 <div className={css.specification}>
                                    {
                                       item.specifications.map((item, index) => {
                                          return (
                                             <div key={index}>
                                                <h3 className={css.specificationTitle}>{item.title}</h3>
                                                {
                                                   item.specs.map((item, index) => {
                                                      return (
                                                      <div className={css.specsItem} key={index}>
                                                         <div className={css.specsItemKey}>
                                                               <h4>{item.key}</h4>
                                                            </div> 
                                                            <div>
                                                               <p>{item.val.map((item) => item)}</p>
                                                            </div>
                                                      </div>
                                                      );
                                                   })
                                                }
                                             </div>
                                          );
                                       })
                                    }
                                 </div>
                              </div>
                           );
                        })
                     }
                  </div>
                  : "Вы не выбрали ни одного товара для сравнения."
               }
            </div>
         </div>
      </section>
   );
}

export default Compare;