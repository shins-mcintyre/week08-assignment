import pg from "pg"
import {db} from "@/utils/dbConnection"
import { revalidatePath } from "next/cache"
import commentsStyles from "@/styles/liveComments.module.css"

export default async function LiveComments({hikeId}){

    const commentPost = (await db.query(
        `SELECT * FROM hike_comments WHERE hike_blog_id=$1`, [hikeId])).rows

        async function handleDeleteComment(formData){
            "use server";
            const commentId = formData.get("commentId");
            await db.query(
                `DELETE FROM hike_comments WHERE id=$1`, [commentId]
            )
            revalidatePath(`/hike-menu/${hikeId}`)
        }

    if (commentPost.length === 0){
        return <p>No comments yet, be the first to share something!</p>
    }

    const post = commentPost[0]

    return(
        <>
        {commentPost.map((post)=>(
            <div key={post.id} className={commentsStyles.commentBox}>
                <h3 className={commentsStyles.h3}>{post.username} says...</h3>
                <p className={commentsStyles.p}>{post.comment}</p>

                <form action={handleDeleteComment}>
                    <input type="hidden" name="commentId" value={post.id}/>
                    <button
                        type="submit"
                        className={commentsStyles.submitButton}
                        // onClick={()=>{
                        //     if(!confirm("Are you sure you want to delete this comment?")){
                        //         event.preventDefault()
                        //     }
                        // }}
                        >
                            Delete
                        </button>
                </form>
            </div>
        ))}
        

        </>
    )
}


    


        
