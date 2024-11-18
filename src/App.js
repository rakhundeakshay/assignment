import React from "react";
import "./App.css";
import data from "./config";
import Dashboard from "./component/Dashboard";
import SideMenu from "./component/SideMenu"
 
const App = () => {  
  return (
    <div className="dashboard">
      <SideMenu />
      <Dashboard data={data} />     
    </div>
  );
};

export default App;
