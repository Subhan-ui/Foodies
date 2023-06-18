import React, { useContext } from "react";
import CartContext from "../Reducer/Context";
import "./Main.css";
// import { items1 as items } from "../../App";
import { useState } from "react";
// import contextProvider from "../Reducer/Reducer";

const Main = (props) => {
  const { addToCartHandler } = useContext(CartContext);
  // console.log(items);
  const style = {
    display: "flex",
    flexDirection: "column",
  };
  const capitalize=(cat)=>{
    if (typeof cat !== 'string') {
      return cat; 
    }
    return cat.charAt(0).toUpperCase() + cat.slice(1);
  }

  return (
    <div className="row main same">
      {props.items.map((item) => (
        <div key={item.id} className="main1 col-md-3">
          <div className="my-4 mx-4">
            <div className="card">
              <img
                src={item.img}
                style={{ height: "8rem" }}
                className="card-img-top"
                alt="..."
              />
              <div style={style} className="card-body ">
                <center>
                  <h6 className="card-title">{capitalize(item.Name)}</h6>
                  <p className="card-text">${item.price}</p>
                </center>
                <button
                  onClick={() => {
                    addToCartHandler({
                      id: item.id,
                      name: item.Name,
                      img: item.img,
                      price: item.price,
                      Amount: item.Amount,
                    });
                  }}
                  className="btn btn-sm my-1 btn-outline-primary"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Main;
