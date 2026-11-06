import React from 'react';
import HeroBannerPage from './components/HeroBanner';
import ProductStatus from './components/ProductStatus';
import FooterPage from './components/Footer';

const HomePage = () => {
  return (
    <>
      <HeroBannerPage></HeroBannerPage>
      <ProductStatus></ProductStatus>
      <FooterPage></FooterPage>
    </>
  );
};

export default HomePage;