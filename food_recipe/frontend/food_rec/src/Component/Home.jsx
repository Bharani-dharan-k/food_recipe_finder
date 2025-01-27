import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpeg';

function Home() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <h1>Welcome to Recipe Finder!</h1>
        <h3>
          This website helps you find recipes quickly and efficiently. Simply enter the ingredients
          you have, and we’ll suggest the best recipes for you to try!
        </h3>
        <div>
          <img src={image1} alt="Delicious Food 1" />
        </div>
        <div>
          <img src={image2} alt="Delicious Food 2" />
        </div>
        <div>
          <img src={image3} alt="Delicious Food 3" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
