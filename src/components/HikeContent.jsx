import pg from "pg"
import {db} from "@/utils/dbConnection"

export default async function HikeContent({hikeId}){

    // const {hikeId} = params;

    const blogpost = (await db.query(`SELECT * FROM hike_blog WHERE id = $1`, [hikeId])).rows

    if (blogpost.length === 0){
        return <p>Hike not found</p>
    }

    const post = blogpost[0]

        const formattedDate = new Date(post.date).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
        });

    return(
        <>
        {blogpost.map((post)=>(
            <div key={post.id}>
                <h2>{post.hike_name}</h2>
                <p>{formattedDate}</p>
                <img 
                    src={post.image} 
                    alt={`Image of ${post.hike_name}`}/>
                
                <div className="hike-stats-container">
                    <h3>What you need to know:</h3>
                    <p>Distance: {post.distance_km}km</p>
                    <p>Approx. time: {post.approx_time_hrs} hours</p>
                    <p>Difficulty: {post.difficulty}</p>
                    <p>Route type: {post.route_type}</p>
                    <p>Elevation: {post.elevation_m}m</p>
                    <p>Parking: {post.parking ? "Yes":"No"}</p>
                    <p>Fee: €{post.fee_euro}</p>
                    <p>Dog-friendly: {post.dog_friendly ? "Yes":"No"}</p>
                </div>

                <div className="blog-content">
                    <article>{post.content}</article>
                </div>
            </div>))}
            </>
    )}
    


        
