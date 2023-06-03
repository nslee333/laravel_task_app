Task app built using Laravel / Inertia / React / Typescript.

This is a basic task app that uses laravel's authentication features to keep track of user's tasks.

Once you login you can add or delete tasks.

I initialized and used sqlite for the database, and added a migration to add a tasks array to a User entry. 

I have added a few http tests for web.php's routes and testing TaskController indirectly through the /tasks routes.