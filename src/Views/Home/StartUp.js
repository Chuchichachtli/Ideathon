import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';  
// import './Home.scss';
import CustomBar from '../../Components/Navbar/CustomBar';
import koneksin from '../../koneksin.jpg'

function StartUp() {
  return (
    <>
      <CustomBar/>
<div class="container">
<div class="row">
<div class="column">

    <div class="col-md-4">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-success">
        <div class="col p-4 d-flex flex-column position-static">
          {/* <strong class="d-inline-block mb-2 text-primary">Başvuru</strong> */}
          <h3 class="mb-0 text-white">Fikrinizi Girin</h3>
          <p class="card-text mb-auto text-white">Fikrinizi bizimle paylaşıp, sistemimizdeki yatırımcıların ilgisini çekin.</p>
          <a href="/fikir-form" class="stretched-link"></a>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">Bilgi</strong>
          <h3 class="mb-0">FabLab</h3>
          <p class="card-text mb-auto">FabLab, üretim laboratuvarı anlamına gelen “Fabrication Laboratory”nin kısaltmasıdır. Aynı zamanda “Fabulous Laboratory” (Muhteşem Laboratuvar) biçiminde de açıklanan FabLab, piyasadaki üretim için geliştirilmiş yazılım ve süreçlere bağlı makine ve parçalardan oluşturulmuş bir çeşit atölyedir. MIT (Massachussets Institute of Technology) tarafından kurulmuş olan CBA'da (Center for Bits and Atoms) Prof. Neil Gershenfeld'in verdiği “How to do (almost) anything" dersinden yola çıkılarak geliştirilmiştir.
</p>
          <a href="#" class="stretched-link">Okuamaya devam et</a>
        </div>
      </div>
    </div>

    </div>

    <div class="col-md-4">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">Bilgi</strong>
          <h3 class="mb-0">FabLab</h3>
          <p class="card-text mb-auto">FabLab, üretim laboratuvarı anlamına gelen “Fabrication Laboratory”nin kısaltmasıdır. Aynı zamanda “Fabulous Laboratory” (Muhteşem Laboratuvar) biçiminde de açıklanan FabLab, piyasadaki üretim için geliştirilmiş yazılım ve süreçlere bağlı makine ve parçalardan oluşturulmuş bir çeşit atölyedir. MIT (Massachussets Institute of Technology) tarafından kurulmuş olan CBA'da (Center for Bits and Atoms) Prof. Neil Gershenfeld'in verdiği “How to do (almost) anything" dersinden yola çıkılarak geliştirilmiştir.
</p>
          <a href="#" class="stretched-link">Okuamaya devam et</a>
        </div>
      </div>
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



    </>
  );
}

export default StartUp;
