import React, { memo } from "react";
import "../NavBar/NavBar.css";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
const NavBar = () => {

  console.log("navBar");

const itemlength = useSelector((state)=>state.ecomm.item);

  const navigate = useNavigate();
  return (
    <div className="Navabar">
      <div className="left">
        <p>eCommerce</p>
      </div>

      <div className="Right">
        <input
          type="text"
          placeholder="Search anything here"
          className="SearchInput"
        />
        
          <i className="fa-solid fa-magnifying-glass SearchIcon"></i>
       
      </div>
      <div className="right" onClick={()=>navigate("/CartPage")}>
      <i className="fa-solid fa-cart-shopping"><sup>{itemlength.length}<sup/></sup></i>
      </div>
    </div>
  );
};

export default memo(NavBar);
