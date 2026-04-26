import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">

      <div className="p-4" id="supportWrapper">
        <h4>Support Portal</h4>
        <button
          type="button"
          className="btn btn-link p-0"
          style={{ textDecoration: "none" }}
        >
          Track Tickets
        </button>
      </div>

     <div className="row p-5" >
        <div className="col-6 p-3">
          <h1 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input className="mb-4" placeholder="Eg. how do I activate F&O" />
          <br />
          <button type="button" className="btn btn-link p-0" style={{ textDecoration: "none" }}>
            Track account opening
          </button>
          &nbsp;&nbsp;
          <button type="button" className="btn btn-link p-0" style={{ textDecoration: "none" }}>
            Track segment activation
          </button>
          &nbsp;&nbsp;
          <button type="button" className="btn btn-link p-0" style={{ textDecoration: "none" }}>
            Intraday margins
          </button>
          <br></br>
          <button type="button" className="btn btn-link p-0" style={{ textDecoration: "none" }}>
            Kite user manual
          </button>
          &nbsp;&nbsp;
        </div>
        <div className="col-6 p-4">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <button type="button" className="btn btn-link p-0" style={{ textDecoration: "none" }}>
                Current Takeovers and Delisting - January 2024
              </button>
            </li>
            <li>
              <button type="button" className="btn btn-link p-0" style={{ textDecoration: "none" }}>
                Latest Intraday leverages - MIS & CO
              </button>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;