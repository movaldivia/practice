import React from 'react';
import { hot } from 'react-hot-loader';
import Submit from './submit/components/submit';
import Navbar from './navbar/components/nagvar';


function App(){
  return(
  <div class="grad">
    <Navbar/>
    <h1 id="tituloHomepage">Bienvenido</h1>
    <Submit/>
  </div>
  )
}

export default hot(module)(App);
