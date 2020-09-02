import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';  

//bg-warning

function CustomBar() {
  return (
      <nav class="navbar navbar-expand-lg navbar-light  navbar-nav w-100  transparent" style={{height:"80px", zIndex:"20"}}>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <span>
            <li class="nav-item" style={{ float: "left", paddingLeft: "20px", fontSize:"30px", fontWeight:"600" }}>
              <a class="nav-link text-danger" href="/">PATTES<span class="sr-only">(current)</span></a>
            </li>

          </span>

          <ul class="navbar-nav ml-auto left-navbar">

          <li class="nav-item">
              <a class="nav-link text-light" href="/">Home<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="/start-up-login">Start-up Log-in<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="/investor-registration">Investor Registration</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="/investor-login">Yatırımcı Login</a>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default CustomBar;
