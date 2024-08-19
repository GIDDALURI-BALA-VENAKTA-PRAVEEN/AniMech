import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/jquery/dist/jquery';
import '../node_modules/bootstrap/dist/js/bootstrap.js'

import { App } from './App';
import { Card } from 'react-bootstrap';
import { CarosuleSlider } from './Components/Home/CarosuleSlider.jsx';
import {Final} from './Components/About/Final';
import Home_Main from './Components/Home/Home_Main.jsx';
import { Main } from './Components/Demo/Main';
import MainCards from './Components/Project/MainCards';
import MainContact from './Components/ContactPages/MainContact';
import { ProjectVideo } from './Components/Project/ProjectVideo';
import Project_Final from './Components/Project/Project_Final';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { CompanySlider } from './Components/CompanyLogo/CompanySlider.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>
);

reportWebVitals();
