// import React from "react";
// import "./Navbar.css";
// import img from "../../mar.jpg";
// export default function Navbar() {
//   return (
//     <nav
//       className=" navbar navbar-expand-lg bg-body-tertiary"
//       style={{
//         // border: "2px solid black",
//         display: "flex",
//         width: " 100vw ",
//         alignItems: "center",
//         justifyContent: "space-between",
//         padding: " 1rem 1rem ",
//         background: "linear-gradient(to right,#bdc3c7 → #2c3e50)",
//       }}
//     >
//       <div>
//         <img src={img} className="logo" width={"36vh"} alt="" />
//       </div>
//       <div style={{ padding: "0px 5vw 0px 5px" }}>
//         <input
//           id="box"
//           placeholder="Search Something"
//           className="searchBox"
//           type="text"
//         />

//         <button className="btn-search">
//           <i className="fa fa-search"></i>
//         </button>
//       </div>
//       <button className="btn-search qr">
//         <i className="bi bi-qr-code"></i>
//       </button>

//       <button className="btn btn-outline-danger">
//         <i className="fa fa-plus"></i> Add New Items
//       </button>
//       <div>Total orders</div>
//     </nav>
//   );
// }

import "./Navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import React, {useState} from 'react'
// import { items1 as items, items1 } from "../../App";a

// import { categories as arr } from "../../App";


function CollapsibleExample(props) {
  // const [anchorEl, setAnchorEl] = useState(null);
  const [width, setWidth] = useState();
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  // const handleMenuItemClick = (menuItem) => {
  //   // Perform any logic based on the selected menu item
  //   console.log('Selected menu item:', menuItem);
  //   handleClose();
  // };
  // const arr = [
  //   { Name: "All items", id: 1 },
  //   { Name: "Burger", id: 2 },
  //   { Name: "Pizza", id: 3 },
  //   { Name: "Shawama", id: 4 },
  //   { Name: "Pasta", id: 5 },
  //   { Name: "Rice", id: 6 },
  //   { Name: "Dessert", id: 7 },
  //   { Name: "Nuggets", id: 8 },
  //   { Name: "Taco", id: 9 },
  //   { Name: "Sandwitches", id: 10 },
  //   { Name: "BBQ", id: 11 },
  // ];
  const openNav=()=> {
   setWidth(200) ;
   
  }
  
  /* Set the width of the side navigation to 0 */
  const closeNav=()=> {
    setWidth(0)
  }
  const handleCategoryChange=(category)=>{
    props.changeCategory(category)
  }
  return (
    <>
    <div  id="mySidenav" className="sidenav" style={{ width: `${width}px` }}>
    <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
    <a href="#">About</a>
    <a href="#">Add New Items</a>
    <a href="#" onClick={()=>handleCategoryChange("")}>All Items</a>
   {props.arr.length > 0 &&props.arr.map((ar,ind) => {
    return <a key={ind} href="#" onClick={()=>handleCategoryChange(ar)}>{ar}</a>})}
  </div>
   
     
      {/* <span onclick={openNav}>open</span> */}
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <button onClick={openNav} className="btn">
    <span className="icon">
        <svg viewBox="0 0 175 80" width="40" height="40">
            <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
            <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
            <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
        </svg>
    </span>   
</button>
        <div className="titleofnav" >
        <Navbar.Brand href="#" >Foodies</Navbar.Brand></div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="me-auto"> */}
            {/* <Nav.Link href="">About</Nav.Link> */}
            
            {/* <div> */}
      {/* <Nav.Link
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Click to view Items
      </Nav.Link>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      > */}
         {/* {arr.map((item)=>{return <MenuItem key={item.id} onClick={() => handleMenuItemClick(item.Name)}>{item.Name}</MenuItem>}) } */}
        {/* <MenuItem onClick={() => handleMenuItemClick('My account')}>My account</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('Logout')}>Logout</MenuItem> */}
      {/* </Menu>
    </div> */}
          {/* </Nav> */}
          <Nav>
            <div id="div">
            <Nav.Link href="#">
              <input
          id="box"
          placeholder="Search Something"
          className="searchBox"
          type="text"
        /></Nav.Link>
            <Nav.Link eventKey={2} href="#">
            <button className="btn-search">
             <i className="fa fa-search"></i>
           </button>
            </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default CollapsibleExample;
