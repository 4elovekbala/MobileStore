import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from 'react-router-dom';
import { addPhonesToSliderThunk } from '../../store/HeroReducer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Layout = () => {
   const dispatch = useDispatch();
   
   useEffect(() => {
      dispatch(addPhonesToSliderThunk());
   }, []);

   return (
      <>
         <Header />
         <Outlet />
         <Footer />
      </>
   );
}

export default Layout;