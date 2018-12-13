import React from 'react';
import { hot } from 'react-hot-loader';
import Submit from './submit/components/submit';
import Navbar from './navbar/components/nagvar';
import Search from './search/components/search';


function App(props){
  return(
  <div class="grad">
    <Navbar/>
    <h1 id="tituloHomepage">Bienvenido</h1>
    <Submit/>
    <Search/>
  </div>
  )
}

export default hot(module)(App);
