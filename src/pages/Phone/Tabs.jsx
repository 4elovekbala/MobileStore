import { useEffect, useState  } from 'react';
import { useSelector } from 'react-redux';
import YouTube from 'react-youtube';
import css from './Phone.module.scss';

const Tabs = () => {
   const { data } = useSelector(state => state.phone);
   const [value, setValue] = useState(0);
   const [fakeComments, setfakeComments] = useState([]);
   const [comment, setComment] = useState(false);
   const [commentValue, setCommentValue] = useState('');

   const opts = {
      height: '620',
      width: '1160',
      playerVars: {
         autoplay: 1,
      },
   };

   const tabs = [
      {
         id : 0,
         title : "Описание"
      }, 
      {
         id : 1,
         title : "Характеристики",
      }, 
      {
         id : 2,
         title : `Отзывов (${fakeComments.length})`,
      }, 
      {
         id : 3,
         title : "Видеообзор",
      }
   ];


   const commentHandler = () => {
      setComment(true);
   }

   const sendHandler = () => {
      setComment(false);
      if(commentValue != ""){
         if(setfakeComments.length < 1){
            setfakeComments([commentValue]);
         }
         setfakeComments([...fakeComments, commentValue]);
         setCommentValue('');
      } else {
         alert("Write Something!!");
      }
   }

   const onReady = (e) => {
    e.target.pauseVideo();
  }

   return (
      <>
         <div>
            {
               tabs.map((item, index) => {
                  return (
                     <button onClick={(e) => setValue(e.currentTarget.id)} key={item.id} 
                     className={`${css.tabButton} ${Number(value) === item.id && css.active}`} id={item.id}>{item.title}</button>
                  );
               })
            }
         </div>
         <div>
            {
               Number(value) === 0 && <div className={css.commentContainer}>
                  <p className={css.description}>{data.phone_name} - best phone with characteristics {data.storage}, {data.os}, {data.dimension}. It was released {data.release_date}. 
                  </p>
               </div>
            }
            {
               Number(value) === 1 && <div className={css.commentContainer}>
                  {
                     data.specifications.map((item, index) => {
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
            }
            {
               Number(value) === 2 && <div className={css.commentContainer}>
                     {
                        fakeComments.length >= 1 
                        ? fakeComments.map((item, index) => {
                           return (
                              <p className={css.commentItem} key={index}>{item}</p>
                           );
                        })
                        : <>
                           <p className={css.comment}>
                              Нет отзывов о данном товаре.
                           </p>
                        </>
                     }
                     {
                        comment 
                        ? <>
                           <textarea onChange={(e) => setCommentValue(e.currentTarget.value)} className={css.commentInput} type="text" placeholder="Напишите ваш комментарий"></textarea> 
                           <button onClick={sendHandler} className={`${css.writeComment} ${css.send} ${css.non}`}>Отправить</button>
                        </>
                        : <button onClick={commentHandler} className={`${css.writeComment}`}>Написать отзыв</button>
                     }
               </div>
            }
            {
               Number(value) === 3 && <div className={css.commentContainer}>
                  <YouTube videoId="7bNpnHFOeUA" opts={opts} onReady={onReady} />
               </div>
            }
         </div>
      </>
   );
}

export default Tabs;