import React, {useState} from "react";
import CommentsTable from "./CommentsTable";
import CommentsHeader from "./CommentsHeader";

function CommentsDisplay({comments}) {
    const [commentsDisplayed, setCommentsDisplay] = useState(true);
    const [commentsState, setCommentsState] = useState(comments);
    const [searchInput, setSearchState] = useState("");
    let initialSearchObj = {};
    for(const comment of comments) {
        initialSearchObj[comment.id]= true;
    }
    const [searchComments, setSearchComments] = useState(initialSearchObj);

    function handleSearch(e) {
        setSearchState(e.target.value);
        const searchMatches = {...searchComments};
        for(const comment of commentsState) {
            searchMatches[comment.id] = comment.user.includes(e.target.value);
        }
        setSearchComments(searchMatches);
    }
/*
    function handleSearch(e) {
        setSearchState(e.target.value);
        const matches = comments.map((comment) => {
            if(comment.user.includes(e.target.value))) {

            }
        setCommentsState(matches);
    }
    */
    
    function removeComment(id) {
        const updatedComments = commentsState.filter((comment) => comment.id !== id)
        setCommentsState(updatedComments);
        const displayObj = {...searchComments};
        delete displayObj[id];
        setSearchState(displayObj);
    }

    return (
        <div>
            <CommentsHeader commentsDisplayed={commentsDisplayed} setCommentsDisplay={setCommentsDisplay} handleSearch={handleSearch} />
            <CommentsTable comments={commentsState} commentsDisplayed={commentsDisplayed} removeComment={removeComment} searchComments={searchComments}/>
        </div>
    );
}

export default CommentsDisplay;