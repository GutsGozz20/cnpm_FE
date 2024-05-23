import React, { useContext } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import Switch from "@mui/material/Switch";
import person from '../../asset/image/person.jpg'
// import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
  // const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="h-[50px] flex items-center text-[14px] text-[#333] bg-whitesmoke border-b border-lightgray">
      <div className="flex w-full items-center justify-between p-[20px]">
        <div className="flex w-[30%] items-center p-[3px] border border-lightgray">
          <input type="text" placeholder="search" className="w-full border-none outline-none bg-transparent placeholder:text-[12px] placeholder:pl-[5px]"  />
          <SearchOutlinedIcon />
        </div>
        <div className="flex items-center ml-[20px]">
          <div className="relative flex items-center mr-[20px]">
            <LanguageOutlinedIcon className="text-[25px] cursor-pointer" />
            <span className="pl-[5px]">English</span>
          </div>
          <div className="relative flex items-center mr-[20px]">
            <Switch
              style={{ color: "#210876" }}
              className="text-[25px] cursor-pointer"
              // onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="relative flex items-center mr-[20px]">
            <FullscreenOutlinedIcon className="text-[25px] cursor-pointer" />
          </div>
          <div className="relative flex items-center mr-[20px]">
            <NotificationsActiveOutlinedIcon className="text-[25px] cursor-pointer" />
            <div className="absolute w-[15px] h-[15px] bg-red-500 rounded-full text-white flex items-center justify-center text-[10px] font-bold top-[-5px] right-[-5px]">3</div>
          </div>
          <div className="relative flex items-center mr-[20px]">
            <ChatBubbleOutlineOutlinedIcon className="text-[25px] cursor-pointer" />
            <div className="absolute w-[15px] h-[15px] bg-red-500 rounded-full text-white flex items-center justify-center text-[10px] font-bold top-[-5px] right-[-5px]">5</div>
          </div>
          <div className="relative flex items-center mr-[20px]">
            <ListOutlinedIcon className="text-[25px] cursor-pointer" />
          </div>
          <div className="relative flex items-center mr-[20px]">

            <img src={person} alt="" className="w-[30px] h-[30px] rounded-full object-cover border border-red-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;