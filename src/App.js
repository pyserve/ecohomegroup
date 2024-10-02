import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Banner from './components/banner';
import About from './components/about';
import Services from './components/services';
import Partners from './components/partners';
import Footer from './components/footer';

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <div className='container pb-3'>
        <div className='row align-items-center'>
          <div className='col-md-6'>
            <About />
          </div>
          <div className='col-md-6'>
            <Partners />
          </div>
        </div>
      </div>
      <Services />
      <Footer />
    </div>
  );
};

export default App;
