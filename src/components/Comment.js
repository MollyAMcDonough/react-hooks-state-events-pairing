import React from "react";
import VoteButtons from "./VoteButtons"

function Comment ({id, user, comment, removeComment, displayStatus}) {
    return (
        <div id={id} className={displayStatus ? "" : "hidden"}>
            <h4>{user}</h4>
            <p>{comment}</p>
            <VoteButtons upvotes={0} downvotes={0} />
            <button onClick={()=>removeComment(id)}>x</button>
        </div>
    );
}

export default Comment;
