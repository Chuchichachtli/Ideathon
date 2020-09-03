import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';  
// import './Home.scss';
import CustomBar from '../../Components/Navbar/CustomBar';
import koneksin from '../../koneksin.jpg'

function Home() {
  return (
    <div className="bg-div">
      <CustomBar/>

<div class="container">

      <div class="row mb-2">
    <div class="col-md-6">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">Girişimci Misiniz?</strong>
          <h3 class="mb-0">Girişimci Portalı</h3>
          <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="/start-up-login" class="stretched-link">Continue reading</a>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-success">Yatırımcı</strong>
          <h3 class="mb-0">Yatırımcı</h3>
          <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="/investor-login" class="stretched-link">Continue reading</a>
        </div>
      </div>
    </div>
  </div>
    </div>

</div>
  );
}

export default Home;
