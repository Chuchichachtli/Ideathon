import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import '../Login/Login.scss';
// import '../Home/Home.scss'
import CustomBar from '../../Components/Navbar/CustomBar';
import izmir from '../../izmir.jpg';
// import {fetch } from "isomorphic-fetch";
// import {Auth_Actions, FormData} from "form-data"
import axios from "axios";


class InvestorReg extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      ilgi: [],
      currentIlgi : "",
      succ: false
    };
  }
  signup = () => {
        const {email, password, name, ilgi} = this.state;

        let body = {
            "email": email,
            "password": password,
            "name": name,
            "type": "investor",
            "topics": ilgi
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
  
  loginSucc = (response) => {
    if(response.data === "SUCCESS"){
        this.setState({succ: true, password:""});
    }
    console.log(this.state.succ)
};



  handlePWChange(event) {
    this.setState({password: event.target.value});
  }
  handleNameChange(event) {
    this.setState({name: event.target.value});
  }
  handleIlgiChange(event) {
    this.setState({currentIlgi: event.target.value});
  }
  handleEmailChange(event) {
    this.setState({email: event.target.value});
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

  renderTopics(){  
      const { ilgi } = this.state;  
        console.log(this.state);
      return ( ilgi.map((item=> {
          return ( 
            <div  class="alert alert-success" role="alert">
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
            </div>  
          )
      }))
      )
      

  }


  render() {
    const { email, password, name, ilgi, currentIlgi, succ } = this.state;
    return (
      <>
        <CustomBar />
        <div class="container">

          <form>
            {/* <img src={izmir} className="log-image" /> */}
            <div class="form-group">
              <label>Email:</label>
              <input class="form-control" type="text" value={email} onChange={(e) => {this.handleEmailChange(e)}}/>
            </div>
            <div class="form-group">
              <label>Full Name:</label>
              <input class="form-control" type="text" value={name} onChange={(e) => {this.handleNameChange(e)}}/>
            </div>
            <div class="form-group">
              <label>Password:</label>
              <input class="form-control" type="password" id="password" value={password} onChange={(e) => {this.handlePWChange(e)}} />
            </div>
            {this.renderTopics()}
            <div class="form-group">
              <label>İlgi Alanlarınız:</label>
              <input class="form-control" type="text" value={currentIlgi} onChange={(e) => {this.handleIlgiChange(e)}} onKeyPress={this.enterPressed.bind(this)}/>
            </div>
            {succ ? <p style={{textAlign:"center"}} className="text-success">Kayıt başarılı.</p> : null}

            
            <input class="btn btn-default" type="button" value="Register" onClick={this.signup} />


            {/* <span className="small-sign-up">Don't have an account? 
              <span style={{pointer:"cursor"}}><a onClick={() => { console.log("dummy sign up") }} style={{ pointer: "cursor", fontWeight:"600" }}> Sign up </a></span>
            and join our Network!</span> */}

          </form>


        </div>
      </>
    );
  }
}

export default InvestorReg;
