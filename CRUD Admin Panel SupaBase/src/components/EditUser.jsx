import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../config/supaBaseClient";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Fetch user data based on ID and prefill the form
  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase
        .from("created_users")
        .select("email, password")
        .eq("id", id)
        .single(); // Fetch the user data with the specific id

      if (error) {
        console.log("Error fetching user:", error);
      } else if (data) {
        setEmail(data.email); // Prefill email
        setPassword(data.password); // Prefill password
      }
    };

    fetchUser();
  }, [id]);

  // Handle form submission to update user details
  const handleUpdate = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("created_users")
      .update({ email, password })
      .eq("id", id);

    if (error) {
      console.log("Error updating user:", error);
    } else {
      navigate("/"); // Redirect to home page after successful update
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-lg mt-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Edit User Details
      </h2>
      <form
        onSubmit={handleUpdate}
        className="bg-white shadow-lg rounded-lg p-8"
      >
        {/* Email Field */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Edit Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter new email"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Edit Password
          </label>
          <input
            id="password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter new password"
          />
        </div>

        {/* Update Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
