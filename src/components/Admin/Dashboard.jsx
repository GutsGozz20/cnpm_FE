import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'
import List from '../list/List';
import Chart from '../chat/Chat';
import Widget from '../widget/Widget';
import Featured from '../featured/Featured';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-[6] bg-whitesmoke text-[#616161]">
        <Navbar />
        <div className="flex p-5 gap-5">
          <Widget type="user" />
          <Widget type="answers" />
          <Widget type="times" />
          <Widget type="score" />
        </div>
        <div className="flex py-[5px] px-5 gap-5">
          <Featured />
          <Chart title="Last 6 months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="shadow-md p-5 m-5">
          <div className="text-[20px] font-medium text-[#616161] mb-4">Latest Transactions</div>
          <List />
        </div>
      </div>
    </div>
  );
}

export default Dashboard
