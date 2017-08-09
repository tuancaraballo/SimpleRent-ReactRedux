// server.js
// var express = require('express')
// var path = require('path')
//
// var app = express()
//
// // serve our static stuff like index.css
// app.use(express.static(__dirname))
//
// // send all requests to index.html so browserHistory in React Router works
// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })
//
// var PORT = process.env.PORT || 3000;
// app.listen(PORT, function() {
//   console.log('Production Express server running at localhost:' + PORT)
// })


var express = require('express');

var app = express();
const PORT = process.env.PORT ||  3000;

app.use(function(request, response, next) {  //--> openWeatherMap always operates on http and not https, so for this app, I'm going
											// to redirect all https traffic to http
	if(request.headers['x-forwarded-proto'] === 'https'){ //-> if traffic is over https, then modify it to http, this way it doesn't break
															// local host
		response.redirect('http://' + request.hostname + request.url);
	}else{
		next();
	}
});

// folder to expose to web server
app.use(express.static('public'));

/** -- this allows express server to server index.html for all requests
since it's a single page application*/
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/', 'index.html'))
})


app.listen(PORT, function() {
    console.log('Server listening to port '+ PORT);
});
