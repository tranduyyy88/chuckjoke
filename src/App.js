import React, { useState, createContext } from "react";
import Header from "./Components/Header/index.tsx";
import "./Assets/css/main.scss";
import "./Assets/css/reset.css";
import Router from "./Router/index.tsx";
import Footer from "./Components/Footer/index.tsx";

export const MContext = React.createContext();

function App() {
  const [dataSearch, setDataSearch] = useState([]);
  const callbackFun = (childData) => {
    setDataSearch(childData);
  };
  return (
    <MContext.Provider value={dataSearch}>
      <div className="App">
        <Header parentCallback={callbackFun} />
        <Router />
        <Footer />
      </div>
    </MContext.Provider>
  );
}

export default App;
