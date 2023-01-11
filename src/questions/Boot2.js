import React from "react";

const Boot2 = (props) => {
  return (
    <div>
      <nav class="navbar navbar-expand-sm d-flex  navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <div className="container">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <a class="navbar-brand" href="#">
                <img src={props.img1} alt="..." height="75" width="150" />
                <div class="centered p-3">Zupa Builders</div>
              </a>
            </ul>
          </div>
          <div class="social-part ">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Experts
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Portfolio
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Boot2;
