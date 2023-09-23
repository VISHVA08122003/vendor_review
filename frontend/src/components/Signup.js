import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addData } from "./Service/api";
import './signup.css';
function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",         // Added name field
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    gender: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    addData(formData)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className="a">
      <div className="bg">
        <form onSubmit={handleSubmit}>
        <div className="z">
          <h2 >Sign Up</h2>
          </div>
          <div className="b">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>
          <div className="b">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>
          <div className="b">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>
          <div className="b">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>
          <div className="b">
            <input
              type="text"
              name="phonenumber"
              placeholder="Phone Number"
              value={formData.phonenumber}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>
          <div className="b">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="b">
            <textarea
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              rows="3"
              required
            ></textarea>
          </div>
          <div className="ed">
          <button
            type="submit"
            className="f"
          >
            Sign Up
          </button>
          </div>
          <div className="ft">
          <button
            onClick={handleLogin}
            className="h"
          >
            Back to Login Page
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
