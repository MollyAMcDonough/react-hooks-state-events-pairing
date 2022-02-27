import React, {useState} from "react";

function VoteButtons({upvotes,downvotes}) {
    const [likes, setLikes] = useState(upvotes);
    const [dislikes, setDislikes] = useState(downvotes);
    return (
        <div>
            <button onClick={()=>setLikes(likes+1)}>{`${likes} 👍`}</button>
            <button onClick={()=>setDislikes(dislikes+1)}>{`${dislikes} 👎`}</button>
        </div>
    )
}

export default VoteButtons;