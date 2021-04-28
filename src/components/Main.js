import React, {useState} from "react";
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
  const currUpvotes = video.upvotes
  const [upvotesCount, setUpCount] = useState(currUpvotes)

  const currDownvotes = video.downvotes
  const [downvotesCount, setDownCount] = useState(currDownvotes)

  const [isHidden, setIsHidden] = useState(true)
  
  function handleUpvote() {
    setUpCount(upvotesCount + 1)
  }

  function handleDownvote() {
    setDownCount(downvotesCount + 1)
  }

  function handleHideComments() {
    setIsHidden(!isHidden)
  }

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
      <button onClick={handleUpvote} > {upvotesCount} 👍 </button> <button onClick={handleDownvote}> {downvotesCount} 👎 </button>
      <br></br>
      <br></br>
      <button onClick={handleHideComments}> {isHidden ? "Hide Comments" : "Show Comments" }</button>
      {isHidden ? <CommentList comments = {video.comments} /> : null }
      </>
    )
}

export default Main;