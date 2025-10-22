import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductCategories from './components/ProductCategories';
import RoomShowcases from './components/RoomShowcases';
import HotProducts from './components/HotProducts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProductCategories />
        <RoomShowcases />
        <HotProducts />
      </main>
      <Footer />
    </div>
  );
}

export default App
