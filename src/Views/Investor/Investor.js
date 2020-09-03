import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CustomBar from '../../Components/Navbar/CustomBar';
import axios from "axios";

class Investor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            startups: [["marti", "%99", "item3"], ["patatesGetir", "%50", "item4"], ["yohey", "asd", "item5"]],
            Results : ""
        };

        fetch("http://localhost:8080/getStartUps", {
        method: "GET",
      })
      .then((resp) => {
        return resp.json()
      }) 
      .then((data) => {
        console.log(data);
        this.setState({startups: data});
      })
      .catch((error) => {
        console.log(error, "catch the hoop")
      })
    }

    handlePWChange(event) {
        this.setState({ password: event.target.value });
    }
    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    renderCompanies = () => {
        const { startups } = this.state;
        console.log(startups, "asddd")
        return (
            <>
                <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Arama</span>
                </div>
                <input type="text" class="form-control" placeholder="Nasıl fikirler görmek istersiniz?" aria-label="keywords" aria-describedby="basic-addon1"/>
                </div>             

            {startups.map((item => {
                console.log(item, "asd")
                return (
                    <div class="col-md-12">
                        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class="col p-4 d-flex flex-column position-static">
                                <strong class="d-inline-block mb-2 text-primary">{item.projeAdi}</strong>
                                <h3 class="mb-0">{item.projeAdi}</h3>
                                <div class="mb-1 text-muted">Nov 12</div>
                                <p class="card-text mb-auto">{item.projeMetni}</p>
                                <a href="#" class="stretched-link">Devamını oku</a>
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
