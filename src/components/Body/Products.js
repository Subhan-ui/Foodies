import React, { useContext } from "react";
import "./Main.css";
import QRCode from "qrcode.react";
import Items from "./Items";
import "./Products.css";
import CartContext from "../Reducer/Context";

export default function Products() {
  const { items, totalAmount } = useContext(CartContext);
  const QRCodeGenerator = () => {
    const text = totalAmount;
    return <QRCode value={text} />;
  };
  
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className="container1 my-2 same">
        {/* {items.map((item) => { */}
        {/* return ( */}
        <div>
          <h5>your total products are: {items.length}</h5>
          <hr />

          <Items />

          <div className="d-grid container4 gap-2">
            <button
              onClick={() => QRCodeGenerator}
              className="btn btn-outline-danger"
              type="button"
            >
              Continue to Payment
            </button>
          </div>
        </div>

        {/* })} */}
      </div>
    </>
  );
}
