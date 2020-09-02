import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';  
// import './Home.scss';
import CustomBar from '../../Components/Navbar/CustomBar';
import koneksin from '../../koneksin.jpg'

function StartUp() {
  return (
    <>
      <CustomBar/>

<div class="row">

<div class = "column">
    <button></button>
</div>

<iframe
    class="column"
	style={{position:"absolute", bottom:"0px", right:"0"}}
    allow="microphone;"
    width="350"
    height="80%"
    src="https://console.dialogflow.com/api-client/demo/embedded/1fcb06cd-b346-438c-ac30-9a3f9aee45f2">
        
</iframe>

</div>
    </>
  );
}

export default StartUp;
