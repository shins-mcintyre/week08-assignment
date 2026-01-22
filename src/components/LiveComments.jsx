import pg from "pg"
import {db} from "@/utils/dbConnection"

export default async function LiveComments({hikeId}){

    const commentPost = (await db.query(
        `SELECT * FROM hike_comments WHERE hike_blog_id=$1`, [hikeId])).rows

    if (commentPost.length === 0){
        return <p>No comments yet, be the first to share something!</p>
    }

    const post = commentPost[0]

    return(
        <>
        {commentPost.map((post)=>(
            <div key={post.id}>
            <h3>{post.username} says...</h3>
            <p>{post.comment}</p>
            </div>
        ))}
        

        </>
    )
}


    


        
