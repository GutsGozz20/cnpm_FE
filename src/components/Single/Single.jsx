import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../chat/Chat";
import List from "../list/List";

const Single = () => {
  return (
    <div className="flex w-full bg-gray-100 text-gray-600">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        <div className="p-5 flex gap-5">
          <div className="flex-1 p-5 shadow-lg relative">
            <h1 className="text-gray-500 text-xl mb-5">Information</h1>
            <span className="absolute top-4 right-5 px-4 py-2 text-lg font-semibold text-purple-700 bg-purple-100 rounded cursor-pointer">
              Edit
            </span>
            <div className="flex gap-5">
              <img src="/assets/person.jpg" alt="" className="w-30 h-30 rounded-full object-cover" />
              <div className="flex flex-col">
                <h1 className="text-xl text-gray-600 mb-2">Nguyen Dien</h1>
                <div className="mb-2 text-sm">
                  <span className="font-bold text-gray-600 mr-1">Email:</span>
                  <span className="font-light">dien@gmail.com</span>
                </div>
                <div className="mb-2 text-sm">
                  <span className="font-bold text-gray-600 mr-1">Phone:</span>
                  <span className="font-light">+4 123-234-45</span>
                </div>
                <div className="mb-2 text-sm">
                  <span className="font-bold text-gray-600 mr-1">Address:</span>
                  <span className="font-light">Hai Chau</span>
                </div>
                <div className="mb-2 text-sm">
                  <span className="font-bold text-gray-600 mr-1">Country:</span>
                  <span className="font-light">Da Nang</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Chart aspect={3 / 1} title="Users Spending ( Last 6 Months )" />
          </div>
        </div>
        <div className="m-5 p-5 shadow-lg">
          <h1 className="text-gray-500 text-xl mb-5">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
