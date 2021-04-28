import React from "react";


function Comments ( props ) {
    return (
        <>
        <h4>{props.user} </h4>
        <p> {props.comment} </p>
        </>

    )
}

export default Comments;