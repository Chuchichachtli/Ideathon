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


                    <div class="col-md-12">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">{item[1]}</strong>
          <h3 class="mb-0">{item[0]}</h3>
          <div class="mb-1 text-muted">Nov 12</div>
          <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="stretched-link">Continue reading</a>
        </div>
      </div>
    </div>
                )


            })



            )}
            </>)


    }



    render() {
        const { email, password } = this.state;
        return (
            <div>
                <CustomBar />
                <div class="container">

                  
                        <div>{this.renderCompanies()}</div>

                   

                </div>
            </div>
        );
    }
}

export default Investor;
