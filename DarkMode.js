import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import Para from './Para';

export let myContext= createContext();
// console.log(myContext, myContext instanceof Object, Object.keys(myContext), Object.keys(myContext).length, myContext.Provider, myContext.Consumer);

function App() {
  let [theme, setTheme]= useState("Light");

  return (

    <myContext.Provider value={{theme, setTheme}}>

        <div className="App" style={{backgroundColor: theme==="Light"?"white":"black", minHeight: "100vh"}}>

          <button onClick={()=> setTheme((prev)=> prev==="Light"?"Dark":"Light")} style={{paddingTop: "0.3rem", paddingBottom: "0.3rem", margin: "1rem", backgroundColor: theme==="Light"?"black":"white", color: theme==="Light"?"white":"black", border: "none", borderRadius: "0.2rem"}}>
            {theme=="Light"? "Dark": "Light"} Mode
          </button>

          <Para/>
          <Para/>
          <Para></Para>
        </div>
    </myContext.Provider>
  );
}

export default App;
