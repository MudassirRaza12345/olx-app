import React, {useEffect}from 'react';
import Banner from './components/Banner/Banner.js';
import Adds from './components/Adds/Adds'
import Footer from './components/Footer/Footer';
import Appadds from './components/Appadds/Appadds.jsx'
import './App.css';
import Header from './components/Header/Header'
import Featured from './components/Featured/Featured.js';
import Products from './components/Products/Products'
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import Firebase from './firebase';


function App() {

  useEffect(() => {
    return () => {
      console.log(Firebase)
    };
  }, [])
  return (
    <>
      <Header />
      <Banner />
      <Adds />
      <Featured />
      <Products />
      <ProductDetails />
      <Appadds />
      <Footer />
  </>
  );
}

export default App;
