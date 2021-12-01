import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";

function App() {
  const [kural, setKural] = useState([]);
  const [kuralNumber, setKuralNumber] = useState(1);

  useEffect(() => {
    axios
      .get(`https://api-thirukkural.vercel.app/api?num=${kuralNumber}`)
      .then((response) => {
        console.log(response.data);
        setKural(response.data);
      });
  }, [kuralNumber]);

  const nextKural = () => {
    setKuralNumber(kuralNumber + 1);
  };

  return (
    <div>
      <Navbar />
      <h1>Thirukkural</h1>
      <h3>{kural.chap_tam}</h3>
      <h3>{kural.line1}</h3>
      <h3>{kural.line2}</h3>
      <button onClick={nextKural}>Next Kural</button>
    </div>
  );
}

export default App;
