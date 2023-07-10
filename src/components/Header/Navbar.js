
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import React, { useState } from "react";
import logo from '../../food_logo.jpg'


function CollapsibleExample(props) {
 
  const [width, setWidth] = useState();
  
  const openNav = () => {
    setWidth(200);
  };

  
  const closeNav = () => {
    setWidth(0);
  };
  const handleCategoryChange = (category) => {
    props.changeCategory(category);
  };
  return (
    <>
      <div id="mySidenav" className="sidenav" style={{ width: `${width}px` }}>
        <a href="#" className="closebtn" onClick={closeNav}>
          &times;
        </a>

        <a href="#" onClick={() => handleCategoryChange("")}>
          All Items
        </a>
        {props.arr.length > 0 &&
          props.arr.map((ar, ind) => {
            return (
              <a key={ind} href="#" onClick={() => handleCategoryChange(ar)}>
                {ar}
              </a>
            );
          })}
      </div>

     
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <button onClick={openNav} className="btn">
            <span className="icon">
              <svg viewBox="0 0 175 80" width="40" height="40">
                <rect width="80" height="15" fill="dark" rx="10"></rect>
                <rect y="30" width="80" height="15" fill="dark" rx="10"></rect>
                <rect y="60" width="80" height="15" fill="dark" rx="10"></rect>
              </svg>
            </span>
          </button>
          <div className="titleofnav">
          <Navbar.Brand href="#">
            <img src={logo} alt="logo" width="30"
              height="30"
              className="d-inline-block align-top" />{' '}
            Foodies</Navbar.Brand>
          </div>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
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
            {/* <Nav>
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
          </Nav> */}
            {/* <Nav>
              <Nav.Link href="#">About</Nav.Link>
            </Nav> */}
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </>
  );
}

export default CollapsibleExample;
