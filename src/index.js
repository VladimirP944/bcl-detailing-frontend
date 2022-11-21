import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Galery from "./components/Galery";
import Services from "./components/Services";
import Contact from "./components/Contact";
import DetailingInterior from "./components/DetailingInterior";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <App />
);

