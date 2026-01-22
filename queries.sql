-- Create Hike Blog Table
CREATE TABLE IF NOT EXISTS hike_blog (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  hike_name VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  image TEXT NOT NULL,
  distance_km INT NOT NULL,
  approx_time_hrs INT NOT NULL,
  difficulty VARCHAR(255) NOT NULL,
  route_type VARCHAR(255) NOT NULL,
  elevation_m INT NOT NULL,
  fee_euro INT NOT NULL,
  dog_friendly BOOLEAN NOT NULL,
  parking BOOLEAN NOT NULL,
  content TEXT NOT NULL
);

-- Create table for comments

CREATE TABLE IF NOT EXISTS hike_comments (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(255) NOT NULL,
  comment TEXT NOT NULL,
  hike_blog_id INTEGER REFERENCES hike_blog(id)
);

-- ! FINISH ADDING INSERT QUERY WHEN COMPLETED


-- Use a JOIN to match the hike_blog_id in the hike_comments table with the id in the hike_blog table. 
-- select hike_comment column names AS blog from hike_comments - JOIN hike_blog ON hike_comments.blog_id = hike_blog.id

SELECT hike_comments.username, hike_comments.comment AS blog
FROM hike_comments
JOIN hike_blog ON hike_comments.hike_blog_id = hike_blog.id