import React, { memo, useEffect, useState } from "react";
import "../HomePage/Home.css";
import { useDispatch } from "react-redux";
import { add } from "../../Redux_Toolkit/Slices";
const Home = () => {
  const dispatch = useDispatch();
  console.log("Home.js")
  const HandleAdd = (val) => {
    dispatch(add(val));
    alert("Product Added in cart");
  };

  const [Items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  return (
    <div className="Home_Main_Cointainer">
      <div className="Hero_Section">
        <img
          src="https://helloyubo.com/wp-content/uploads/2022/10/creative_fashion-2.jpg"
          alt=""
        />
      </div>

      <h2>All Products</h2>
      <div className="Card_Main_Caintainer">
        {Items.map((val) => {
          return (
            <div className="card" key={val.id}>
              <div className="cardImage">
                <img src={val.image}  alt="img"/>
              </div>
              <p className="Product_Name">{val.title.substring(0, 15)}...</p>
              <div className="Price">
                <p>${val.price}</p>
                <div className="button_add" onClick={() => HandleAdd(val)}>
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(Home);
