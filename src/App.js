import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/header';
// import Banner from './components/banner';
// import About from './components/about';
// import Services from './components/services';
// import Partners from './components/partners';
// import Footer from './components/footer';
import Main from './components/main';

const App = () => {
  return (
    <div className='position-relative vh-100 w-100'>
      {/* <Header />
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
      <Footer /> */}
      <Main />
      <div className="position-absolute top-50 start-50 translate-middle" style={{ width: '80%', maxWidth: '600px' }}>
        <div className="border border-white rounded text-dark shadow-lg p-3" style={{boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'}}>
          <div className="card-body py-4">
            <div className='text-center'>
              <img
                  src="ecohomegroup.png"
                  style={{ width: 100, height: 100, }}
                  className="img-fluid rounded-start"
                  alt="img 1"
                />
            </div>
            <h5 className="card-title text-center h1">Eco Home Group</h5>
            <p className="card-text text-center">Expert HVAC Products & Services for Your Home Comfort</p>
          </div>
          <div className="row text-center">
            <div className="col-md-6">
              <img
                src="ecohomegroup.png"
                style={{width: 100, height: 100, objectFit: "contain"}}
                className="img-fluid rounded-start"
                alt="img 1"
              />
              <div className='my-1'>
                <div className='h5 fw-bold'>Canadian Eco Home</div>
                <a href='https://canadianchoicehs.ca/' className='nav-link' target='_blank' rel="noreferrer">
                  <button className='mt-2 btn btn-outline-dark'>View Website &#8594;</button>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="weh.png"
                style={{width: 125, height: 100, objectFit: "contain"}}
                className="img-fluid rounded-end"
                alt="img 2"
              />
              <div className='my-1'>
                <div className='h5 fw-bold'>Weaver Eco Home</div>
                <a href='https://www.weaverecohome.ca/' className='nav-link' target='_blank' rel="noreferrer">
                  <button className='mt-2 btn btn-outline-dark'>View Website &#8594;</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
