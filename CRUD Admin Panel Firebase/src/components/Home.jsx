import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../authentication/FirebaseConfig";
import Navbar from "./Navbar";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

const Home = () => {
  const [documents, setDocuments] = useState([]);
  const navigate = useNavigate();

  const getDocuments = async () => {
    const querySnapshot = await getDocs(collection(db, "CreatedUsers"));
    const docsArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setDocuments(docsArray);
  };

  useEffect(() => {
    getDocuments();
  }, []);

  const handleDelete = async (docId) => {
    try {
      await deleteDoc(doc(db, "CreatedUsers", docId));
      setDocuments((prevDocs) => prevDocs.filter((doc) => doc.id !== docId));
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  const handleEdit = (docId) => {
    navigate(`/edit/${docId}`);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        {documents.map((doc, index) => (
          <div
            key={index + 1}
            className="bg-white shadow-md rounded-lg p-4 mb-4 flex justify-between items-center"
          >
            <div>
              <h3 className="text-xl font-semibold">ID: {index + 1}</h3>
              <p className="text-gray-700">Email: {doc.email}</p>
              <p className="text-gray-700">Password: {doc.password}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(doc.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(doc.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
