import React from "react";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "./ChangingProgressProvider.js";

const Featured = () => {
  return (
    <div className="flex-2 p-10 shadow-lg rounded-lg">
      <div className="flex justify-between items-center text-gray-600">
        <h1 className="text-lg font-semibold">Total Revenue</h1>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className="p-20 flex flex-col items-center justify-center space-y-15">
        <div className="w-32 h-32">
          <ChangingProgressProvider
            values={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          >
            {(percentage) => (
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  pathTransitionDuration: 0.95,
                  trailColor: "#82ca9d",
                  pathColor: "#210876",
                  textColor: "#210876",
                })}
              />
            )}
          </ChangingProgressProvider>
        </div>
        <p className="text-lg font-semibold">Total sales made today</p>
        <p className="text-2xl">$2042.50K</p>
        <p className="text-xs text-gray-600">Previous transactions</p>
        <div className="w-full flex justify-between">
          <div className="text-center">
            <div className="text-sm text-gray-600itemTitle">Target</div>
            <div className="flex items-center text-sm text-red-600">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount ">$19.4k</div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-600">Last Week</div>
            <div className="flex items-center text-sm text-green-600">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">$60.4k</div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-600">Last Month</div>
            <div className="flex items-center text-sm text-red-600">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">$73.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;