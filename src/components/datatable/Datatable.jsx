import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {  userRows } from "./../../datatableSource";
import axios from "axios"

import { Link } from "react-router-dom";
import { getallUser } from "../../router/userRouter";

const Datatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      const {data} = await axios.get(getallUser)
      const allUser = (data.data || []).map((u) => { return {id: u._id, username: u.username, email: u.email,password: u.password}})
      console.log(allUser);
      setData(allUser)

    })()
  }, [])

  const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "username",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "password", headerName: "Password", width: 200 },
  ];

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/users/${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };
  
  
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-4">
            <Link to={`/users/${params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="px-1 py-0.5 rounded text-darkblue border border-dotted border-darkblue cursor-pointer">
                View
              </div>
            </Link>
            <div
              className="px-1 py-0.5 rounded text-crimson border border-dotted border-crimson cursor-pointer"
        onClick={() => handleDelete(params.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="h-[550px] p-5">
      <div className="w-full text-2xl text-gray-700 mb-2.5 flex items-center justify-between">
        <span>Add New User</span>
        <Link to="/users/userId/new" style={{ textDecoration: "none" }}>
          <span className="text-base text-green-600 font-normal border border-green-600 p-1.5 rounded cursor-pointer">Add New</span>
        </Link>
      </div>
      <DataGrid
        className="text-gray-700 border-none"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};
export default Datatable;