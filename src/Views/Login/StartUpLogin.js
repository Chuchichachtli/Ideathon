import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import './Login.scss';
// import '../Home/Home.scss'
import CustomBar from '../../Components/Navbar/CustomBar';
import izmir from '../../izmir.jpg';
import CFooter from '../../Components/CFooter';

class StartUpLogin extends Component {

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
            <input class="btn btn-default" type="button" value="Login" onClick={this.login} />
            
            <a className="small-sign-up" href="/start-up-registration">Don't have an account? 
              <span style={{pointer:"cursor"}}><a onClick={() => {  }} style={{ pointer: "cursor", fontWeight:"600" }}> Sign up </a></span>
            and join our Network!</a>

          </form>
        </div>
        <CFooter/>
      </div>
    );
  }
}

export default StartUpLogin;
