import React from 'react'
import './Bill.css'

export default function Bill(props) {
  let date = new Date();
  const capitalize=(cat)=>{
    if (typeof cat !== 'string') {
      return cat; 
    }
    return cat.charAt(0).toUpperCase() + cat.slice(1);
  }
  return (
      // <center>
    <div  className='BillPage'>
<h2>Shop Receipt</h2>
<p>Foodies Shop</p>
<p>DecaByte S House</p>
<p>Tel: 123-456-7890</p>
<p>Receipt : 12345</p>
<p>Date: {date.toLocaleDateString()}</p>
<p>Cashier: Lorem, ipsum.</p>
<hr />
<div className="data">
  <table>
    <thead><tr><th>Name</th>
    <th>Price</th>
    <th>Amount</th>
    <th>Total</th></tr></thead>
    <tbody>
{props.items.map((item,index)=>{
  return(
    <tr key={index}><td>{capitalize(item.name)}</td><td>${item.price}</td><td>{item.Amount}</td>
    <td>${(item.price*item.Amount).toFixed(2)}</td></tr>
  )
})}

<tr><td colSpan={3}>Discount in {props.discount}: </td>
<td>{props.discountNumber}</td></tr>
<tr><td colSpan={3}>Total: </td>
<td>${(props.givenDiscount?props.givenDiscount:props.totalAmount).toFixed(2)}</td></tr>
<hr />
<tr><td colSpan={3}>Cash: </td>
<td>${props.paidAmount}</td></tr>
<tr><td colSpan={3}>Change: </td>
<td>${(Number(props.paidAmount)-(props.givenDiscount?props.givenDiscount:props.totalAmount))>0?(Number(props.paidAmount)-(props.givenDiscount?props.givenDiscount:props.totalAmount)).toFixed(2):0}</td></tr>

</tbody>
</table>
<p>Paid with {props.payment}</p>
</div>

<hr />
<p>
  Thank You for shopping here and have a nice day😋
</p>
    </div>
// {/* </center> */}
  )
}
