import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CustomBar from '../../Components/Navbar/CustomBar';
import axios from "axios";
import { fetch } from 'isomorphic-fetch';


class Investor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            startups: [["marti", "%99"], ["patatesGetir", "%50"], ["yohey", "asd"]]
        };
    }

    handlePWChange(event) {
        this.setState({ password: event.target.value });
    }
    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    renderCompanies = () => {
        const { startups } = this.state;
        console.log(startups, "asd")
        return (
            <>
            {startups.map((item => {
                console.log(item, "asd")
                return (
                        <div class="compCont" style={{border:"1px solid black", width:"500px", margin:"10px auto auto auto", borderRadius:"10px", textAlign:"left"}}>
                            <span className="span-left">{item[0]}</span>
                            <span className="span-right" style={{position:"relative", right:"10px"}}>{item[1]}</span>
                        </div>
                )


            })



            )}
            </>)


    }



    render() {
        const { email, password } = this.state;
        return (
            <div className="login">
                <CustomBar />
                <div className="App-header">

                  
                        <div>{this.renderCompanies()}</div>

                        <iframe style={{position:"absolute", bottom:"0px", right:"0"}} height="800px" width="500px" src="https://bot.dialogflow.com/1fcb06cd-b346-438c-ac30-9a3f9aee45f2"></iframe>

                </div>
            </div>
        );
    }
}

export default Investor;
