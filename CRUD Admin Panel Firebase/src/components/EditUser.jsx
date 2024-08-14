import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../authentication/FirebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const docRef = doc(db, "CreatedUsers", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setEmail(docSnap.data().email);
        setPassword(docSnap.data().password);
      } else {
        console.log("No such document!");
      }
    };

    fetchUser();
  }, [id]);

  const handleUpdate = async () => {
    const docRef = doc(db, "CreatedUsers", id);
    await updateDoc(docRef, {
      email: email,
      password: password,
    });
    navigate("/");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Edit User</h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Edit Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Edit Password
        </label>
        <input
          id="password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        onClick={handleUpdate}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Update
      </button>
    </div>
  );
};

export default EditUser;
