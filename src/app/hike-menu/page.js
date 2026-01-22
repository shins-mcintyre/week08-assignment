// static route --> "/posts"
import pg from "pg"
import HikeThumbnail from "@/components/HikeThumbnail";
import {db} from "@/utils/dbConnection"

// TODO: render a list of all posts

export default async function HikeMenuPage() {

  const blogposts = (await db.query(`SELECT * FROM hike_blog`)).rows;
  console.log(blogposts)

  return (
    <section className="hike-menu-content">
    
      <h2>Explore some hikes to try</h2>
      
      <div className="hike-menu-boxes">
        {blogposts.map((blogpost)=>(
          <div key={blogpost.id}>{blogpost.hike_name}</div>
        ))}
        {/* <HikeThumbnail/>
        <HikeThumbnail/>
        <HikeThumbnail/>
        <HikeThumbnail/>
        <HikeThumbnail/>
        <HikeThumbnail/> */}
      </div>

    </section>
  );
}