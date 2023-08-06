import React, { useState } from "react";
import "./Signinform.scss";
import { Link, useNavigate } from "react-router-dom";
import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { Google, Visibility, VisibilityOff } from "@mui/icons-material";

const Signinform = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Perform sign-up logic

    // Navigate to the home page
    navigate("/home");
  };

  const handleSignInWithGoogle = () => {
    // Perform sign-up with Google logic

    // Navigate to the home page
    navigate("/home");
  };

  // Show Password funtionality
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // -------------------

  return (
    <div className="signInFormContainer">
      <div className="signInFormBorder">
        <form className="signInForm" onSubmit={handleSignIn}>
          <div className="formFirstHalf">
            <TextField
              id="outlined-basic"
              type="email"
              label="Email"
              variant="filled"
              required
            />
            <FormControl sx={{ m: 1 }} variant="filled">
              <InputLabel htmlFor="filled-adornment-password">
                Password
              </InputLabel>
              <FilledInput
                required
                id="filled-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <button type="submit">Sign in</button>
          </div>
        </form>
        <Link
          to="/signup"
          style={{
            display: "block",
            textAlign: "end",
            padding: "0.2rem ",
            color: "black",
          }}
        >
          Don't have an account?
        </Link>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: "0.2rem",
            margin: "0 auto",
            textAlign: "center",
            boxShadow: "0 0 10px black",
          }}
        >
          or
        </div>

        <div className="formSecondHalf">
          <button onClick={handleSignInWithGoogle}>
            Sign in with <Google style={{ marginLeft: "0.2rem" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signinform;
