import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Login.scss';
import '../Home/Home.scss'
import CustomBar from '../../Components/Navbar/CustomBar';
import izmir from '../../izmir.jpg';
import { useHistory } from 'react-router-dom';



class InvestorLogin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      currentEmail:"",
      succ: false

    };
  }

  handlePWChange(event) {
    this.setState({password: event.target.value});
  }
  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  login = () => {
    const {email, password} = this.state;

    let body = {
        "email": email,
        "password": password,
        "type": "investor"
       
    }

      fetch("http://localhost:8080/login", {
        method: "POST",
        body: body
      })
      .then((resp) => {
        console.log(resp);
        return resp.text();
      }) 
      .then((data) => {
        console.log(data);
        this.setState({succ:(data==="SUCCESS")})
      })
      .catch((error) => {
        console.log(error, "catch the hoop")
      })
    
}

  render() {
    const { email, password } = this.state;
    console.log(this.state)
    return (
      <div className="login">
        <CustomBar />
        <div className="App-header">

          <div className="login-cont">
            <img src={izmir} className="log-image" />
            <p>
              <label>Email:</label>
              <input type="text" value={email} onChange={(e) => {this.handleEmailChange(e)}}/>
            </p>

            <p>
              <label>Password:</label>
              <input type="password" id="password" value={password} onChange={(e) => {this.handlePWChange(e)}} />
            </p>
            <p className="button">
              <input type="button" value="Login" onClick={this.login} />
            </p>
            
            <a className="small-sign-up" href="/investor-registration">Don't have an account? 
              <span style={{pointer:"cursor"}}><a onClick={() => {  }} style={{ pointer: "cursor", fontWeight:"600" }}> Sign up </a></span>
            and join our Network!</a>

          </div>
        </div>
      </div>
    );
  }
}

export default InvestorLogin;
