import video from "../data/video.js";
import React from "react";
import CommentsDisplay from "./CommentsDisplay";
import VideoDisplay from "./VideoDisplay";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoDisplay title={video.title} video={video.embedUrl} views={video.views} uploaded={video.createdAt} upvotes={video.upvotes} downvotes={video.downvotes} />
      <CommentsDisplay comments={video.comments} />
    </div>
  );
}

/**<iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      */

export default App;
