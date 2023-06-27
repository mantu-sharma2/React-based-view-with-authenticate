import React from "react";
import Navbar from "./Navbar";
import Body from "./Body";

const Home = (props) => {
  return (
    <div>
      <Navbar user={props.user} />
      <Body />
    </div>
  );
};

export default Home;
