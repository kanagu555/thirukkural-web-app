import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";

function App() {
  const [kural, setKural] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api-thirukkural.vercel.app/api?num=1`)
      .then((response) => {
        console.log(response.data);
        setKural(response.data);
      });
  }, []);

 

  return (
    <div>
      <Navbar />
      <h1>Thirukkural</h1>
      <h3>{kural.chap_tam}</h3>
      <h3>{kural.line1}</h3>
      <h3>{kural.line2}</h3>
      
    </div>
  );
}

export default App;
