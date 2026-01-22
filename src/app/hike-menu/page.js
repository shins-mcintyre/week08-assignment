// static route --> "/posts"

import HikeThumbnail from "@/components/HikeThumbnail";

// TODO: render a list of all posts

export default function HikePostsMenuPage() {
  return (
    <section className="hike-menu-content">
    
      <h2>Explore some hikes to try</h2>
      
      <div className="hike-menu-boxes">
        <HikeThumbnail/>
        <HikeThumbnail/>
        <HikeThumbnail/>
        <HikeThumbnail/>
        <HikeThumbnail/>
        <HikeThumbnail/>
      </div>

    </section>
  );
}