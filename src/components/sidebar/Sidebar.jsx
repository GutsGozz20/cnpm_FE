import React from 'react';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

const Sidebar = () => {
  return (
    <div className="flex-[1.3] min-h-screen border-r border-lightgray bg-whitesmoke">
      <div className="flex items-center justify-center h-[50px]">
        <Link to="/"className="text-none">
          <span className="text-[20px] font-bold text-[#210876]">DesignMediaX</span>
        </Link>
      </div>
      <hr />
      <div className="pl-[10px]">
        <ul className='list-none m-0 p-0'>
          <p className="text-[14px] font-bold text-[#616161] mt-[15px] mb-[5px]">MAIN</p>
          <Link to="/admin/dashboard" className='text-none'>
            <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#b3a4fe]">
              <DashboardIcon className="text-[#210876] text-[22px]"/>
              <span className="text-[13px] font-semibold text-[#616161] ml-[10px]">Dashboard</span>
            </li>
          </Link>

          <p className="text-[14px] font-bold text-[#616161] mt-[15px] mb-[5px]">LISTS</p>
          <Link to="/users"className="text-none">
            <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#b3a4fe]">
              <Person3OutlinedIcon className="text-[#210876] text-[22px]" />
              <span className="text-[13px] font-semibold text-[#616161] ml-[10px]">Users</span>
            </li>
          </Link>


          <p className="text-[14px] font-bold text-[#616161] mt-[15px] mb-[5px]">SERVICE</p>
          <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#b3a4fe]">
            <SettingsOutlinedIcon className="text-[#210876] text-[22px]" />
            <span className="text-[13px] font-semibold text-[#616161] ml-[10px]">Settings</span>
          </li>

          <p className="text-[14px] font-bold text-[#616161] mt-[15px] mb-[5px]">USER INTERFACE</p>
          <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#b3a4fe]">
            <ManageAccountsOutlinedIcon className="text-[#210876] text-[22px]" />
            <span className="text-[13px] font-semibold text-[#616161] ml-[10px]">Profile</span>
          </li>
          <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#b3a4fe]">
            <CalendarMonthOutlinedIcon className="text-[#210876] text-[22px]" />
            <span className="text-[13px] font-semibold text-[#616161] ml-[10px]">Calendar</span>
          </li>
          <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#b3a4fe]">
            <DiamondOutlinedIcon className="text-[#210876] text-[22px]" />
            <span className="text-[13px] font-semibold text-[#616161] ml-[10px]">Helper</span>
          </li>

          <Link to="/admin/signin" className='text-none'>
            <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#b3a4fe]">
              <ExitToAppOutlinedIcon className="text-[#210876] text-[22px]" />
              <span className="text-[13px] font-semibold text-[#616161] ml-[10px]">Logout</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
