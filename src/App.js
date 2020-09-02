import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./Views/Home/Home";
import StartUpLogin from './Views/Login/StartUpLogin';
import InvestorLogin from './Views/Login/InvestorLogin';
import MentorLogin from './Views/Login/MentorLogin';
import InvestorReg from './Views/Register/InvestorReg';
import FikirForm from './Views/Girisimci/FikirForm';
import Investor from './Views/Investor/Investor'

// import Labeled from "./views/LabeledView";
// import ErrorView from "./views/ErrorView";

class App extends React.Component {

  render() {
    return (

       <main>
       <Switch>
           <Route path="/" component={Home} exact />
           <Route path="/start-up-login" component={StartUpLogin} />
           <Route path="/investor-registration" component={InvestorReg} />
           <Route path="/investor-login" component={InvestorLogin} />
           <Route path="/fikir-form" component={FikirForm} />
           <Route path="/investor" component={Investor} />
           <Route component={Home} />
       </Switch>
   </main>
    )
  }
}
export default App;