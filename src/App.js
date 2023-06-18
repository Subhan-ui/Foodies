import "./App.css";
import Navbar from "./components/Header/Navbar";
import Main from "./components/Body/Main";
import Links from "./components/Body/Links";
import Products from "./components/Body/Products";
import img1 from "./mar.jpg";
import img2 from "./mar1.jpg";
import img3 from "./mar3.jpg";


export const items = [
  { id: 1, Name: "Margherita", img: img1, price: 12.8 ,Amount: 1},
  { Name: "pepperoni", id: 2, img: img2, price: 2.8 ,Amount: 1},
  { Name: "hawaiin", id: 3, img: img3, price: 19.2 ,Amount: 1},
  { Name: "vegeterian", id: 4, img: img2, price: 19.2 ,Amount: 1},
  { Name: "Meat Lovers", id: 5, img: img3, price: 19.2 ,Amount: 1},
  { Name: "CHeese Lover", id: 6, img: img1, price:19.2 ,Amount: 1},
  { Name: "BBQ Chicken", id: 7, img: img2, price: 19.2 ,Amount: 1},
  { Name: "special Pizza", id: 8, img: img3, price: 19.2 ,Amount: 1},
  { Name: "non-veg pizza", id: 9, img: img1, price: 19.2 ,Amount: 1},
  { Name: "Pasta", id: 10, img: img3, price: 12.2 ,Amount: 1},
];
function App() {
  

  const style = {
    //   display: "grid",
    // gridTemplateColumns: "repeat(2, 1fr)",
    // gridGap: "10px"
    display: "flex",
    justifyContent: "space-between",
  };
  
  return (
    <div style={style}>
      <div className="column">
        <Navbar />
        
        <div style={{display:'flex'}}>
        <div style={{display:'flex', flexDirection:'column'}}>
        <Links />
        <Main items={items}/></div>
      
      
        <Products  /></div>
      </div>
    </div>
  );
}

export default App;
