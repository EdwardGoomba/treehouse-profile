// Import modules
const https = require('https');

// Function to print message to console
function printMessage(username, badgeCount, point) {
  const message = `${username} has ${badgeCount} total badge(s) and ${point} points in JavaScript.`;
  console.log(message);
}

function getProfile(username) {
// Connect to API Url (https://teamtreehouse.com/username.json)
  const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {

    let body = '';
    // Read the data
    response.on('data', data => {
      body += data.toString();
    });

    response.on('end', () => {
      // Parse the data
      const profile = JSON.parse(body);
      // Print the data
      printMessage(username, profile.badges.length, profile.points.JavaScript);
    })

  });
};

// Input required users in command line
const users = process.argv.slice(2);
users.forEach(getProfile);
