import React from 'react';

const Video = () => {
  let videos =
    "https://www.youtube.com/embed/kAUKkpizl_g" +
    "?autoplay=1&mute=1&controls=0&showinfo=0&disablekb=1&modestbranding=1&autohide=1&loop=1";
  return (
    <div className="video-wrapper">
      <iframe title="youtube-wrapper" src={videos} frameBorder="0"/>
    </div>
  );
};

export default Video;
