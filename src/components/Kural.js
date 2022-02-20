import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Kural.css";

const Kural = () => {
  const [kural, setKural] = useState([]);
  const [kuralNumber, setKuralNumber] = useState(1);

  useEffect(() => {
    axios
      .get(`https://api-thirukkural.vercel.app/api?num=${kuralNumber}`)
      .then((response) => setKural(response.data))
      .catch((err) => console.log(err));
  }, [kuralNumber]);

  const onPrevKural = () => {
    setKuralNumber(kuralNumber - 1);
  };

  const onNxtKural = () => {
    setKuralNumber(kuralNumber + 1);
  };

  return (
    <div className="flex-card">
      <div className="ui input">
        <input type="text" className="form-control" />
        <button className="ui button">Search</button>
      </div>

      <div className="ui card card-size">
        <div className="content">
          <div className="header">குறள் எண் : {kural.number}</div>
        </div>

        <table className="ui celled table flex-cont">
           <thead>
             <tr>
          <th className="header">பகுதி :<br/> {kural.sect_tam}</th>
          <th className="header">அத்தியாயம் தொகுதி :<br/> {kural.chapgrp_tam}</th>
          <th className="header">அத்தியாயம் :<br/> {kural.chap_tam}</th>
          </tr>
          </thead>
        </table>

        <div className=" kural-cont">
          <div className="flex-kural">{kural.line1}</div>
          <div className="flex-kural">{kural.line2}</div>
        </div>
        <div className="extra content prev-next-btn">
          <button
            className="ui primary button"
            disabled={kuralNumber < 2}
            onClick={onPrevKural}
          >
            Previous Kural
          </button>
          <button className="ui primary button nxt-btn" onClick={onNxtKural}>
            Next Kural
          </button>
        </div>
      </div>
      <div className="ui buttons share-btn">
        <button className="ui red button">Download Image</button>
        <div className="or"></div>
        <button className="ui green button">Share Image</button>
      </div>
    </div>
  );
};

export default Kural;
