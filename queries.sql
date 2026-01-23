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

-- Add data to blog table
INSERT INTO hike_blog (hike_name, date, image, distance_km, approx_time_hrs, difficulty, route_type, elevation_m, fee_euro, dog_friendly, parking, content) VALUES 

('Glendalough', '2026-01-21', 'https://images.unsplash.com/photo-1682435805786-feac03a582a7?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '7', '3', 'Medium', 'Loop', '170', '5', 'true', 'true', 'In a stunning glaciated valley in County Wicklow, in the sixth century, one of Ireland’s most revered saints founded a monastery. The foundation of St Kevin at Glendalough became one of the most famous religious centres in Europe.

The remains of this ‘Monastic City’, which are dotted across the glen, include a superb round tower, numerous medieval stone churches and some decorated crosses. Of particular note is St Kevin’s Bed, a small man-made cave in the cliff face above the Upper Lake. It is said that St Kevin lived and prayed there, but it may actually be a prehistoric burial place that far predates him.'), 

('Benbulben', '2025-12-10', 'https://images.unsplash.com/photo-1751556655700-40b40cc006d2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '11', '3', 'Hard', 'Out-and-back', '500', '0', 'false', 'true', 'This walk is the long way to reach to top of Benbulben, but it is probably the one which requires the least climbing. You basically drive to Ardnaglass upper and park at the river (Also known as Lukes Bridge). Here is a small parking space for a couple of cars.

From here, you follow the tarmac road which follows the small river until you reach a small bridge across the river. Cross the river and follow the bog road up to the end. This was the easy bit. Make your way through the bog towards the small river which comes down the mountain (see picture below, route highlighted in red) . You can actually see the trail along the slope. From her, it is straight up the mountain along a very narrow path. This path flattens slightly once you reach the river.

 When you reach the top, turn right and follow the edge towards Benbulben summit. 

Note: This walk requires good preparation (weather needs to be good, especially if you have never climbed Benbulben before). Also be mindful that the weather can change rapidly and visibility due to long-hanging clouds or fog can become a problem.
Decent shoes and clothes are also required.
If you are not sure, there are multiple guides who can take you up the mountain.'), 

('Devil''s Chimney Waterfall', '2025-11-01', 'https://images.unsplash.com/photo-1635501840896-5a7889de9726?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '3', '1', 'Easy', 'Lollipop circuit', '140', '0', 'true', 'true', 'Sruth in Aghaidh an Aird roughly translates as Stream Against the Height. It flows from the peaty summit of the Dartry Mountains overlooking Glencar Lake.
Sruth in Aghaidh an Aird is listed on the World Waterfall Database as Ireland’s tallest waterfall. With a vertical drop of 150m (492 ft), it is especially spectacular after periods of rainfall. When the wind blows across Glencar Valley, this can give the impression that the waterfall is flowing upwards. Note that the waterfall generally doesn’t flow during prolonged periods of dry weather.
The recommended route is counter-clockwise and as you approach the high point of the walk, a kissing gate to your right brings you to a viewing point that is almost directly beneath the waterfall itself. Continue along this path to reconnect with the main path before beginning your descent.

Alternative viewing points are located at the high points of the main path. These provide seated areas that give spectacular views both of the waterfall and also back towards Glencar Lake and the opposite side of the valley. Steps have been installed to help the walker navigate the steeper parts of the trail, and care should be taken particularly after rainfall as they can become slippery.'), 

('Wild Nephin National Park', '2025-10-15', 'https://plus.unsplash.com/premium_photo-1666324043226-c6d616e1cbcc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '5', '2', 'Medium', 'Loop', '85', '0', 'true', 'true', 'Located on the Western seaboard in northwest Mayo, Wild Nephin National Park covers a vast 15,000 hectares of uninhabited and unspoilt wilderness, dominated by the Nephin Beg mountain range. To the west of the mountains is the Owenduff Bog, one of the last intact active blanket bog systems in Western Europe.

The National Park also protects other important habitats and species including alpine heath, upland grassland, heath, lakes and river catchments. Greenland white-fronted geese, golden plover, red grouse and otters are just some of the important fauna found within the National Park.'), 

('Benwee Head Cliff Walk', '2025-09-12', 'https://images.unsplash.com/flagged/photo-1557920085-d9532f1ca112?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '13', '5', 'Medium', 'Out-and-back', '620', '0', 'true', 'false', 'Located along the glorious North Mayo coast around an hours drive from Ballina, the area is home to many trails known as the ‘Carrowteige Loop Walks’.
The cliffs here are unguarded, so great caution is required. Please keep your distance from the edge and mind yourself at all times.
At its highest point, Benwee Head hits 250m above the chilly Altantic below. For perspective, the Cliffs of Moher reach 214m above sea level.

The cliffs here overlook Broadhaven Bay and the famous 4 Stags of Broadhaven – 4 islands that rise 100m above sea level.

The majesty of nature is all around, with the towering cliffs, steep tracks, and thunderous waves attacking the coast, resulting in huge sea stacks and rock formations.

Benwee Head is the tallest in the Dun Chaochain range, and it’s remarkably different to other Irish mountains with a unique yellow colour, although it complements the green surroundings wonderfully.
The sheer north face of the cliff seems to fall vertically into the Atlantic Ocean.'), 

('Aughris Head Cliff Walk', '2025-08-27', 'https://images.unsplash.com/photo-1616934039524-f00338045bcf?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '4', '2', 'Medium', 'Loop', '40', '0', 'false', 'true', 'Discover Aughris Head peninsula in Sligo and take in the scenic views of Aughris and Dunmoran beaches, Sligo Bay and Knocknarea Mountain.
Stroll along the sandy strands of Aughris and Dunmoran beaches, or follow the coastal cliff walk along Aughris Head and take in the dramatic landscape shaped by the Atlantic. Aughris Head is located in a rural area in southern Silgo Bay. The ideal starting point for an exploration is the parking space at the Beach Bar, a traditional Irish pub. To the west, the path leads along the coast to a sacred spring associated with St. Patrick. The view over Sligo Bay is breathtaking.
Starting from the parking space you can also reach Dunmoran Beach. Aughris Coastal Walk is one of the most spectacular walks in Sligo, and indeed anywhere along the Wild Atlantic Way. It’s also relatively flat, and at just 4km it’s one that will appeal to all members of the family and to those looking for a gentle looped walk along a clearly marked path, along with a mix of great views!');



-- Use a JOIN to match the hike_blog_id in the hike_comments table with the id in the hike_blog table. 
-- select hike_comment column names AS blog from hike_comments - JOIN hike_blog ON hike_comments.blog_id = hike_blog.id

SELECT hike_comments.username, hike_comments.comment AS blog
FROM hike_comments
JOIN hike_blog ON hike_comments.hike_blog_id = hike_blog.id