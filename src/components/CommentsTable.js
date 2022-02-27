import React from "react";
import Comment from "./Comment";

function CommentsTable({comments, commentsDisplayed, removeComment, searchComments}) {
    const commentsJsx = comments.map((comment) => {
        return (
            <Comment key={comment.id} id={comment.id} user={comment.user} comment={comment.comment} removeComment={removeComment} displayStatus={searchComments[comment.id]} />
        );
    });
    return (
        <div className={commentsDisplayed ? "" : "hidden"}>
            <h3>{`${comments.length} Comments`}</h3>
            {commentsJsx}
        </div>
    )
}

export default CommentsTable;