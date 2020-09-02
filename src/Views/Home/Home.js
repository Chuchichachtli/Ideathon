import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';  
// import './Home.scss';
import CustomBar from '../../Components/Navbar/CustomBar';
import koneksin from '../../koneksin.jpg'

function Home() {
  return (
    <div className="App">
      <CustomBar/>
      <header className="App-header">
         
         
         {/* <img className="main-image" src={koneksin}/> */}
        <div className="show">
          
        </div>
      
      
      </header>
    </div>
  );
}

export default Home;
