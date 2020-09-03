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
		<div class="row row-striped">
			<div class="col-2 text-right">
				<h1 class="display-4"><span class="badge badge-secondary">23</span></h1>
				<h2>OCT</h2>
			</div>
			<div class="col-10">
				<h3 class="text"><strong>Girişimciliğin Bilinmeyenleri Semineri</strong></h3>
				<ul class="list-inline">
				    <li class="list-inline-item"><i class="fa fa-calendar-o" aria-hidden="true"></i> Pazartesi</li>
					<li class="list-inline-item"><i class="fa fa-clock-o" aria-hidden="true"></i> 12:30 - 14:00 </li>
					<li class="list-inline-item"><i class="fa fa-location-arrow" aria-hidden="true"></i>  FabLab</li>
				</ul>
				<p>Önemli girişimlere imza atmış konuşmacıların, her zaman anlatılanların dışına çıkacağı ve ardından AMA(istediğini sorabilirsin) formatında ilerleneceği ufkunuzu açaabilecek bir etkinlik.</p>
			</div>
		</div>
		<div class="row row-striped">
			<div class="col-2 text-right">
				<h1 class="display-4"><span class="badge badge-secondary">27</span></h1>
				<h2>OCT</h2>
			</div>
			<div class="col-10">
				<h3 class="text-uppercase"><strong>Operations Meeting</strong></h3>
				<ul class="list-inline">
				    <li class="list-inline-item"><i class="fa fa-calendar-o" aria-hidden="true"></i> Friday</li>
					<li class="list-inline-item"><i class="fa fa-clock-o" aria-hidden="true"></i> 2:30 PM - 4:00 PM</li>
					<li class="list-inline-item"><i class="fa fa-location-arrow" aria-hidden="true"></i> Room 4019</li>
				</ul>
				<p>Fablab aylık operasyon toplantısı.</p>
			</div>
		</div>
	</div>
	
          </>
          
</>
    );
}

export default Takvim;
