import React from 'react';

const Partners = () => {
  return (
    <section id="partners" className="container py-4 bg-white shadow-sm rounded text-center">
      <h2 className="text-primary my-2">Our Partner Companies</h2>
      <div className='mb-4 small'>Please click the logo to view website.</div>
      <div className="d-flex justify-content-center gap-5">
        <a href="https://canadianchoicehs.ca/" target="_blank" rel="noopener noreferrer">
          <img src="cchs.png" alt="Company 1 Logo" className="img-fluid" style={{ maxWidth: '150px', width: "150px", height: "80px", objectFit: "contain" }} />
          <br />
          <button className='btn btn-sm btn-outline-primary mt-1'> Visit CCHS →</button>
        </a>
        <a href="https://www.weaverecohome.ca/" target="_blank" rel="noopener noreferrer">
          <img src="weaver.png" alt="Company 2 Logo" className="img-fluid" style={{ maxWidth: '150px', width: "150px", height: "80px", objectFit: "contain" }} />
          <br />
          <button className='btn btn-sm btn-outline-info mt-1'>Visit WEH →</button>
        </a>
      </div>
    </section>
  );
};

export default Partners;
