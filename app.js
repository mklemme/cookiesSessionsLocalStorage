var express = require('express'),
  app = express(),
  cookieParser = require('cookie-parser'),
  session = require('express-session');

app.set('view engine', 'ejs');

// No Session
app.use(cookieParser());
app.get('/', function(req, res){
  var counter = Number(req.cookies.views) || 0;
  counter++;
  //set cookie
  res.cookie("views", counter)
    .send("You've viewed this page " + counter + " times!");
});

// // Signed Session
// app.use(cookieParser("204820482048"));
// app.use(session());

// app.get('/secure', function(req, res){
//   var counter = Number(req.signedCookies.views) || 0;
//   counter++;
//   //set session
//   req.session.key = 'asdf';
//   //set cookie
//   res.cookie("views", counter, {signed: true})
//     .send("You've viewed this page " + counter + " times!" + " session id is " + req.session.key);
// });

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});