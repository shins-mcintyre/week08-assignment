// static route --> "/posts"
import pg from "pg"
import {db} from "@/utils/dbConnection"
import Link from "next/link";

// TODO: render a list of all posts

export default async function HikeMenuPage({searchParams}) {

  const query=await searchParams
  
  const blogposts = (await db.query(`SELECT * FROM hike_blog`)).rows;
  console.log(blogposts)

  if (query.sort === "asc"){
    blogposts.sort(
      (a,b) => new Date(a.date) - new Date(b.date)
    )
  }

  if (query.sort === "desc"){
    blogposts.sort(
      (a,b)=> new Date(b.date) - new Date(a.date)
    )
  }

  return (
    <section className="hike-menu-content">
    
      <h2>Explore some hikes to try</h2>

      <Link href="/hike-menu?sort=asc">Sort oldest to newest</Link> - <Link href="/hike-menu?sort=desc">Sort newest to oldest</Link>
      
      <div className="hike-menu-boxes">
        {blogposts.map((blogpost) => {
          const formattedDate = new Date(blogpost.date).toLocaleDateString(
            "en-GB",
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          );

          return (
            <Link 
              key={blogpost.id} 
              className="hike-box"
              href={`/hike-menu/${blogpost.id}`}>
              <img
                src={blogpost.image}
                alt={`Image of ${blogpost.hike_name}`}
              />
              <h3>{blogpost.hike_name}</h3>
              <p>{formattedDate}</p>
            </Link>
          );
        })}
      </div>

    </section>
  );
}