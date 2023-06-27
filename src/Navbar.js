import React from "react";
import "./Navbar.css";
import bellIcon from "./Icons/bell.png";
import search from "./Icons/search.png";
import user from "./Icons/user.png";

const Navbar = (props) => {
  var pic = user;
  console.log(props.user);
  // if (props.user.picture) {
  //   pic = props.user.picture;
  // }

  return (
    <div className="navbar">
      <div className="bottom-bar">
        <div className="left-side-bar">
          <div className="header">
            <h3>Board.</h3>
          </div>
          <div className="body">
            <div className="items">
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/windows/32/rebalance-portfolio.png"
                alt="rebalance-portfolio"
              />

              <div className="item">
                <a href={`/dashboard`}>Dashboard</a>
              </div>
            </div>
            <div className="items">
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/pulsar-line/48/coin-in-hand.png"
                alt="coin-in-hand"
              />
              <div className="item">
                <a href={`/transactions`}>Transactions</a>
              </div>
            </div>
            <div className="items">
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/pastel-glyph/64/overtime--v3.png"
                alt="overtime--v3"
              />

              <div className="item">
                <a href={`/schedule`}>Schedule</a>
              </div>
            </div>
            <div className="items">
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/ios-glyphs/30/group.png"
                alt="group"
              />
              <div className="item">
                <a href={`/users`}>Users</a>
              </div>
            </div>
            <div className="items">
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/ios/50/settings--v1.png"
                alt="settings--v1"
              />
              <div className="item">
                <a href={`/settings`}>Settings</a>
              </div>
            </div>

            {/* <Link to="/dashboard">dashboard</Link>
            <Link to="/transaction">transaction</Link>
            <Link to="/schedule">schedule</Link>
            <Link to="/users">users</Link>
            <Link to="/settings">settings</Link> */}
          </div>
          <div className="footer">
            <ul>
              <p>Help</p>
              <p>Contact US</p>
            </ul>
          </div>
        </div>
        <div className="right-side-bar">
          <div className="top-bar">
            <div className="left">
              <h2>Dashboard</h2>
            </div>
            <div className="right">
              <input className="search" type="text" placeholder="Search..." />
              <img
                className="icon"
                id="icon-0"
                src={search}
                height={25}
                width={25}
                alt="search-icon"
              />
              <img
                className="icon"
                src={bellIcon}
                height={25}
                width={25}
                alt="Bell-Icon"
              />
              <img
                className="icon"
                src={pic}
                height={25}
                width={25}
                alt="user-profile"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
