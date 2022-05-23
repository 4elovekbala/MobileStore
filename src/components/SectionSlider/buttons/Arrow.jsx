import { faAngleRight, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import css from './Arrow.module.scss';

export const NextArrow = ({ onClick }) => (
   <div className={css.arrowContainerRight} onClick={onClick}>
      <FontAwesomeIcon className={css.rightButton} icon={faAngleRight} />
   </div>
);
export const PreviousArrow = ({ onClick }) => (
   <div className={css.arrowContainerLeft} onClick={onClick} >
      <FontAwesomeIcon className={css.leftButton} icon={faAngleLeft} />
   </div>
);
export const ChevRonup = ({ onClick }) => (
   <FontAwesomeIcon className={css.up} icon={faChevronUp} onClick={onClick} />
);


export const ChevRonDown = ({ onClick }) => (
   <FontAwesomeIcon className={css.down} icon={faChevronDown} onClick={onClick} />
);