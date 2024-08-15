import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import supabase from "../config/supaBaseClient";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Fetch users from the database
  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from("created_users").select();
      if (error) {
        setFetchError("Could not fetch due to some technical issue");
        setUsers([]);
        console.log(error);
      }
      if (data) {
        setUsers(data);
        setFetchError(null);
      }
    };
    fetchUsers();
  }, []);

  // Delete user from the database and state
  const handleDelete = async (id) => {
    const { error } = await supabase
      .from("created_users")
      .delete()
      .eq("id", id);
    if (error) {
      console.log("Error deleting user:", error);
    } else {
      // Update local state to reflect deletion
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        {fetchError && <p className="text-red-500">{fetchError}</p>}
        {users && users.length > 0 ? (
          users.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-md rounded-lg p-4 mb-4"
            >
              <h3 className="text-xl font-semibold">ID: {user.id}</h3>
              <p className="text-gray-700">Email: {user.email}</p>
              <p className="text-gray-700">Password: {user.password}</p>
              <div className="flex space-x-2">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => navigate(`/edit/${user.id}`)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </>
  );
};

export default Home;
