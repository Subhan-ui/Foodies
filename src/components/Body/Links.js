// import React from "react";
import "./Links.css";
import React from "react";

const Links = () => {
  const arr = [
    {Name:"All items", id:1},
    {Name:"Burger", id:2},
    {Name:"Pizza", id:3},
    {Name:"Shawama", id:4},
    {Name:"Pasta", id:5},
    {Name:"Rice", id:6},
    {Name:"Dessert", id:7},
    {Name:"Nuggets", id:8},
    {Name:"Taco", id:9},
    {Name:"Sandwitches", id:10},
    {Name:"BBQ", id:11},
  ];
  return (
     < div  className="but" >
        <h6>select categories</h6>
        <div style={{display:"flex", }}>
        {arr.map((ar)=>{
          return(
          <button key={ar.id} className="btn btn-secondary "  style={{width:'6vw',margin:"0px 8px",height:'5vh',
 display:'inline-block',
//  flexDirection:'row'       
        }}>{ar.Name}</button>)
        })}
        </div>
      </div>
  );
};

export default Links;
