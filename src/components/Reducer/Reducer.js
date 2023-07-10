import { useReducer } from "react";
import React from "react";
import CartContext from "./Context";

const initial_state = {
  items: [],
  totalPrice: 0,
};
const Reducer = (state, action) => {
  switch (action.type) {
    case "add_to_cart":
      const existingProductID = state.items.findIndex((cur) => {
        return cur.id === action.item.id;
      });
      const existingProduct = state.items[existingProductID];

      if (existingProduct) {
        const updateProduct = {
          ...existingProduct,
          Amount: existingProduct.Amount + 1,
        };
        const updateProducts = [...state.items];
        updateProducts[existingProductID] = updateProduct;

        return {
          ...state,
          items: updateProducts,
          totalPrice: state.totalPrice + action.item.price,
        };
      } else {
        const newItem = {
          ...action.item,
          Amount: 1,
        };

        return {
          ...state,
          items: state.items.concat(newItem),
          totalPrice: calculateTotalPrice(state.items.concat(newItem)),
        };
      }
    case "QTYINC":
      let newItems = state.items.map((cur) => {
        if (cur.id === action.payload) {
          return {
            ...cur,
            Amount: cur.Amount + 1,
          };
        }
        return cur;
      });
      // const existingItem = state.items.find((cur) => cur.id === action.payload);
      return {
        ...state,
        items: newItems,
        totalPrice: calculateTotalPrice(newItems),
      };
    case "QTYDEC":
      let newItems1 = state.items
        .map((cur) => {
          if (cur.id === action.payload) {
            if (cur.Amount === 1) {
              return null;
            } else {
              return {
                ...cur,
                Amount: cur.Amount - 1,
              };
            }
          }
          return cur;
        })
        .filter((item) => item !== null);
      // const existingItem1 = state.items.find(
      //   (cur) => cur.id === action.payload
      // );
      return {
        ...state,
        items: newItems1,
        totalPrice: calculateTotalPrice(newItems1),
      };
    case "Remove_item":
      const removedItem = state.items.find((cur) => cur.id === action.payload);
      let filtItem = state.items.filter((cur) => {
        return cur.id !== action.payload;
      });
      return { items: filtItem, totalPrice: calculateTotalPrice(filtItem) };

    default:
      return state;
  }
};

const calculateTotalPrice = (items) => {
  return items.reduce((total, item) => total + item.price * item.Amount, 0);
};

const ContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(Reducer, initial_state);
  const addToCartHandler = (item) => {
    dispatch({ type: "add_to_cart", item: item });
  };
  const qtyInc = (id) => {
    dispatch({ type: "QTYINC", payload: id });
  };
  const qtyDec = (id) => {
    dispatch({ type: "QTYDEC", payload: id });
  };
  const remItem = (id) => {
    dispatch({ type: "Remove_item", payload: id });
  };
  const CartProvider = {
    items: cart.items,
    totalAmount: cart.totalPrice,
    addToCartHandler: addToCartHandler,
    quantityIncrease: qtyInc,
    quantityDecrease: qtyDec,
    removeItem: remItem,
  };
  // console.log(CartProvider);
  return (
    <CartContext.Provider value={CartProvider}>{children}</CartContext.Provider>
  );
};

export default ContextProvider;
