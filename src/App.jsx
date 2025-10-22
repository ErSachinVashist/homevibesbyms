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
      <main className="pt-16"> {/* Add padding to account for fixed header */}
        <section id="home">
          <HeroSection />
        </section>
        <section id="categories">
          <ProductCategories />
        </section>
        <section id="rooms">
          <RoomShowcases />
        </section>
        <section id="products">
          <HotProducts />
        </section>
      </main>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default App
