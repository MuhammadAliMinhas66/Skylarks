import React, { useState } from "react";
import GoogleImage from "../assets/googleImage.png";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supaBaseClient";
import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Fetch the user data from the 'authenticated_user' table based on email
      const { data, error } = await supabase
        .from("authenticated_user")
        .select("*")
        .eq("email", email)
        .maybeSingle();

      // Handle any errors
      if (error) {
        setErrorMessage("Error occurred during login.");
        console.error("Error fetching user:", error);
        return;
      }

      // Check if user data was found
      if (!data) {
        setErrorMessage("User not found.");
        return;
      }

      // Check if the passwords match
      if (data.password === password) {
        // Login successful, redirect to Home page
        navigate("/");
      } else {
        setErrorMessage("Invalid credentials, please try again.");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setErrorMessage("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <section className="section object-cover overflow-hidden h-[100vh] flex">
      <section className="flex justify-center items-center mx-auto ">
        <form
          onSubmit={handleLogin}
          className="bg-[rgba(255,255,255,0.3)] relative w-[500px] h-[640px] flex flex-col gap-4 items-center justify-center"
        >
          <img
            src={GoogleImage}
            className="w-40 relative
          -top-8"
          />
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email"
            className="h-14 w-64 rounded-full bg-[rgba(255,255,254,.5)] pl-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="h-14 w-64 rounded-full bg-[rgba(255,255,254,.5)] pl-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-[#002f5e] h-14 w-64 rounded-full text-white text-xl font-bold"
          >
            Login
          </button>
          {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        </form>
      </section>
    </section>
  );
};

export default Login;
