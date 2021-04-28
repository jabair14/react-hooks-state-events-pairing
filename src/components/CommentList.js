import React from "react";
import Comments from "./Comments";

function CommentList ({comments}){

    const commentsArr = comments.map((comment) => 

         { return ( <Comments 
            key={comment.id}
            user={comment.user}
            comment={comment.comment}

        
        /> )}
    )
    return (
        <>
        <h3> Comments </h3>
         {commentsArr}
         </>

    )
}



export default CommentList;