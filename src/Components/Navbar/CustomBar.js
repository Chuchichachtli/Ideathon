import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';  

//bg-warning

function CustomBar() {
  return (
<nav class="navbar navbar-inverse bg-dark" style={{marginBottom:"30px"}}>
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand text-light" href="/">ConnectED</a>
    </div>
  </div>
</nav>
  );
}

export default CustomBar;
