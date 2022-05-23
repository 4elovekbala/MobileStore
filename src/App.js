import React from 'react';
import Hero from './pages/Hero/Hero';
import Compare from './pages/Compare/Compare';
import Cart from './pages/Cart/Cart';
import Phone from './pages/Phone/Phone';
import About from './pages/About';
import Contact from './pages/Contact';
import Buy from './pages/Buy';
import Deliver from './pages/Deliver';
import Layout from './components/Layout/Layout';
import './App.scss';

import { 
  HashRouter,
  Routes, 
  Route
} from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Desires from './pages/Desires/Desires';
import User from './pages/User/User';
import { useSelector } from 'react-redux';


function App() {
  const { isLoggedIn } = useSelector(state => state.user);

  const user = [
    {
      path : 'phone/:id',
      element : <Phone />,
    },
    {
      path : 'compare',
      element : <Compare />,
    },
    {
      path : 'cart',
      element : <Cart />,
    },
    {
      path : 'about',
      element : <About />,
    },
    {
      path : 'contact',
      element : <Contact />,
    },
    {
      path : 'buy',
      element : <Buy />,
    },
    {
      path : 'deliver',
      element : <Deliver />,
    },
    {
      path : 'desires',
      element : <Desires />,
    },
    {
      path : 'user',
      element : <User />,
    },
  ];
  const guest = [
    {
      path : 'phone/:id',
      element : <Phone />,
    },
    {
      path : 'compare',
      element : <Compare />,
    },
    {
      path : 'cart',
      element : <Cart />,
    },
    {
      path : 'about',
      element : <About />,
    },
    {
      path : 'contact',
      element : <Contact />,
    },
    {
      path : 'buy',
      element : <Buy />,
    },
    {
      path : 'deliver',
      element : <Deliver />,
    },
    {
      path : 'auth',
      element : <Auth />,
    },
  ];

  return (
    <>
      <div className='wrapper'>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}> 
              <Route index element={
                <>
                  <Hero />
                </>
              } />
              {
                isLoggedIn 
                ?
                  <>
                    {
                      user.map((route, index) => (<Route key={index} path={route.path} element={route.element} />))
                    }
                  </>
                :
                  <>
                    {
                      guest.map((route, index) => (<Route key={index} path={route.path} element={route.element} />))
                    }
                  </>
              }
            </Route> 
          </Routes>
        </HashRouter>
      </div>
    </>
  );
}

export default App;
