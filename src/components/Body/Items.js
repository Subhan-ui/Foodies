import React, { useContext } from "react";
import "./Main.css";
import "./Products.css";
import QRCode from "qrcode.react";
import CartContext from "../Reducer/Context";

export default function Items() {
  const { quantityIncrease, items, totalAmount, quantityDecrease, removeItem } =
    useContext(CartContext);
  const QRCodeGenerator = () => {
    const text = totalAmount;
    return <QRCode value="text" />;
  };
  // if (!Array.isArray(props.items)) {

  //     return null;
  //   }
const capitalize =(cat)=>{
  return cat.charAt(0).toUpperCase()+cat.slice(1)
}
  return (
    <>
      <div className="container2">
        {items.map((item) => {
          return (
            <div className="hello" key={item.id}>
              <ul className="list">
                <li>
                  <img className="img" src={item.img} alt="" />
                </li>
                <li>
                  <h5>{capitalize(item.name)}</h5>
                  <div className="price">
                    <p>${item.price}</p>
                    <p>${(item.price * item.Amount).toFixed(2)}</p>
                  </div>
                </li>
                <div className="adddelete">
                  <button
                    onClick={() => quantityIncrease(item.id)}
                    className="close1"
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                  <input type="text" value={item.Amount} className="number" readOnly/>{" "}
                  <button
                    onClick={() => quantityDecrease(item.id)}
                    className="close2"
                  >
                    <i className="fa fa-minus"></i>
                  </button>
                </div>
                <div className="closeButton">
                  <button onClick={() => removeItem(item.id)} className="close">
                    <i className="fa fa-close"></i>
                  </button>
                </div>
              </ul>
            </div>
          );
        })}
      </div>
      <div className="container3">
        <center>Total Amount: </center>
        <center>
          <pre className="para" style={{ padding: "10px" }}>
            {" "}
            ${totalAmount.toFixed(2)}
          </pre>
        </center>
      </div>
    </>
  );
}
