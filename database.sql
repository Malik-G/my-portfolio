Database name: 'portfolio'

CREATE TABLE "tags" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL
);

CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL,
    "description" varchar(2048),
    "thumbnail" varchar(2048), 
    "website" varchar(2048),
    "github" varchar(2048),
    "date_completed" date,
    "tag_id" INT REFERENCES "tags"
);

INSERT INTO "tags" ("name") 
VALUES ('React'), ('jQuery'), ('Node'), ('SQL'), ('Redux'), ('HTML');

INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
VALUES ('Calculator', 'This is a fullstack calculator that can perform simple, two-operand operations and save the results to a server. The next goal for this project is to connect it to a database.', 'images/weekend_calculator.png', 'https://shielded-sea-77471.herokuapp.com/', 'https://github.com/Malik-G/weekendChallenge2', '10-14-2018', 2);

INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
VALUES ('Book Collection Keeper', 'This is a fullstack book list that takes basic information about a book and store that information in a dtabase. The next goal for this project is to refractor the inputs for editing a book.', 'images/book_list.png', 'https://peaceful-scrubland-66506.herokuapp.com/', 'https://github.com/Malik-G/pg-get-post-activity', '10-20-2018', 2);

INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
VALUES ('To-Do List', 'This is a fullstack to-do list that takes a new task as an input and saves the task to a database. The screen stays updated with most current list and the user has the option to: delete a task, "check off" a task when completed, or "uncheck" a previously completed task.', 'images/to_do_list.png', 'https://rocky-temple-99884.herokuapp.com/', 'https://github.com/Malik-G/weekend-sql-to-do-list', '11-07-2018', 4);
