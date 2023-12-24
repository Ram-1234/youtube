import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avtar from "../avatar/avatar";

const Header = ({onChangeHandler, value}) => {

  const debounce = (func, delay) => {
    let lastTimerid;
    let lastRun;

    return function (...args) {
      let context = this;
      if (!lastRun) {
        func.apply(context, args);
        lastRun = Date.now();
      } else {
        clearTimeout(lastTimerid);
        lastTimerid = setTimeout(() => {
          if (Date.now() - lastRun >= delay) {
            func.apply(context, args);
            lastRun = Date.now();
          }
        }, delay - (Date.now() - lastRun));
      }
    };
  };

  //let throtal = debounce(onChangeHandler,5000);

  return (
    <header className="header">
      <div className="header_left">
        <MenuIcon className="header_icon" />
        <img
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt="logo"
        />
      </div>
      <div style={{ padding: "0", margin: "0", display: "flex", width: "40%" }}>
        <div className="header_input">
          <input type="text" onChange={debounce(onChangeHandler,5000)} value={value} placeholder="Search" />
          <SearchIcon className="header_inputsearchBtn" />
        </div>
        <KeyboardVoiceIcon className="header_icon" />
      </div>
      <div className="header_right">
        <VideoCallIcon className="header_icon"/>
        <AppsIcon className="header_icon" />
        <NotificationsIcon className="header_icon"/>
        <Avtar
          url="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
          className="user"
          alt="user"
          title="Ram"
        />
      </div>
    </header>
  );
};

export default Header;
