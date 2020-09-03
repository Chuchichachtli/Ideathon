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
	<div class="container bg-light">
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
		</div>	<div class="row row-striped" style={{marginBottom:"10px"}}>
			<div class="col-2 text-right">
				<h3 class="display-10"><span class="badge badge-secondary">1-3</span></h3>
				<h5>EYL</h5>
			</div>
			<div class="col-10">
				<h5 class="text"><strong>FikrimİZ Ideathon</strong></h5>
				<ul class="list-inline">
				    <li class="list-inline-item"><i class="fa fa-calendar-o" aria-hidden="true"></i> Salı </li>
					<li class="list-inline-item"><i class="fa fa-clock-o" aria-hidden="true"></i> 9:00 - 23:00 </li>
					<li class="list-inline-item"><i class="fa fa-location-arrow" aria-hidden="true"></i> Tarihi Havagazı Fabrikası </li>
				</ul>
				<p>İzmir Havagazı Fabrikası, Gençlik Yerleşkesi ve FikrimİZ önkuluçka merkezi Fikrimİz Ideathon etkinliği 01-02-03 Eylül tarihlerinde 60 gencin katılımı, ilham verici konuşmacılar, eğitimler ve gençlerin ekip çalışması ile fikir maratonunda projelerini jüriye sunacakları 3 günlük bir program ile gerçekleşecektir.</p>
			</div>
		</div>	
	</div>
	
          </>
          
</>
    );
}

export default Takvim;
