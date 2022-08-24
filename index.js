import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Prop_and_type02 from './Components/Prop_and_type02';
import App from './App';
import Navbar from './Components/Props_and_type';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <
    React.StrictMode > { /* <Prop_and_type02 Name="Om Adlak"/> */ } <
    App / > { /* <Navbar name="Mayur" age="15" college="GHSS" profile="Linkdeln"/> */ }

    <
    /React.StrictMode>
);

reportWebVitals();