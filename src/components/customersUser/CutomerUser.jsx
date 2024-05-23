import React from "react";
import Datatable from "../../components/datatable/Datatable";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "./../../components/navbar/Navbar";

const CustomerUser = () => {
  return (
    <div className="flex w-full bg-whitesmoke text-gray-700">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default CustomerUser;