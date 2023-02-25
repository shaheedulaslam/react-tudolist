import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import Welcome from "./Welcome";
import Counternew from './Counternew';
import Bt from './bt';



  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <React.StrictMode>
     <Welcome title = "Welcome"/>
     <hr/>
    <App/>
    <hr/>
    {/* <Bt/> */}
    <Counternew/>
  </React.StrictMode>
);



