import React from "react"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="w-full h-full">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      controls="0"
      showinfo="0"
      style={{ width: `100%`, height: `100%` }}
    />
  </div>
)
export default Video