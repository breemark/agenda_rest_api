var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');
  mongoose.set('useFindAndModify', false);
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;

// localhost
// mongoose.connect('mongodb://localhost/tododb'); 

/* mLab database!
mongoose.connect('mongodb://user:password@666.mlab.com:666/tododb', 
    {useNewUrlParser: true }, (err) => {
    {
        if(err) {
            console.log('Some problem with the connection ' +err);
        } else {
            console.log('The Mongoose connection is ready 🤪');
        }
    }});
*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//importing route
var routes = require('./api/routes/todoListRoutes'); 

//register the route    
routes(app); 


app.listen(port);


console.log('todo list RESTful API server started on: ' + port + ' 🤠');


/** 
 * Middlewares basically intercepts incoming http request
 * and as such you can use them to perform several operations  
 * ranging from authentication to validations etc.
 */

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });