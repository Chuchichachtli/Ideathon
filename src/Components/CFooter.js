import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';  
import "../hoppa.scss";
import logo from '../olasilogo.jpeg';

//bg-warning

function CFooter() {
  return (
<footer class="footer">

  <div class="footer-copyright text-center py-3">
    <img className="ourlogo" src={logo}/>
  </div>

</footer>
  );
}

export default CFooter;
