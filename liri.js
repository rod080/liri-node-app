
/*
stuff to do:
-build app using a secure way to hide the keys
-finish movie part of assignment

-thers is no preview for some of the songs, therefore I included the link to the song
-hmm the find the concert app works partially, it works for eminem and 
-read read me for how to ducument the app
-what is do what it says instructions?
- is their a proper way to add it to the portfolio?
use moment js to to turn time into readable time.
*/



// require("dotenv").config();
// var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);
//step 7 and step 8 "code required to import?"

// var fs = require("fs");
// fs.writeFile("movies.txt", "food",function())

var fs = require("fs");
var Spotify = require('node-spotify-api');
var spotify = new Spotify({
    id: "4b39eb910f8b46e59a91c99af602d6a2",
    secret: "b5fdb73ccaf04fb38f9734ceadcee20d"
  });
var axiosvar = require('axios');
var action = process.argv[2];
var info = "";
info = process.argv[3];
    function search(){
    switch (action) {

        case "concert-this":
            getBand();
            break;
        case "spotify-this":
            getSong();
            break;
        case "movie-this":
            getMovie();
            break;
        case "do-what-it-says":
            getText();
            break;

        default:
        // code blocknodenode
    }
  }

function getBand(){
    axiosvar.get("https://rest.bandsintown.com/artists/" + info + "/events?app_id=codingbootcamp").then(function (res) {
        // console.log(res.data);
        console.log(res.data[0].venue.name);//hmmm it doesnt understad 'venue'?
        console.log(res.data[0].venue.city);
        console.log(res.data[0].venue.country);
        console.log(res.data[0].datetime);
        //why doesnt my code give me the same concert times and placea as the ones on 
    })
}

function getMovie(){
    axiosvar.get("https://www.omdbapi.com/?t=" + info + "&apikey=trilogy").then(function(res){
        console.log(res.data);
        console.log(res.data.Title);
        console.log(res.data.Title);
        // console.log(res.data[0].released);

    })
}
//info does what?
function getSong(){
  console.log(info);
    spotify.search({ type: 'track', query: info}, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
      console.log("Song preview: " + data.tracks.items[0].preview_url);
    // console.log("additional data: " + data);
      console.log("Artist name: " + data.tracks.items[0].album.artists[0].name);
      console.log("Song name: " + data.tracks.items[0].name);
      console.log("Link to song: " + data.tracks.items[0].album.external_urls.spotify);
      console.log("Album: " + data.tracks.items[0].album.name);


    //   console.log(data.tracks.items[0].album.artists.name);  
     
      });
    
}

function getText(){
  
fs.readFile("random.txt", "utf8", function(error, data) {
  if (error) {
    return console.log(error);
  }
  // console.log(data);
  
  var dataArr = data.split(" ");

  // We will then re-display the content as an array for later use.
  console.log(dataArr);
  // console.log(dataArr[0]);
  search = dataArr[0];
  var theaction = dataArr.shift();
  console.log(dataArr);
  // var bestarray = newvar.join("");
  console.log(theaction);
 
  info = console.log(dataArr.join(" "));


  

//   spotify.search({ type: 'track', query: info }, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
//   console.log("Song preview: " + data.tracks.items[0].preview_url);
// // console.log("additional data: " + data);
//   console.log("Artist name: " + data.tracks.items[0].album.artists[0].name);
//   console.log("Song name: " + data.tracks.items[0].name);
//   console.log("Link to song: " + data.tracks.items[0].album.external_urls.spotify);
//   console.log("Album: " + data.tracks.items[0].album.name);


// //   console.log(data.tracks.items[0].album.artists.name);  
 
//   });
});

}




search();










