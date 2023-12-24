import React, { useState } from "react";
import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Sidebarrow from "./sidebarrow";
import ShortsIcon from "./youtube-shorts-logo-15253.svg";

const Sidebar = () => {
  const [select, setSelect] = useState("Home");

  function delegation(e) {
    setSelect(e.target.innerHTML);
  }
  // const styles = {
  //   short: {
  //     width: "20px",
  //     height: "20px",
  //     fill:  "red"
  //   },
  // };
  // const Shorts = () => {
  //   return (
  //     <>
  //       <img
  //         style={styles.short}
  //         src={ShortsIcon}
  //         selected={select === "Shorts"}
  //         alt="shorts"
  //       />
  //     </>
  //   );
  // };

  return (
    <div className="sidebar" onClick={delegation}>
      <Sidebarrow Icon={HomeIcon} selected={select === "Home"} title="Home" />
      {/* <span
       onMouseLeave={onMouseOut}
       onMouseEnter={onMouseHover}
      >
        <Sidebarrow
          Icon={Shorts}
          selected={select === "Shorts"}
          title="Shorts"
        />
      </span> */}
      <Sidebarrow
        Icon={WhatshotIcon}
        selected={select === "Trending"}
        title="Trending"
      />
      <Sidebarrow
        Icon={SubscriptionsIcon}
        selected={select === "Subscription"}
        title="Subscription"
      />
      <hr />
      <Sidebarrow
        Icon={VideoLibraryIcon}
        selected={select === "Library"}
        title="Library"
      />
      <Sidebarrow
        Icon={HistoryIcon}
        selected={select === "History"}
        title="History"
      />
      <Sidebarrow
        Icon={OndemandVideoIcon}
        selected={select === "Your videos"}
        title="Your videos"
      />
      <Sidebarrow
        Icon={WatchLaterIcon}
        selected={select === "Watch Later"}
        title="Watch Later"
      />
      <Sidebarrow
        Icon={ThumbUpIcon}
        selected={select === "Liked videos"}
        title="Liked videos"
      />
      <Sidebarrow
        Icon={ExpandMoreIcon}
        selected={select === "Show more"}
        title="Show more"
      />
    </div>
  );
};

export default Sidebar;
