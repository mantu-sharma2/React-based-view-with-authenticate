import React from "react";
import "./Body.css";
import Chart from "./Chart";
import PieChart from "./PieChart";

const Body = () => {
  return (
    <div>
      <div className="body">
        <div className="line-1">
          <div className="c1">
            <div>
              <p>Total Revanue</p>
              <h3>$10144410</h3>
            </div>
            <div>
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/fluency-systems-regular/48/bookmark--v1.png"
                alt="wallet-icon"
              />
            </div>
          </div>
          <div className="c1">
            <div>
              <p>Total Trans.</p>
              <h3>$100010</h3>
            </div>
            <div>
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/dotty/80/ledger.png"
                alt="ledger"
              />
            </div>
          </div>
          <div className="c1">
            <div>
              <p>Total Likes</p>
              <h3>98498</h3>
            </div>
            <div>
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/ios/50/facebook-like--v1.png"
                alt="facebook-like--v1"
              />
            </div>
          </div>
          <div className="c1">
            <div>
              <p>Total Users</p>
              <h3>54645</h3>
            </div>
            <div>
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/ios/50/conference-call--v1.png"
                alt="conference-call--v1"
              />
            </div>
          </div>
        </div>
        <div className="line-2">
          <Chart />
        </div>
        <div className="line-3">
          <div className="block">
            <PieChart />
          </div>
          <div className="schedule">
            <div className="title-bar">
              <h3>Todays Schedule</h3>
              <button>more</button>
            </div>
            <div className="card">
              <div className="card-list">
                <h4>meeting with supplier</h4>
                <p>14.00-15.00</p>
                <p>At sunset road, Kuta bali</p>
              </div>
              <div className="card-list" id="c2">
                <h4>meeting with supplier</h4>
                <p>14.00-15.00</p>
                <p>At sunset road, Kuta bali</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
