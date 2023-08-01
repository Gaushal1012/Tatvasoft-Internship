import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Registration = () => {
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "rgb(24, 137, 207)",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "rgb(24, 137, 207)",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(168, 159, 159, 0.695)",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgb(24, 137, 207)",
      },
    },
  });

  return (
    <>
      <div className="reg_container">
        <h1>Login or Create an Account</h1>
        <hr color="red" width="200px" />
        <div className="form_info">
          <section className="per_info">
            <span>Personal Information</span>
            <hr />
            <p>
              Please enter the following information to create your account.
            </p>
            <div className="grid">
              <CssTextField
                className="fname"
                label="First Name *"
                id="custom-css-outlined-input"
              />
              <CssTextField
                className="lname"
                label="Last Name *"
                id="custom-css-outlined-input"
              />
              <CssTextField
                className="email"
                label="Email Address *"
                id="custom-css-outlined-input"
              />
            </div>
          </section>
          <section className="login_info">
            <span>Login Information</span>
            <hr />
            <div className="pass_con">
              <CssTextField label="Password *" id="custom-css-outlined-input" />
              <CssTextField
                label="Confirm Password *"
                id="custom-css-outlined-input"
              />
            </div>
          </section>
          <Link to="/login">
            <Button
              variant="contained"
              style={{
                backgroundColor: "#f14d54",
                width: "136px",
                height: "45px",
              }}
            >
              Register
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Registration;
