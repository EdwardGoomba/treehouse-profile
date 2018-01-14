// Import modules
const https = require('https');

const username = 'edwarddanilyuk';

// Function to print message to console
function printMessage(username, badgeCount, point) {
  const message = `${username} has ${badgeCount} total badge(s) and ${point} points in JavaScript`;
  console.log(message);
}


// Connect to API Url (https://teamtreehouse.com/username.json)
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
  console.log(response.statusCode);
  // Read the data
  // Parse the data
  // Print the data

});
