import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ScoreOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";


const Widget = ({ type }) => {
  let data;
  // temp
  const amount = 500;
  const diff = 30;

  switch (type) {
    case "user":
      data = {
        title: "USER",
        isMoney: false,
        link: "See details",
        icon: (
          <PersonOutlineOutlinedIcon
          className="text-crimson bg-crimson/20 p-1.5 rounded-full"
          />
        ),
      };
      break;
    case "answers":
      data = {
        title: "NUMBER OF CORRECT ANSWERS ",
        isMoney: false,
        link: "View all answers",
        icon: (
          <QuestionAnswerOutlinedIcon
          className="text-goldenrod bg-goldenrod/20 p-1.5 rounded-full"
          />
        ),
      };
      break;
    case "times":
      data = {
        title: "TOTAL TIME",
        isMoney: true,
        link: "View details times",
        icon: (
          <AccessTimeOutlinedIcon
          className="text-green bg-green/20 p-1.5 rounded-full"
          />
        ),
      };
      break;
    case "score":
      data = {
        title: "TOTAL SCORE",
        isMoney: true,
        link: "View details score",
        icon: (
          <ScoreOutlinedIcon
          className="text-purple bg-purple/20 p-1.5 rounded-full"
          />
        ),
      };
      break;

    default:
      break;
  }

  return (
    <div className="flex flex-1 justify-between p-2.5 shadow-lg shadow-[rgba(201,201,201,0.47)] rounded-lg h-[100px]">
      <div className="flex flex-col justify-between">
        <span className="font-bold text-sm text-gray-600">{data.title}</span>
        <span className="text-2xl font-light">
          {data.isMoney && ""} {amount}
        </span>
        <span className="w-max text-xs border-b border-gray-400 cursor-pointer">{data.link}</span>
      </div>
      <div className="flex flex-col justify-between items-end">
        <div className="flex items-center text-sm cursor-pointer text-green-600">
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;