// import React from "react";
// import TextField from "@mui/material/TextField";
// import { styled } from "@mui/material/styles";
// import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";

// const Login = () => {
//   const CssTextField = styled(TextField)({
//     "& label.Mui-focused": {
//       color: "rgb(24, 137, 207)",
//     },
//     "& .MuiInput-underline:after": {
//       borderBottomColor: "rgb(24, 137, 207)",
//     },
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": {
//         borderColor: "rgba(168, 159, 159, 0.695)",
//       },
//       "&:hover fieldset": {
//         borderColor: "black",
//       },
//       "&.Mui-focused fieldset": {
//         borderColor: "rgb(24, 137, 207)",
//       },
//     },
//   });

//   return (
//     <>
//       <div className="login_container">
//         <h1>Login or Create an Account</h1>
//         <hr color="red" width="200px" />
//         <div className="main_div">
//           <section className="new_customer">
//             <h4>New Customer</h4>
//             <hr />
//             <p>Registration is free and easy</p>

//             <ul>
//               <li>Faster chackout</li>
//               <li>Save multiple shipping address</li>
//               <li>View and track order and more</li>
//             </ul>
//             <Link to="/register">
//               <Button
//                 variant="contained"
//                 style={{
//                   backgroundColor: "#f14d54",
//                   width: "220px",
//                   height: "45px",
//                   marginTop: "93px",
//                 }}
//               >
//                 Create an Account
//               </Button>
//             </Link>
//           </section>
//           <section className="reg_customer">
//             <h4>Registered Customers</h4>
//             <hr />
//             <p>If you have an account with us, please log in.</p>
//             <div className="login_section">
//               <CssTextField
//                 label="Email Address*"
//                 id="custom-css-outlined-input"
//               />
//               <CssTextField label="Password *" id="custom-css-outlined-input" />
//               <Button
//                 variant="contained"
//                 style={{
//                   backgroundColor: "#f14d54",
//                   width: "100px",
//                   height: "45px",
//                 }}
//               >
//                 Login
//               </Button>
//             </div>
//           </section>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
};

const initialValues = {
  email: "",
  pass: "",
};

const loginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  pass: Yup.string().min(6).required("Pleaase enter password with min 6 char"),
});
const Login = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values) => {
        console.log("form vals", values);
        alert("sucessfull");
      },
    });

  return (
    <Container maxWidth="lg" sx={{ margin: "1.5rem auto" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Typography
          variant="h4"
          gutterBottom
          style={{ fontWeight: 600 }}
          textAlign="center"
        >
          Login or Create An Account
        </Typography>

        <Grid container spacing={5}>
          <Grid item md={6} xs={12}>
            <Typography variant="h6" gutterBottom style={{ fontWeight: 600 }}>
              New Customers
            </Typography>
            <hr />
            <Typography variant="body1" gutterBottom color="grey">
              Registration is free and easy
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon sx={{ width: "10px" }}>
                  <CircleIcon sx={{ color: "black", fontSize: "small" }} />
                </ListItemIcon>
                <ListItemText>Faster Checkout</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ width: "10px" }}>
                  <CircleIcon sx={{ color: "black", fontSize: "small" }} />
                </ListItemIcon>
                <ListItemText>Save multiple Shipping Addresses</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ width: "10px" }}>
                  <CircleIcon sx={{ color: "black", fontSize: "small" }} />
                </ListItemIcon>
                <ListItemText>View and track orers and more</ListItemText>
              </ListItem>
            </List>
            <Link to="/register" style={linkStyle}>
              <Button
                variant="contained"
                color="error"
                sx={{
                  textTransform: "capitalize",
                  backgroundColor: "#f14d54",
                  fontWeight: "600",
                }}
              >
                Create an Account
              </Button>
            </Link>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="h6" gutterBottom style={{ fontWeight: 600 }}>
              Registered Customers
            </Typography>
            <hr />
            <Typography variant="body1" gutterBottom color="grey">
              If you have an account with us please log in
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="body1" gutterBottom>
                    Email Address *
                  </Typography>
                  <TextField
                    type="email"
                    size="small"
                    fullWidth
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.email && touched.email ? errors.email : null
                    }
                    error={errors.email && touched.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" gutterBottom>
                    Password *
                  </Typography>
                  <TextField
                    type="password"
                    size="small"
                    fullWidth
                    name="pass"
                    value={values.pass}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.pass && touched.pass ? errors.pass : null
                    }
                    error={errors.pass && touched.pass}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="error"
                    type="submit"
                    sx={{
                      textTransform: "capitalize",
                      backgroundColor: "#f14d54",
                      fontWeight: "600",
                    }}
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
