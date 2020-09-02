import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import './Login.scss';
// import '../Home/Home.scss'
import CustomBar from '../../Components/Navbar/CustomBar';
// import izmir from '../../izmir.jpg';

class FikirForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""

    };
  }

  handleAdSoyadChange(event) {
    this.setState({adSoyad: event.target.value});
  }

  handleYasChange(event) {
    this.setState({yas: event.target.value});
  }

  handleTelefonChange(event) {
    this.setState({telefon: event.target.value});
  }

  handleEpostaChange(event) {
    this.setState({eposta: event.target.value});
  }

  handleProjeAdiChange(event) {
    this.setState({projeAdi: event.target.value});
  }

  handleProjeKisacaChange(event) {
    this.setState({projeKisaca: event.target.value});
  }

  handlProjeNedeniChange(event) {
    this.setState({projeNedeni: event.target.value});
  }

  handleProjeKateoriChange(event) {
    this.setState({projeKategori: event.target.value});
  }

  handleProjeMaliyetChange(event) {
    this.setState({projeMaliyet: event.target.value});
  }

  handleProjeYatirimChange(event) {
    this.setState({projeYatirim: event.target.value});
  }



  render() {
    const { adSoyad, yas, telefon, eposta, projeAdi, projeKisaca, projeNedeni, projeKategori, projeMaliyet, projeYatirim} = this.state;
    return (
        <>
        <CustomBar />
          <div class="container">
            <form>
            <div class="form-group">
              <label for="adSoyad">Ad Soyad:</label>
              <input class="form-control" id="adSoyad" type="text" value={adSoyad} onChange={(e) => {this.handleAdSoyadChange(e)}}/>
            </div>

            <div class="form-group">
              <label>Yaş:</label>
              <input class="form-control" type="number" value={yas} onChange={(e) => {this.handleYasChange(e)}}/>
            </div>


            <div class="form-group">
              <label>Telefon:</label>
              <br/>
              <input class="form-control" type="text" value={telefon} onChange={(e) => {this.handleTelefonChange(e)}}/>
            </div>


            <div class="form-group">
              <label>E-posta:</label>
              <br/>
              <input class="form-control" type="email" value={eposta} onChange={(e) => {this.handleEpostaChange(e)}}/>
            </div>

            <div class="form-group">
              <label>Projenizin Adı:</label>
              <br/>
              <input class="form-control" type="text" value={projeAdi} onChange={(e) => {this.handleProjeAdiChange(e)}}/>
            </div>

            <div class="form-group">
              <label>Projenizden kısaca bahseder misiniz?</label>
              <br/>
              <textarea class="form-control" value={projeKisaca} onChange={(e) => {this.handleProjeKisacaChange(e)}}></textarea>
            </div>

            <div class="form-group">
              <label>Projenizi aşağıdaki kategorilerden hangisine yönelik geliştirmektesiniz?</label>
              <br/>
              <select class="form-control" value={projeNedeni} onChange={(e) => {this.handlProjeNedeniChange(e)}}>
                <option value="Şirketim var, ürün geliştirme için kullanmak istiyorum.">Şirketim var, ürün geliştirme için kullanmak istiyorum.</option>
                <option value="Girişimciyim, henüz şirketim yok ve ürün fikrinin prototipini yapmak istiyorum">Girişimciyim, henüz şirketim yok ve ürün fikrinin prototipini yapmak istiyorum</option>
                <option value="Üniversite Dönem veya Bitirme Projem">Üniversite Dönem veya Bitirme Projem</option>
                <option value="Ulusal veya Uluslararası Yarışma ya da etkinlik için yapıyorum">Ulusal veya Uluslararası Yarışma ya da etkinlik için yapıyorum</option>
                <option value="Kişisel meraktan dolayı ve kendimi geliştirmek için">Kişisel meraktan dolayı ve kendimi geliştirmek için</option>
              </select>
            </div>


            <div class="form-group">
              <label>Projeniz içerik olarak hangi kategoriye girer?</label>
              <br/>
              <select class="form-control" value={projeKategori} onChange={(e) => {this.handleProjeKateoriChange(e)}}>
                <option value="Makine, Üretim">Makine, Üretim</option>
                <option value="Endüstriyel Tasarım">Endüstriyel Tasarım</option>
                <option value="Eğitim">Eğitim</option>
                <option value="Nesnelerin interneti">Nesnelerin interneti</option>
                <option value="Arttırılmış Gerçeklik, Sanal Gerçeklik">Arttırılmış Gerçeklik, Sanal Gerçeklik</option>
                <option value="Yenilenebilir Enerji">Yenilenebilir Enerji</option>
                <option value="Kişisel meraktan dolayı ve kendimi geliştirmek için">Kişisel meraktan dolayı ve kendimi geliştirmek için</option>
              </select>
            </div>


            <div class="form-group">
              <label>Projeniz için ne kadar yatırım ihtiyacı öngörüyorsunuz?</label>
              <br/>
              <input class="form-control" type="text" value={projeMaliyet} onChange={(e) => {this.handleProjeMaliyetChange(e)}}/>
            </div>

            <div class="form-group">
              <label>Toplamda ne kadar yatırım aldıniz?</label>
              <br/>
              <input class="form-control" type="text" value={projeYatirim} onChange={(e) => {this.handleProjeYatirimChange(e)}}/>
            </div>




            <input class="form-control" type="button" value="Gönder" onClick={() => { alert(projeMaliyet) }} />
            </form>

          </div>
        </>
    );
  }
}

export default FikirForm;
