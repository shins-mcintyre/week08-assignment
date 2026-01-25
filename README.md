# Requirements

## Main Requirements
🎯 Display all posts on the page, with an option to sort them in ascending or descending order.
🎯 Create a SQL schema for a posts table and a comments table, with the comments being connected to the posts table with a foreign key.
Please submit your database schema, as is mentioned in the submission instructions.
🎯 Create a delete button on posts that allows users to delete the post from the database.
🎯 Create a form which saves comments to a dedicated comments table, with the comments being connected to the posts table with a foreign key.
🎯 Allow users to comment on individual posts in their dynamic routes. Comments should be associated with posts, and have a dynamic route (e.g. /posts/:postid).
🎯 Add a redirect when a user creates a post to redirect them to the posts page.

## Stretch Requirements
🏹 Implement a select input (or similar mechanism) that allows users to categorise posts during creation, storing them in their own table in the database. Ensure appropriate routing for categories, with endpoints such as /categories and /categories/:id to enable users to browse and interact with posts by category.
🏹 Create an edit functionality accessible via /posts/:id/edit, which pre-fills a form for post data. Create a working PUT route to update the post in the database.
🏹 Develop an edit comment feature accessible via /posts/:id/comments/:id/edit, which pre-fills a form for comment data. Create a working PUT route to update the comment in the database.

# Reflection
Please also provide an assignment reflection in your project README.md file.

Due to some personal reasons and events I could not this week work on the assignment past Friday afternoon - I was hoping I would find a little time to get some more done but unfortunately it wasn't possible. So of course this is a site that is very unfinished. I caught up watching the styling demo that I missed when I felt unwell and started setting up the variables etc to add styling to the elements for each component/page, but that is where I got cut off and did not get to complete. However before that, as I knew I would have more limited time than usual, I really focussed and prioritiesed the requirements. I feel I met all the necessary requirements successfully:

-- On the 'hikes' page, all information about each hike loads on the page. There is a control to sort these by date (asc/desc)
-- SQL schema written up to create tables necessary, input data, and link them (see queries.sql)#
-- On the individual hike pages, there is a form where user can fill in name and comment about the page. This data is sent through to the database on Supabase, and it is rendered onto that specific page for all to see. There is also a delete button so any of these entries can be deleted via the page

Unfortunately again due to those time contraints i didn;t get to start on any stretch goals here.

Although this particular project felt a bit chaotic to get those requirements done in such a short space of time (knowing I wouldn't have the weekend to work on it), and it's not a project I am proud to share since it is very unfinished, I am proud that I not only managed to reach the requirement goals, but I also feel that by doing those I really came to understand much more about next.js and grew confidence with it. I was excieted to do the styling in this new way too - using modules and root, so hopefully I will get to try that properly in a future project!

## Required
🎯 What requirements did you achieve?
🎯 Were there any requirements or goals that you were unable to achieve?
🎯 If so, what was it that you found difficult about these tasks?

## Optional
🏹 Feel free to add any other reflections you would like to share about your submission, for example:

- Requesting feedback about a specific part of your submission.
- What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
- What errors or bugs did you encounter while completing your assignment? How did you solve them?
- What went really well and what could have gone better?