// TODO: implement a form to collect comment data

import {db} from "@/utils/dbConnection"
import {revalidatePath} from "next/cache"
import {redirect} from "next/navigation"
// import formStyles from "./commentForm.module.css";

export default function CommentForm({hikeId}){

    async function handleSavePost(formData){
    "use server"
   
    // storing form values --> object
    console.log(formData)
    
    const formValues ={
        username: formData.get("username"),
        comment: formData.get("comment"),
}
        console.log(formValues)

    await db.query(`INSERT INTO hike_comments (username, comment, hike_blog_id) VALUES
    ($1, $2, $3)`, 
    [
        formValues.username, 
        formValues.comment,
        hikeId 
        ]);
        console.log("Post saved!")

    revalidatePath(`/hike-menu/${hikeId}`)

}
    return(
        <>
        <form action ={handleSavePost} 
        // className={formStyles.commentForm}
        >

            <label htmlFor="username">Your Name:</label>
            <input type="text" name="username" required maxLength={255}></input>

            <label htmlFor="comment">Comments:</label>
            <input type="text" name="comment" required></input>

            <button className="bg-amber-600">Submit</button>
        
        </form>
        </>
    )
}