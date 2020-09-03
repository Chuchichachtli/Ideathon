import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import './Login.scss';
// import '../Home/Home.scss'
// import CustomBar from '../../Components/Navbar/CustomBar';
// import izmir from '../../izmir.jpg';

class FikirForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      eposta: "",
      password: "",
      adSoyad:"",
      yas: 0,
      telefon: "",
      projeKisaca:"",
      projeNedeni:"",
      projeKategori:"",
      projeMaliyet: "",
      projeKeywords : [],
      currentIlgi: "",
      ilgi:[]
      

    };
  }
  handleIlgiChange(event) {
    this.setState({currentIlgi: event.target.value});
  }
  addTopic(){
    const { currentIlgi, ilgi } = this.state;
    if(currentIlgi === ""){
        return
    }else{
        let newIlgi = ilgi;
        newIlgi.push(currentIlgi);
        this.setState({ilgi: newIlgi, currentIlgi:""});
    }
}
enterPressed(event) {
  var code = event.keyCode || event.which;
  if(code === 13) { //13 is the enter keycode
      this.addTopic();
  } 
}
  signup = () => {
    const {eposta, password, name, ilgi, projeKisaca, projeKategori} = this.state;
    
    let body = {
        "projeAdi": eposta,
        "projeMetni": projeKisaca,
        "projeKeywords": ilgi, 
        "projeKategori": projeKategori
    }

      fetch("http://localhost:8080/signup", {
        method: "POST",
        body: body
      })
      .then((resp) => {
        console.log(resp);
        return resp.text();
      }) 
      .then((data) => {
        console.log(data);
        if(data==="SUCCESS")
        this.setState({succ: true});
      })
      .catch((error) => {
        console.log(error, "catch the hoop")
      })
    
}
renderTopics = ()=>{  
  const { ilgi } = this.state;  
    console.log(this.state);
  return ( ilgi.map((item=> {
      return ( 
        <p style={{textAlign:"center", border:"1px solid purple", borderRadius:"5px"}}>
          <label>{item}</label>
              <span style={{ float: "right", marginRight: "10px", cursor: "pointer" }}
                  onClick={() => {
                      let x = ilgi.findIndex(item);
                      if (x !== -1) {
                          let newIlgi = ilgi.splice(x, 1)
                          this.setState({ ilgi: newIlgi });
                      }
                  }
                  }
              >X</span>
        </p>  
      )
  }))
  )
}

  handleAdSoyadChange = (event) => {
    this.setState({adSoyad: event.target.value});
  }

  handleYasChange = (event)=> {
    this.setState({yas: event.target.value});
  }

  handleTelefonChange = (event) => {
    this.setState({telefon: event.target.value});
  }

  handleEpostaChange = (event) => {
    this.setState({eposta: event.target.value});
  }

  handleProjeKisacaChange = (event) => {
    this.setState({projeKisaca: event.target.value});
  }

  handlProjeNedeniChange = (event) => {
    this.setState({projeNedeni: event.target.value});
  }

  handleProjeKateoriChange = (event) => {
    this.setState({projeKategori: event.target.value});
  }

  handleProjeMaliyetChange = (event) => {
    this.setState({projeMaliyet: event.target.value});
  }


  render =() => {
    const { adSoyad, yas, telefon, eposta, projeKisaca, projeNedeni, projeKategori, projeMaliyet} = this.state;
    return (
      <div>
        {/* <CustomBar /> */}
        <div>

          <div>

            <p>
              <label>Ad Soyad:</label>
              <br/>
              <input type="text" value={adSoyad} onChange={(e) => {this.handleAdSoyadChange(e)}}/>
            </p>

            <p>
              <label>Yaş:</label>
              <br/>
              <input type="number" value={yas} onChange={(e) => {this.handleYasChange(e)}}/>
            </p>


            <p>
              <label>Telefon:</label>
              <br/>
              <input type="text" value={telefon} onChange={(e) => {this.handleTelefonChange(e)}}/>
            </p>


            <p>
              <label>E-posta:</label>
              <br/>
              <input type="email" value={eposta} onChange={(e) => {this.handleEpostaChange(e)}}/>
            </p>

            <p>
              <label>Projenizden kısaca bahseder misiniz?</label>
              <br/>
              <textarea value={projeKisaca} onChange={(e) => {this.handleProjeKisacaChange(e)}}></textarea>
            </p>

            <p>
              <label>Projenizi aşağıdaki kategorilerden hangisine yönelik geliştirmektesiniz?</label>
              <br/>
              <select value={projeNedeni} onChange={(e) => {this.handlProjeNedeniChange(e)}}>
                <option value="Şirketim var, ürün geliştirme için kullanmak istiyorum.">Şirketim var, ürün geliştirme için kullanmak istiyorum.</option>
                <option value="Girişimciyim, henüz şirketim yok ve ürün fikrinin prototipini yapmak istiyorum">Girişimciyim, henüz şirketim yok ve ürün fikrinin prototipini yapmak istiyorum</option>
                <option value="Üniversite Dönem veya Bitirme Projem">Üniversite Dönem veya Bitirme Projem</option>
                <option value="Ulusal veya Uluslararası Yarışma ya da etkinlik için yapıyorum">Ulusal veya Uluslararası Yarışma ya da etkinlik için yapıyorum</option>
                <option value="Kişisel meraktan dolayı ve kendimi geliştirmek için">Kişisel meraktan dolayı ve kendimi geliştirmek için</option>
              </select>
            </p>


            <p>
              <label>Projeniz içerik olarak hangi kategoriye girer?</label>
              <br/>
              <select value={projeKategori} onChange={(e) => {this.handleProjeKateoriChange(e)}}>
                <option value="Makine, Üretim">Makine, Üretim</option>
                <option value="Endüstriyel Tasarım">Endüstriyel Tasarım</option>
                <option value="Eğitim">Eğitim</option>
                <option value="Nesnelerin interneti">Nesnelerin interneti</option>
                <option value="Arttırılmış Gerçeklik, Sanal Gerçeklik">Arttırılmış Gerçeklik, Sanal Gerçeklik</option>
                <option value="Yenilenebilir Enerji">Yenilenebilir Enerji</option>
                <option value="Kişisel meraktan dolayı ve kendimi geliştirmek için">Kişisel meraktan dolayı ve kendimi geliştirmek için</option>
              </select>
            </p>

            <p>
              <label>Projeniz içerik olarak hangi kategoriye girer? Birden fazla ekleyebilirsiniz.</label>
              <br/>
              <textarea value={this.state.currentIlgi} onChange={(e) => {this.handleIlgiChange(e)}}></textarea>
            </p>
            {this.renderTopics}


            <p>
              <label>Projeniz için ne kadar maliyet öngörüyorsunuz?</label>
              <br/>
              <input type="text" value={projeMaliyet} onChange={(e) => {this.handleProjeMaliyetChange(e)}}/>
            </p>




            <p>
              <input type="button" value="Gönder" onClick={() => { alert(projeMaliyet) }} />
            </p>

          </div>


        </div>
      </div>
    );
  }
}

export default FikirForm;
