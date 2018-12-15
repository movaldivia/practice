import React from 'react';
import { hot } from 'react-hot-loader';
import Submit from './submit/components/submit';
import Navbar from './navbar/components/nagvar';
import Search from './search/components/search';
import Particles from 'react-particles-js';

function App(props){
  return(
  <div className="grad">

    <Navbar/>
    <h1 id="tituloHomepage">BIENVENIDO</h1>
    <Submit/>
    
    
    {/* <Search/> */}
    
    <Particles className="hola" params={{
            "particles":{
              "number":{
                "value":100
              },
              "size":{
                "value":3
              }
            },
      	    "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "repulse"
                  }
              }
          }
    }}
    
    />

  </div>
  )
}

export default hot(module)(App);
