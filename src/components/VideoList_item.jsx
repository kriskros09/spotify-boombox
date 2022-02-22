import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  //const video = props.video;
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="">
      <div className="">
        <div className="">
          <img className="" src={imageUrl} />
        </div>
        <div className="">
          <div className="">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
