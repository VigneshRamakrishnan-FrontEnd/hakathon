import React from "react";
import Boot2 from "./Boot2";
import d from "./download.jpg";
import Boot3 from "./Boot3";
import d1 from "./download1.jpg";

function Boot() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm d-flex  navbar-light bg-warning">
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
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Help <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Privacy
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Legal
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <div class="social-part ">
            <i class="fa fa-facebook p-2" aria-hidden="true"></i>
            <i class="fa fa-twitter p-2" aria-hidden="true"></i>
            <i class="fa fa-instagram p-2" aria-hidden="true"></i>
          </div>
        </div>
      </nav>
      <Boot2 img1={d} />

      <Boot3 img2={d1} />
    </div>
  );
}

export default Boot;
