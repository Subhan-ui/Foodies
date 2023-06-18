import React, { useContext } from "react";
import CartContext from "../Reducer/Context";
import "./Main.css";
import { items } from "../../App";
// import contextProvider from "../Reducer/Reducer";

const Main=()=> {
  // console.log(items);
  const { addToCartHandler } = useContext(CartContext);
  return (
    <div className="row main same">
      {items.map((item) => 
        (
          <div key={item.id} className="col-md-3">
            <div className="my-3">
              <div
                className="card"
                style={{ width: "13rem", height: "16.5rem" }}
              >
                <img
                  src={item.img}
                  style={{ height: "8rem" }}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{item.Name}</h5>
                  <p className="card-text">${item.price}</p>
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
                    className="btn btn-sm btn-primary"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
export default Main