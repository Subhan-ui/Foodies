import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import Main from "./components/Body/Main";
import Links from "./components/Body/Links";
import Products from "./components/Body/Products";
import img1 from "./mar.jpg";
import img2 from "./mar1.jpg";
import img3 from "./mar3.jpg";
import { useState } from "react";
import About from "./components/About";

const items = [
  {
    id: 1,
    Name: "Margherita",
    category: "Pizza",
    img: img1,
    price: 12.8,
    Amount: 1,
  },
  {
    id: 2,
    Name: "pepperoni",
    category: "Pasta",
    img: img2,
    price: 2.8,
    Amount: 1,
  },
  {
    id: 3,
    Name: "hawaiin",
    category: "Burgers",
    img: img3,
    price: 19.2,
    Amount: 1,
  },
  {
    id: 4,
    Name: "vegeterian",
    category: "Pizza",
    img: img2,
    price: 19.2,
    Amount: 1,
  },
  {
    id: 5,
    Name: "Meat Lovers",
    category: "Shawarma",
    img: img3,
    price: 19.2,
    Amount: 1,
  },
  {
    id: 6,
    Name: "Cheese Lover",
    category: "Pizza",
    img: img1,
    price: 19.2,
    Amount: 1,
  },
  { id: 7, Name: "Rice", category: "Rice", img: img2, price: 19.2, Amount: 1 },
  {
    id: 8,
    Name: "special Pizza",
    category: "Nuggets",
    img: img3,
    price: 19.2,
    Amount: 1,
  },
  {
    id: 9,
    Name: "non-veg pizza",
    category: "Taco",
    img: img1,
    price: 19.2,
    Amount: 1,
  },
  {
    id: 10,
    Name: "Pasta",
    category: "Pasta",
    img: img3,
    price: 12.2,
    Amount: 1,
  },
  {
    id: 11,
    Name: "BBQ Chicken",
    category: "BBQ",
    img: img2,
    price: 12.2,
    Amount: 1,
  },
  {
    id: 12,
    Name: "Ice Cream",
    category: "Dessert",
    img: img1,
    price: 12.2,
    Amount: 1,
  },
];
const capitalize = (cat) => {
  if (typeof cat !== "string") {
    return cat;
  }
  return cat.charAt(0).toUpperCase() + cat.slice(1);
};
export const items1 = capitalize(items);
function App() {
  //categorization code
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredItems = items.filter((item) =>
    item.category === selectedCategory
  );

  const displayItems = selectedCategory === "" ? items : filteredItems;
console.log(displayItems)
  const categoriesSet = new Set(items.map((item) => item.category));
  const categories = Array.from(categoriesSet);

  const changeCategory = (category) => {
    setSelectedCategory(category);
  };

  //capitalization function
  const capitalize = (cat) => {
    if (typeof cat !== "string") {
      return cat;
    }
    return cat.charAt(0).toUpperCase() + cat.slice(1);
  };

  // const style = {
  //     display: "grid",
  //   gridTemplateColumns: "repeat(2, 1fr)",
  //   gridGap: "10px"
  //   display: "flex",
  //   justifyContent: "space-between",
  // };

  return (
    
    <div className="whole">
      <div className="column">
        <Navbar
          changeCategory={changeCategory}
          items={capitalize(items)}
          arr={categories}
        />
        
        <div className="whole2">
          <div className="whole3">
            {/* <Links /> */}
            <Main items={displayItems} />
          </div>

          <Products />

        </div>
      </div>
    </div>
    
  );
}

export default App;
