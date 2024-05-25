import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import DefaultProfile from "../../asset/image/DefaultProfile.jpg"
import axios from "axios";

const New = ({ inputs = [], title }) => {
  const [file, setFile] = useState(null);

  const [value, setValue] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const value = e.target.value
    const key = e.target.name
    setValue((prev) =>{return {...prev, [key]: value}})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const {data} = await axios.post('http://localhost:5000/api/v1/create-user', value);
      setValue({ username: "",
      email: "",
      password: ""})
    } catch (error) {
      console.log(error);
    }
   
  };

  return (
    <div className="flex w-full ">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        <div className="shadow-md rounded-md p-2.5 m-5 flex">
          <h1 className="text-gray-700 text-xl">{title}</h1>
        </div>
        <div className="shadow-md rounded-md p-2.5 m-5 flex">
          <div className="flex-1 text-center">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : DefaultProfile
              }
              alt=""
              className="w-36 h-36 rounded-full object-cover transform translate-y-24"
            />
          </div>
          <div className="flex-2">
            <form className="flex flex-wrap gap-7.5 justify-around" onSubmit={handleSubmit}>
              <div className="w-2/5">
                <label className="flex items-center gap-2.5" htmlFor="file">
                  Image: <DriveFolderUploadOutlined className="cursor-pointer" />
                </label>
                <input
                  type="file"
                  id="file"
                  className="hidden"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              {Array.isArray(inputs) && inputs.length > 0 ? (
                inputs.map((input) => (
                  <div className="w-2/5  flex flex-col" key={input.id}>
                    <label className="flex items-center gap-2.5">{input.label}</label>
                    <input
                      onChange={handleChange}
                      type={input.type}
                      id={input.id}
                      name={input.name}
                      placeholder={input.placeholder}
                      className="w-full p-1 border-b border-gray-400 text-lg outline-none bg-transparent placeholder:text-sm"
                    />
                  </div>
                ))
              ) : (
                <p>No input fields provided</p>
              )}
             <div className="w-full flex justify-center mt-5">
              <button
                  type="submit"
                  className="w-36 p-2.5 mt-2.5 mb-2.5 bg-[#210876] text-white font-bold cursor-pointer"
                >
                  Send
                </button>
             </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
