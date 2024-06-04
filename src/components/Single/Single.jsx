import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../chat/Chat";
// import List from "../list/List";
import axios from "axios";



const Single = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: ""
  });
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/users/${userId}`);
        setUser(response.data);
        setFormData({
          username: response.data.username,
          email: response.data.email,
        });
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUser();
  }, [userId]);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleSave = async () => {
    try {
      console.log("User ID:", user._id);
      console.log("Form Data:", formData); 
      const response = await axios.put(`http://localhost:5000/api/v1/users/${user._id}`, formData);
      if (response.status === 200) {
        console.log('Response Data:', response.data);
        setUser(response.data);
        setIsEditing(false);
      } else {
        console.error('Failed to update user data:', response);
      }
    } catch (error) {
      console.error("Failed to update user data:", error);
      console.log(error.response ? error.response.data : error.message);
    }
  };
  

  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex w-full bg-gray-100 text-gray-600">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        <div className="p-5 flex gap-5">
          <div className="flex-1 p-5 shadow-lg relative">
            <h1 className="text-black text-xl mb-5 font-bold "> User Information </h1>
            <span 
            onClick={() => setIsEditing(!isEditing)}
            className="absolute top-4 right-5 px-4 py-2 text-lg font-semibold text-purple-700 bg-purple-100 rounded cursor-pointer"
            >
              {isEditing ? "Cancel" : "Edit"}
            </span>
            {isEditing ? (
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="username"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="UserName"
                  className="border p-2 rounded"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="border p-2 rounded"
                />
                <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded">
                  Save
                </button>
              </div>
            ) : (
            <div className="flex gap-5">
              <img src="/assets/person.jpg" alt="" className="w-30 h-30 rounded-full object-cover" />
              <div className="flex flex-col">
                <h3 className="text-xl text-gray-500 mb-2 font-bold">Click Edit to edit Information</h3>
                <div className="mb-2 text-sm">
                  <span className="font-bold text-gray-600 mr-1">ID:</span>
                  <span className="font-light">{user._id}</span>
                </div>
                <div className="mb-2 text-sm">
                  <span className="font-bold text-gray-600 mr-1">User:</span>
                  <span className="font-light">{user.username}</span>
                </div>
                <div className="mb-2 text-sm">
                  <span className="font-bold text-gray-600 mr-1">Email:</span>
                  <span className="font-light">{user.email}</span>
                </div>
              </div>
            </div>
            )}
          </div>
          <div className="flex-1">
            <Chart aspect={3 / 1} title="Users( Last 6 Months )" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
