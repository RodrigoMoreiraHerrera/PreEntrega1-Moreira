import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

import '../src/scss/custom.css'
//import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyAL9Z-1J9ZRimodF6C5uTcFqr-zrHh_2NQ",
  authDomain: "dbproyecto-7b701.firebaseapp.com",
  projectId: "dbproyecto-7b701",
  storageBucket: "dbproyecto-7b701.appspot.com",
  messagingSenderId: "884844260092",
  appId: "1:884844260092:web:5d92c4ac8855f1d2578579",
  measurementId: "G-QP0DWB87TS"
};


initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
