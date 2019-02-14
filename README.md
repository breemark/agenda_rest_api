# AGENDA Restful API

##### This project is dedicated to the Anevi students and in memory of 
##### my highschool classmates and teachers: 
##### Justo Sierra, Mexico City, IT class.
##### We made a project for the Science Fair back in 2011: 
https://www.youtube.com/watch?v=TX4RAr7LRPM
##### Now I am working to make a better version of the original Agenda that
##### was coded using Visual Basic 6


Instructions:

## Section I 
### Deploy the Agenda REST API

Alright, lets make this work

0. Clone this project. and using the terminal access this directory
#### You must have a MongoDB DATABASE!

1. First step is to run the command: 
    ```
    npm install
    ```
    cause this will install all the necessary packages to make this thing work

2. Now we need a MongoDB database, and well, there are two choices for this:
- Use your localhost
see 'server.js' line 12 and change that line
- Use mLab 
see 'server.js' line 15 and yeah, change that line
'mongodb://yourusernamehere:yourpasswordhere@theurlprovides.mlab.com:666/dbname'

3. run the server:
    ```
    npm start
    ```

## Section II 
### Test the Agenda REST API

For this practice we will use the curl command to test this REST API
We will test the current HTTP Methods
- GET: Used to get the resource from the server
- POST: Used to create, send, post, store resources to the server
- PUT: Used to UPDATE resources, yet can also be used to Create
- DELETE: deletes a resource

1. POST. Because first we need to create some resources, in order to see them later
    ```
    curl -d "title=title of the activity&description=description of the activity" 127.0.1.1:3000/tasks
    ```

2. GET
    ```
    curl 127.0.1.1:3000/tasks
    ```
    To get all the resources

    ```
    curl 127.0.1.1:3000/tasks/:taskId
    curl 127.0.1.1:3000/tasks/5c658a8cec77cc19008ccf4b # an example
    ```
    To get only one specific resource


3. PUT
    ```
    curl -X PUT -d "title=something&description=whatever" http://120.0.1:3000/tasks/:taskId
    curl -X PUT -d "title=something&description=whatever" http://120.0.1:3000/tasks/5c658a8cec77cc19008ccf4b
    ```
    To update a resource

4. DELETE
    ```
    curl -X "DELETE" http://127.0.0.1:3000/tasks/:taskId
    curl -X "DELETE" http://127.0.0.1:3000/tasks/5c658a8cec77cc19008ccf4b
    ```

And remember kids, always read the Manual first 🧐
If you have some question of something, can contact me on britomaximiliano83@gmail.com
