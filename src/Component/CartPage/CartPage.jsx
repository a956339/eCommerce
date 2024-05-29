import React, { memo } from "react";
import "../CartPage/CartPage.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, remove } from "../../Redux_Toolkit/Slices";
import { useNavigate } from "react-router";
const CartPage = () => {
  console.log("CartPage.js")
  const navigate = useNavigate();
  const CartItem = useSelector((state) => state.ecomm.item);
  const TotalPrice = useSelector((state) => state.ecomm.TotalPrice);
console.log(CartItem);
  const dispatch = useDispatch();

  const HandleIncrement = (id) => {
    dispatch(increment(id));
  };

  const Handledecrement = (id) => {
    dispatch(decrement(id));
  };

  return (
    <div className="Cart_Main_Cointainer">
      <div className="Cart_Cointainer_Left">
        {CartItem.length === 0 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <h3>No product avilable</h3>
            <button onClick={() => navigate("/")}>Go to home page</button>
          </div>
        ) : (
          CartItem.map((val) => {
            return (
              <div className="Cart_card" key={val.id}>
                <div className="cardImage">
                  <img src={val.image} alt="img"/>
                </div>
                <p className="Product_Name">{val.title.substring(0, 15)}...</p>
                <div className="Cart_Price">
                  <p>${val.price}</p>
                  <div className="Cart_Quantity">
                    <div
                      className="button_Cover"
                      onClick={() => Handledecrement(val.id)}
                    >
                      {val.quantity <= 1 ? (
                        <i
                          class="fa-solid fa-trash"
                          onClick={() => dispatch(remove(val.id))}
                        ></i>
                      ) : (
                        <i class="fa-solid fa-minus"></i>
                      )}
                    </div>
                    <p>{val.quantity}</p>
                    <div
                      className="button_Cover"
                      onClick={() => HandleIncrement(val.id)}
                    >
                      <i class="fa-solid fa-plus cartPlus"></i>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="Cart_Cointainer_Right">
        <div className="Price_container">
          <p>PRICE DETAILS</p>
          <hr />
          <div className="Price_Quantity_Main">
            <div className="price">
              <p className="Price_style" style={{ color: "black" }}>
                Price ({CartItem.length} items)
              </p>
              <p style={{ color: "black" }}>${TotalPrice.toFixed(2)}</p>
            </div>
            <div className="price">
              <p className="Price_style" style={{ color: "black" }}>
                Discount
              </p>
              <p style={{ color: "black" }}>0</p>
            </div>
            <div className="price">
              <p className="Price_style" style={{ color: "black" }}>
                Delivery Charges
              </p>
              <p style={{ color: "black" }}>Free</p>
            </div>
          </div>
          <hr />

          <div className="Total">
            <p style={{ color: "black" }}>Total Amount</p>
            <p style={{ color: "black" }}>$ {TotalPrice.toFixed(2)}</p>
          </div>
          <br />
          <div className="Order_button_Box">
            <div className="button_Box">
              <p>Place Order</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CartPage);
