// TODO: implement a form to collect comment data

import {db} from "@/utils/dbConnection"
import {revalidatePath} from "next/cache"
import {redirect} from "next/navigation"
// import formStyles from "./commentForm.module.css";

export default function CommentForm(){

    async function handleSubmit(rawformData){
    "use server"
   
    // storing form values --> object
    console.log(rawformData)
    
    const formValues ={
        username: rawformData.get("username"),
        comments: rawformData.get("comments"),
}

    console.log(formValues)

    db.query(`INSERT INTO hike_comments (username, comments) VALUES
    ($1, $2, $3, $4)`, 
    [
        formValues.username, 
        formValues.comments, 
        ])

    revalidatePath("/hike-menu/:hikeId")

}
    return(
        <>
        <form action ={handleSubmit} 
        // className={formStyles.commentForm}
        >

            <label htmlFor="username">Your Name:</label>
            <input type="text" name="username" required maxLength={255}></input>

            <label htmlFor="comments">Comments:</label>
            <input type="text" name="comments" required></input>

            <button className="bg-amber-600">Submit</button>
        
        </form>
        </>
    )
}