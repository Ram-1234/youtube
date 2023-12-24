import React from "react";
import Avtar from "../avatar/avatar";
import './videocard.css'

export const VideoCard = (props) => {
  const { videoImg, title, channel, view, time, userImg } = props;
  return (
    <div className="video_card">
      <img className="video_thumbnail" src={videoImg} alt="video_card" />
      <div className="videoInfo">
        <Avtar
          className="vido_card_user"
          alt={channel}
          url={userImg}
          title={channel}
        />
        <div className="videoCard_text">
          <h4>{title.slice(0,50)}{title.length>50? "...":null}</h4>
          <p title={channel}>{channel}</p>
          <p>
            {view} . {time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
