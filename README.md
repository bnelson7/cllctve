# **CLLCTVE**

## **Description**

A backend api and database for a hypothetical comment system where users can comment
on other CLLCTVE members' projects ( also called portfolio items). Utilized a MERN
Stack with mongoose to help write the models.

## **Features**

- GET all of the comments for a portfolio item

- GET all of the projects

- POST new comments as multiple users

## **Installation**

To run the project:

clone the repo locally: `git clone https://github.com/bnelson7/cllctve.git`

start the server: `npm run server`

## **Notes**

- In order to get all of the comments for a portfolio item you'll need a project id: `60db68dfe2b6ec5765ab079f`

- In order to post a comment you'll need a project id: `60db68dfe2b6ec5765ab079f`
to know which project is associated with the comment. As well as some user ids:
``` 
60db65695b0509521d85b038
60db659f5b0509521d85b03a
60db65b15b0509521d85b03c
60db65e75b0509521d85b03e 
```
- All of the routes are in the folder routes/api, and all of the models are in
the model folder
