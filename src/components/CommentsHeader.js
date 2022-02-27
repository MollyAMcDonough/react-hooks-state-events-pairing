import React from "react";

function CommentsHeader ({commentsDisplayed, setCommentsDisplay, handleSearch}) {
    return (
        <div className="divider">
            
            <label>Search Comments by User: </label>
            <input type="text" name="search" onChange={(e)=>handleSearch(e)}/>
            <button onClick={()=>setCommentsDisplay(!commentsDisplayed)}>{commentsDisplayed ? "Hide Comments" : "Show Comments"}</button>
        </div>
    );

}

export default CommentsHeader;