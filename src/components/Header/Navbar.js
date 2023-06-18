import React from "react";
import "./Navbar.css";
import img from "../../mar.jpg";
export default function Navbar() {
  return (
    <nav
    className="gradient"
      style={{
        // border: "2px solid black",
        display: "flex",
        width: " 100vw ",
        alignItems: "center",
        justifyContent: "space-between",
        padding:' 1rem 1rem ',
        background: "linear-gradient(to right,#bdc3c7 → #2c3e50)",
      }}
    >
      <div>
        <img src={img} className="logo" width={"36vh"} alt="" />
      </div>
        <div style={{padding:'0px 5vw 0px 0px'}}>
      <input
        id="box"
        placeholder="Search Something"
        className="searchBox"
        type="text"
      />

      <button className="btn-search">
        <i className="fa fa-search"></i>
      </button>
      </div>
      <button className="btn-search qr">
        <i className="bi bi-qr-code"></i>
      </button>

      <button className="btn-add">
        <i className="fa fa-plus"></i> Add New Items
      </button>
<div>Total orders</div>
    </nav>
  );
}
