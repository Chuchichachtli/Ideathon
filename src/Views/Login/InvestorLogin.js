import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Login.scss';
import '../Home/Home.scss'
import CustomBar from '../../Components/Navbar/CustomBar';
import izmir from '../../izmir.jpg';

class InvestorLogin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""

    };
  }

  handlePWChange(event) {
    this.setState({password: event.target.value});
  }
  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  render() {
    const { email, password } = this.state;
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
              <input type="button" value="Login" onClick={() => { console.log("login") }} />
            </p>
            <span className="small-sign-up">Don't have an account? 
              <span style={{pointer:"cursor"}}><a onClick={() => { console.log("dummy sign up") }} style={{ pointer: "cursor", fontWeight:"600" }}> Sign up </a></span>
            and join our Network!</span>

          </div>


        </div>
      </div>
    );
  }
}

export default InvestorLogin;
