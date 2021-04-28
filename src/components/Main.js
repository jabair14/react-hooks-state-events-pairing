import React from "react";
import video from "../data/video.js";
import CommentList from "./CommentList";

// const video = {
//     id: 1,
//     title: "React Today and Tomorrow and 90% Cleaner React With Hooks",
//     embedUrl: "https://www.youtube.com/embed/dpw9EHDh2bM",
//     views: 730707,
//     createdAt: "Oct 26, 2018",
//     upvotes: 9210,
//     downvotes: 185,
//     comments: [


function Main () {
    return (
        <>
        <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
      <h2> {video.title} </h2>
      <p> {video.views} Views | Uploaded {video.createdAt}  </p>
      <button > {video.upvotes} 👍 </button> <button> {video.downvotes} 👎 </button>
      <br></br>
      <br></br>
      <button> Hide Comments </button>
      <CommentList comments = {video.comments} />
      </>
    )
}

export default Main;