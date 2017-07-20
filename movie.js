"use strict"

const request = require("request");
const mySecretInfo = require("./env.js");

function get(movieTitle) {
	console.log("this is the get function!");
	request("https://www.googleapis.com/customsearch/v1?key=" + mySecretInfo.myKey + "&cx=" + mySecretInfo.myId + "&q=" + movieTitle, function(error, response, body) {
		//console.log('error:', error); // Print the error if one occurred 
		//console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
		//console.log('body:', body); // Print the HTML for the Google homepage.
		var parsedMovieData = JSON.parse(body);
			console.log(parsedMovieData.items[0].link);
	});
}

module.exports = get;

// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred 
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
//   console.log('body:', body); // Print the HTML for the Google homepage. 
// });