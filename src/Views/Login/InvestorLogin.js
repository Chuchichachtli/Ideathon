import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import "../../hoppa.scss";
import CustomBar from '../../Components/Navbar/CustomBar';
import izmir from '../../izmir.jpg';
import { useHistory } from 'react-router-dom';
import CFooter from '../../Components/CFooter';



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
      <div className="bg-div">
        <CustomBar />
        <div class="container">

          <form>
            <div class="form-group">
              <label for="email">Email:</label>
              <input class="form-control" type="email" id="email" value={email} onChange={(e) => {this.handleEmailChange(e)}}/>
            </div>

            <div class="form-group">
              <label>Password:</label>
              <input class="form-control" type="password" id="password" value={password} onChange={(e) => {this.handlePWChange(e)}} />
            </div>
            <a href="/investor">
            <input class="btn btn-default bg-light" type="button" style={{marginRight:"10px"}} value="Login" onClick={this.login} />
            </a>
            <a className="small-sign-up" href="/investor-registration">Don't have an account? 
              <span style={{pointer:"cursor"}}><a onClick={() => {  }} style={{ pointer: "cursor", fontWeight:"600" }}> Sign up </a></span>
            and join our Network!</a>

          </form>
        </div>
        <CFooter/>
      </div>
    );
  }
}

export default InvestorLogin;
