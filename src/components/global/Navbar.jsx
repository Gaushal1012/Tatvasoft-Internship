import React from "react";
import Logo from "../../assets/logo.png";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="menubar">
        <div className="navbar">
          <Link to="/">
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
          </Link>
          <div className="auth">
            <Link to="/login">
              <Button>Login</Button>
            </Link>
            <hr />
            <Link to="/register">
              <Button>Register</Button>
            </Link>
            <Button variant="outlined" style={{ borderColor: "rgb(65,65,65)" }}>
              {<ShoppingCartIcon />} 0
              <span style={{ color: "rgb(65,65,65)", marginLeft: "3px " }}>
                Cart
              </span>
            </Button>
          </div>
        </div>
        <div className="searchbar">
          <input
            type="text"
            name="search"
            placeholder="What are you looking for..."
          />
          <Button variant="contained" style={{ backgroundColor: "#80BF32" }}>
            {<SearchIcon />}Search
          </Button>
          <Button variant="contained" style={{ backgroundColor: "#f14d54" }}>
            Cancle
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
