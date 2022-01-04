import { Button, LinearProgress, Stack } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { googleLogin, isLoading, loginUser } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const location = useLocation();
  const history = useNavigate();

  const onSubmit = (data) => {
    loginUser(data.email, data.password, location, history);
    reset();
  };

  const handleGoogleSignIn = () => {
    googleLogin(location, history);
  };
  return (
    <>
      
      <div className="login" style={{ textAlign: "center", paddingTop: "8%", color: "black" }}>
        {isLoading && (
          <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
            <LinearProgress color="secondary" />
          </Stack>
        )}
        <div
          style={{
            margin: "50px 0 auto",
            display: "inline-block",
            boxShadow: "inset 1px 1px 10px rgb(255,255,255,0.2)",
            padding: "50px 20px",
          }}
        >
          <img style={{ width: "250px", marginBottom: "20px" }} src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" alt="" />
          {!isLoading && (
            <form style={{ margin: "0 auto" }} onSubmit={handleSubmit(onSubmit)}>
              <input placeholder="Email" style={{ fontSize: "18px", padding: "10px" }} {...register("email")} type="email" /> <br/><br/>

              <input placeholder="Password" style={{ fontSize: "18px", padding: "10px" }} {...register("password")} type="password" /> <br/><br/>
              <input
                style={{ fontSize: "18px", padding: "10px", background: "#EC5990", border: "none", color: "white", cursor: "pointer", borderRadius: "5px" }}
                value="LOGIN"
                type="submit"
              />
            </form>
          )}
          <div>
            <h3>--------- Or Login with --------</h3>
          </div>
          <div style={{ marginTop: "20px" }}>
            <Button
              onClick={handleGoogleSignIn}
              className="btn-custom"
              style={{ color: "white", padding: "10px 28px", borderRadius: "0", marginBottom: "10px" }}
            >
              <img style={{ width: "30px", margin: "0 5px" }} src="https://www.bryan-myers.com/images/1x1/google-llc.png" alt="" /> Google
            </Button>
          </div>
          <div>
            <p>
              Don't Have Account?
              <NavLink style={{ color: "#EC5990", textDecoration: "none" }} to="/register">
                {" "}
                Register Now
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;



