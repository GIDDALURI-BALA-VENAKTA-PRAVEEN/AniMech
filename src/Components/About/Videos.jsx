import "./Videos.css";

import React from "react";
import sample from "./Assests/Sample.mp4";

export function Videos() {
  return (
    <div className="vc-background">
      <br></br>

      <div className="vc-grid">
        <video
          className="video-back"
          autoPlay
          loop
          muted
          controls
          playbackRate="3"
        >
          <source src={sample} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
