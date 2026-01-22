// dynamic route --> "/posts/:postId"

import pg from "pg"
import {db} from "@/utils/dbConnection"
import CommentForm from "@/components/CommentForm";
import LiveComments from "@/components/LiveComments";
import HikeContent from "@/components/HikeContent";

// TODO: render each post individually and the comments related to it
// - Individual post content
// - Comments form to submit comments
// - Render a list of all comments connected to this particular post
// - Add a delete button to each comment
// ? You can organise this page in the way that works for you (using components, separating concerns, having all code in here... what you prefer)


export default async function HikeBlogpostPage({params}) {

  const {hikeId} = await params;

  
  return (
    <>
      <section className="hike-id-content-section">
        <HikeContent hikeId={hikeId}/>
      </section>
<hr></hr>
      <section className="hike-id-comment-section">
        <h3>Share your thoughts and questions below...</h3>
        <CommentForm hikeId={hikeId}/>
        <LiveComments hikeId={hikeId}/>
      </section>
    </>
  );
}