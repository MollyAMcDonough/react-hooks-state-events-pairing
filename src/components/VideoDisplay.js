import React, {useState} from "react";
import VoteButtons from "./VoteButtons";
//import Video from "./Video";
//import Details from "./Details";

function VideoDisplay({title,video,views,uploaded,upvotes,downvotes}) {
    
    return (
        <div>
            <iframe
                width="919"
                height="525"
                src={video}
                frameBorder="0"
                allowFullScreen
                title={title}
            />
            <h2>{title}</h2>
            <sub>{`${views} Views | Uploaded ${uploaded}`}</sub>
            <VoteButtons upvotes={upvotes} downvotes={downvotes}/>
        </div>
    )
}

export default VideoDisplay;