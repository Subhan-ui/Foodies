import React, { useContext, useEffect, useRef, useState } from "react";
import "./Main.css";

import Items from "./Items";
import "./Products.css";
import CartContext from "../Reducer/Context";
import Table from "react-bootstrap/Table";
import Bill from "./Bill";
import { renderToStaticMarkup } from "react-dom/server";

export default function Products() {
  const { items, totalAmount } = useContext(CartContext);
  const [paidAmount, setPaidAmount] = useState("");
  const [discount, setDiscount] = useState("Percent");
  const [discountNumber, setDiscountNumber] = useState('');
  const [givenDiscount, setGivenDiscount] = useState();
  const [payment,setPayment]=useState('Card Payment')
  const [style, setStyle] = useState({
    display: "none",
  });
  const [payDisplay, setPayDisplay] = useState({
    display: "none",
  });
  useEffect(()=>{
    if(discount==='Percent'){
      const discountValue = parseFloat(discountNumber);
      if (!isNaN(discountValue) && totalAmount) {
        const givenDiscount = totalAmount - (totalAmount * (discountValue / 100));
        setGivenDiscount(givenDiscount);
      }
    }else if(discount==='Amount'){
      // const discountValue = parseFloat(givenDiscount);
      // if(!isNaN(discountValue) && totalAmount){
      //   setGivenDiscount(totalAmount-discountValue)
      // }
      const discountValue = parseFloat(discountNumber);
      if (!isNaN(discountValue) && totalAmount) {
        const givenDiscount = totalAmount - discountValue;
        setGivenDiscount(givenDiscount);
      }
    }
  }, [discount, discountNumber])

  
  const openModal = () => {
    setStyle({ display: "block" });
  };
  const openPay = () => {
    setPayDisplay({ display: "flex" });
  };
  const closeModal = () => {
    setStyle({ display: "none" });
  };
  const handleChange=(e)=>{
    setDiscountNumber(e.target.value)
  }
 console.log(parseInt(givenDiscount))

    // setDiscountNumber(() => e.target.value);
  ;
  const handleKeyPadClick=(value)=>{
setPaidAmount(prev=>prev+value);
  }
  const handlePrint=()=>{
  const printableContent = `
  <html>
    <head>
      <style>
      .BillPage{
        width: 100vw;
        margin: 0 auto;
        border: 2px solid black;
      }
      h2,p{
        margin: 0;
      }
      table{
      border-spacing:10px;
      // table-layout:auto
      width:45vw
    }
      </style>
    </head>
    <body>
      ${renderToStaticMarkup(<center><Bill payment={payment} paidAmount={paidAmount} givenDiscount={givenDiscount} discount={discount} discountNumber={discountNumber} totalAmount={totalAmount} items={items} /></center>)}
    </body>
  </html>
`;

  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';

  document.body.appendChild(iframe);

  const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  iframeDocument.write(printableContent);
  iframeDocument.close();

  iframe.contentWindow.print();

  document.body.removeChild(iframe);
};
  
  console.log(payment)
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
              disabled={totalAmount<=0}
              onClick={openModal}
              className="btn btn-outline-danger"
              type="button"
            >
              Continue to Payment
            </button>
            <div style={style} className="modal">
              <div className="modal_content">
                <header id="modal_header">
                  <h5 id="modal_heading">Select Your Payment method</h5>
                  <button className="close3" onClick={closeModal}>
                    <i className="fa fa-close"></i>
                  </button>
                </header>
                <div className="modal_body">
                  <div className="modal_body1">
                    <div className="modal_body11">
                      <div>
                        <h6> Discount Type </h6>
                        <select
                          onChange={(e) => setDiscount(e.target.value)}
                          name="discount"
                          id="discount"
                        >
                          <option value="Percent" >
                            Percent
                          </option>
                          <option value="Amount">Amount</option>
                        </select>
                      </div>
                      <div>
                        <h6>Discount in {discount}</h6>
                        <input
                          id="discount"
                         value={discountNumber}             
                          type="number"
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <button onClick={openPay} className="Btn">
                          Pay
                          <svg className="svgIcon" viewBox="0 0 576 512">
                            <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div style={payDisplay} className="paymethods">
                      <div>
                        <h6> Payment Method </h6>
                        <select name="payment" id="payment" onChange={e=>setPayment(e.target.value)}>
                          <option value="Card Payment">Card Payment</option>
                          <option value="2Checkout">2Checkout</option>
                          <option value="Paypal">Paypal</option>
                          <option value="Cash Payment">Cash Payment</option>
                          <option value="SSL Commerz">SSL Commerz</option>
                          <option value="Monthly Account">MOnthly Account</option>
                          <option value="Square Payments">Square Payments</option>
                          <option value="Stripe Payments">Stripe Payments</option>
                          <option value="Paystack Payments">Paystack Payments</option>
                          <option value="PayTM Payments">PayTM Payments</option>
                        </select>
                      </div>
                      <div>
                        <h6>Customer Payment</h6>
                        <input
                          id="payment"
                          readOnly
                          value={paidAmount}
                          type="number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="modal_body2">
                    <div className="table1">
                      <table className="table1">
                        <tbody>
                          <tr>
                            <td>Total Amount</td>
                            <td>${(givenDiscount?givenDiscount:totalAmount).toFixed(2)}</td>
                          </tr>
                          <tr>
                            <td>Total Due</td>
                            <td>${(givenDiscount?givenDiscount:totalAmount).toFixed(2)}</td>
                          </tr>
                          <tr>
                            <td>Payable Amount</td>
                            <td>
                              ${((givenDiscount?givenDiscount:totalAmount)-Number(paidAmount))>0?((givenDiscount?givenDiscount:totalAmount)-Number(paidAmount)).toFixed(2):0}
                            </td>
                          </tr>
                          <tr>
                            <td>Change Amount</td>
                            <td>
                              ${(Number(paidAmount)-(givenDiscount?givenDiscount:totalAmount))>0?(Number(paidAmount)-(givenDiscount?givenDiscount:totalAmount)).toFixed(2):0}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="dialpad">
                      <table className="table2">
                      <tbody>
  <tr>
      <td onClick={() => handleKeyPadClick('1')}>1</td>
      <td onClick={() => handleKeyPadClick('2')}>2</td>
      <td onClick={() => handleKeyPadClick('3')}>3</td></tr>
  <tr><td onClick={() => handleKeyPadClick('4')}>4</td>
      <td onClick={() => handleKeyPadClick('5')}>5</td>
      <td onClick={() => handleKeyPadClick('6')}>6</td></tr>
  <tr><td onClick={() => handleKeyPadClick('7')}>7</td>
      <td onClick={() => handleKeyPadClick('8')}>8</td>
      <td onClick={() => handleKeyPadClick('9')}>9</td></tr>
  <tr><td onClick={() => handleKeyPadClick('0')}>0</td>
      <td onClick={() => handleKeyPadClick('00')}>00</td>
      <td onClick={() => setPaidAmount(() => '')}>C</td></tr>
</tbody>

                      </table>
                    </div>
                    <button onClick={handlePrint} style={{ marginBottom: "12px", marginLeft:'12px' }} className="Btn">
                      Pay
                      <svg className="svgIcon" viewBox="0 0 576 512">
                        <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path>
                      </svg>
                    </button>{" "}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* })} */}
      </div>
    </>
  );
}
