import css from '../../pages/Phone/Phone.module.scss';
import css2 from '../SectionSlider/SectionSlider';
import Loader from '../Loader/Loader';
import { useState, useCallback, } from 'react';
import { Controlled as ControlledZoom } from 'react-medium-image-zoom';

const Zoom = ({img, item, section, src}) => {
   const [isZoomed, setIsZoomed] = useState(false);

   const handleZoomChange = useCallback(shouldZoom => {
      setIsZoomed(shouldZoom);
   }, []);

   return (
      <>
      {src === false ? <Loader /> : null}
      <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
         <img className={item ? css.miniImageItem : section ? css2.itemImage : css.image} src={img.src} alt={img.alt} width={img.width} />
      </ControlledZoom>
      </>
   );
}


export default Zoom;