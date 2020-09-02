import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Login.scss';
import '../Home/Home.scss'
import CustomBar from '../../Components/Navbar/CustomBar';
import izmir from '../../izmir.jpg';
import axios from "axios";

class InvestorLogin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      currentEmail:""

    };
  }

  handlePWChange(event) {
    this.setState({password: event.target.value});
  }
  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  login() {
    const {email, password,currentEmail} = this.state;



    let body = {
        "email": email,
        "password": password,
        "type": "investor",
    }

      axios({
        method: 'post',
        url: 'http://localhost:8080/login',
        data: body
      })
    .then(function (response) {
        console.log(response);


// if succc
// localStorage.setItem(key, JSON.stringify(result.hits));

// onSearch = event => {
//   event.preventDefault();

//   const currentEmail = localStorage.getItem("email");
//  console.log(currentEmail);
//   if (currentEmail) {
//     this.setState({ currentEmail: JSON.parse(currentEmail) });
//   } else {
//      axios({
//   method: 'post',
//   url: 'http://localhost:8080/login',
//   data: body
// })
// .then(function (response) {
//   console.log(response);
//       .then(result => this.onSetResult(result, query));
//   }
// };

// onSetResult = (result, key) => {
//   localStorage.setItem(key, JSON.stringify(result.hits));

//   this.setState({ hits: result.hits });
// };



      })
      .catch(function (error) {
        console.log(error);
      });


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
            
            <a className="small-sign-up" href="/investor-registration">Don't have an account? 
              <span style={{pointer:"cursor"}}><a onClick={() => { console.log("dummy sign up") }} style={{ pointer: "cursor", fontWeight:"600" }}> Sign up </a></span>
            and join our Network!</a>

          </div>


        </div>
      </div>
    );
  }
}

export default InvestorLogin;
