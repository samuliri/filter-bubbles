// Information toggle
$('.info').click(function(){
  $(".popup").toggle("show");
});

// Bubbles function
bubbles();

// Twitter configuration
var configProfile = {
  "profile": {"screenName": 'realdonaldtrump'},
  "domId": 'tweetWrapper',
  "maxTweets": 1,
  "enableLinks": true, 
  "showUser": true,
  "showTime": true,
  "showImages": false,
  "lang": 'en',
  "showRetweet": false,
  "showInteraction": false,
};
twitterFetcher.fetch(configProfile);