import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import './styles/Index.css'



ReactDOM.render(
  <React.StrictMode>
    <div className="stars"></div>
    <div className="stars2"></div>
    <div className="stars3"></div>
    <Layout />
  </React.StrictMode>,
  document.getElementById("root")
);
