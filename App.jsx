import React from 'react';
//import Prop_and_type02 from './Components/Prop_and_type02';
import './App.css';
import State_in_react from './Components/State_in_react';
// import Navbar from './Components/Props_and_type';


function App(props) {
  return (
    <div className="container mt-5">
      <header className="">
        <h3>Enter Your Text Below </h3>
        <State_in_react head="Write Somthing"/>
       {/* <Navbar name="Mayur" college="OIST" age='10'/> */}
        {/* <Prop_and_type02 Name="Om Adlak"/> */}
      </header>
    </div>
  );
}

export default App;
