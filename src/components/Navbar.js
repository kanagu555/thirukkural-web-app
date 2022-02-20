import React from "react";

const Navbar = () => {
  return (
    <div className="ui large menu">
      <a className="active item" href="/">
        Home
      </a>
      <a className="item" href="/about">
        About
      </a>
      <div className="right menu">
        <div className="ui dropdown item">
          Language
          <i className="dropdown icon" />
          <div className="menu">
            <a className="item" href="/">
              Tamil
            </a>
            <a className="item" href="/">
              English
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
