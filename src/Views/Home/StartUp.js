import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';  
// import './Home.scss';
import CustomBar from '../../Components/Navbar/CustomBar';
import koneksin from '../../koneksin.jpg'
import Takvim from '../../Components/Takvim';
import CFooter from '../../Components/CFooter';

function StartUp() {
  return (
    <div className="bg-div">
      <CustomBar/>
<div class="container ">
<div class="row">


    <div class="col-md-4">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-success">
        <div class="col p-4 d-flex flex-column position-static">
          {/* <strong class="d-inline-block mb-2 text-primary">Başvuru</strong> */}
          <h3 class="mb-0 text-white">Fikrinizi Girin</h3>
          <p class="card-text mb-auto text-white">Fikrinizi bizimle paylaşıp, sistemimizdeki yatırımcıların ilgisini çekin.</p>
          <a href="/fikir-form" class="stretched-link"></a>
        </div>
      </div>
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-light">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">Bilgi</strong>
          <h3 class="mb-0">FabLab</h3>
          <p class="card-text mb-auto">FabLab, üretim laboratuvarı anlamına gelen “Fabrication Laboratory”nin kısaltmasıdır. Aynı zamanda “Fabulous Laboratory” (Muhteşem Laboratuvar) biçiminde de açıklanan FabLab, piyasadaki üretim için geliştirilmiş yazılım ve süreçlere bağlı makine ve parçalardan oluşturulmuş bir çeşit atölyedir. MIT (Massachussets Institute of Technology) tarafından kurulmuş olan CBA'da (Center for Bits and Atoms) Prof. Neil Gershenfeld'in verdiği “How to do (almost) anything" dersinden yola çıkılarak geliştirilmiştir.
</p>
          <a href="#" class="stretched-link">Okumaya devam et</a>
        </div>
     
    </div>
    </div>

    <div class="col-md-4">
    <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <h3 class="mb-0">
                <a class="text-dark" href="#">b-fit</a>
              </h3>
              <div class="mb-1 text-muted">fitness</div>
              <p class="card-text mb-auto">Kadınlara özel spor merkezi.</p>
              <a href="#">devamını oku</a>
            </div>
          </div>

          <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <h3 class="mb-0">
                <a class="text-dark" href="#">Takawear</a>
              </h3>
              <div class="mb-1 text-muted">moda</div>
              <p class="card-text mb-auto">Kadın giyim</p>
              <a href="#">devamını oku</a>
              </div>
            </div>

            <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <h3 class="mb-0">
                <a class="text-dark" href="#">Baydöner</a>
              </h3>
              <div class="mb-1 text-muted">Yiyecek ve içecek</div>
              <p class="card-text mb-auto">Döner fast-food</p>
              <a href="#">devamını oku</a>
              </div>
            </div>

            <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <h3 class="mb-0">
                <a class="text-dark" href="#">Steamlab</a>
              </h3>
              <div class="mb-1 text-muted">Sterilizasyon</div>
              <p class="card-text mb-auto">Gıda sterilizasyon ve işleme</p>
              <a href="#">devamını oku</a>
              </div>
            </div>

          </div>

       

        <div class="col-md-4">
            <Takvim/>

        </div>

        </div>

</div>

<iframe
	style={{position:"absolute", bottom:"0px", right:"0"}}
    allow="microphone;"
    width="350"
    height="80%"
    src="https://console.dialogflow.com/api-client/demo/embedded/1fcb06cd-b346-438c-ac30-9a3f9aee45f2">
        
</iframe>


    <CFooter/>
    </div>
  );
}

export default StartUp;
