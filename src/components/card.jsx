import React from "react";

export default function Card() {
  return (
    <div
      className="position-fixed top-50 start-50 translate-middle"
      style={{
        width: "100%",
        maxWidth: "600px",
        backgroundImage: "url('bg.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div
        className="rounded text-white p-4"
        style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" }}
      >
        <div className="card-body py-4">
          <div className="text-center">
            <img
              src="ecohomegroup.png"
              style={{ width: 100, height: 100 }}
              className="img-fluid bg-light border border-dark p-2 rounded-circle"
              alt="img 1"
            />
          </div>
          <h5 className="card-title text-center h1">Eco Home Group</h5>
          <p className="text-justify">
            Eco Home Group is dedicated to delivering the best in HVAC products
            and services. From installation to maintenance and repair, our
            experienced team ensures your home remains comfortable and
            energy-efficient year-round. We focus on sustainability and customer
            satisfaction, offering eco-friendly options that keep your energy
            costs down while ensuring high-performance systems for your home.
          </p>
        </div>
        <div className="row text-center">
          <div className="col-md-6 my-2">
            <img
              src="ecohomegroup.png"
              style={{ width: 100, height: 100, objectFit: "contain" }}
              className="img-fluid bg-light border border-light p-2 rounded-circle"
              alt="img 1"
            />
            <div className="my-1">
              <div className="h5 fw-bold">Canadian Eco Home</div>
              <a
                href="https://canadianchoicehs.ca/"
                className="nav-link"
                target="_blank"
                rel="noreferrer"
              >
                <button className="mt-2 btn btn-lg btn-outline-light">
                  View Website &#8594;
                </button>
              </a>
            </div>
          </div>
          <div className="col-md-6 my-2">
            <img
              src="weh.png"
              style={{ width: 100, height: 100, objectFit: "contain" }}
              className="img-fluid bg-light border border-light p-2 rounded-circle"
              alt="img 2"
            />
            <div className="my-1">
              <div className="h5 fw-bold">Weaver Eco Home</div>
              <a
                href="https://www.weaverecohome.ca/"
                className="nav-link"
                target="_blank"
                rel="noreferrer"
              >
                <button className="mt-2 btn btn-lg btn-outline-light">
                  View Website &#8594;
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
