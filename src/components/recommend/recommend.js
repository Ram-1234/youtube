import React from "react";
import "./recommend.css";
import VideoCard from "../card/card";

const Recommend = ({data}) => {

  return (
    <div className="recommendedVides">
      <h2>Recommended</h2>
      <div className="recommendedVideos_vides"> 
        {data && data.map((item, index)=>{
          return <VideoCard 
          key={item.thumbnail+index}
          videoImg={item?.thumbnail}
          userImg={item?.user_img}
          {...item}
          />
        })}
      </div>
    </div>
  );
};

export default Recommend;
