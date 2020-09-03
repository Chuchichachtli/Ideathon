import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';  


function Takvim() {
  return (
<>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet"/>	
                <>
	<div class="container">
		<div class="row row-striped" style={{marginBottom:"10px"}}>
			<div class="col-2 text-right">
				<h3 class="display-10"><span class="badge badge-secondary">14</span></h3>
				<h5>EKM</h5>
			</div>
			<div class="col-10">
				<h5 class="text"><strong>Girişimciliğin Bilinmeyenleri Semineri</strong></h5>
				<ul class="list-inline">
				    <li class="list-inline-item"><i class="fa fa-calendar-o" aria-hidden="true"></i> Pazartesi</li>
					<li class="list-inline-item"><i class="fa fa-clock-o" aria-hidden="true"></i> 12:30 - 14:00 </li>
					<li class="list-inline-item"><i class="fa fa-location-arrow" aria-hidden="true"></i>  FabLab</li>
				</ul>
				<p>Önemli girişimlere imza atmış konuşmacıların, her zaman anlatılanların dışına çıkacağı ve ardından AMA(istediğini sorabilirsin) formatında ilerleneceği ufkunuzu açabilecek bir etkinlik.</p>
			</div>
		</div>	
	</div>
	
          </>
          
</>
    );
}

export default Takvim;
