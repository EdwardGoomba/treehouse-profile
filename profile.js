// Import modules
const https = require('https');
const http = require('http');

// Print Error Messages
function printError(error) {
  console.error(error.message);
}

// Function to print message to console
function printMessage(username, badgeCount, point) {
  const message = `${username} has ${badgeCount} total badge(s) and ${point} points in JavaScript.`;
  console.log(message);
}

function get(username) {
  try {
    // Connect to API Url (https://teamtreehouse.com/username.json)
    const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {

      if (response.statusCode === 200) {

        let body = '';
        // Read the data
        response.on('data', data => {
          body += data.toString();
        });

        response.on('end', () => {
          // Check for valid user, print error if user non existant
          try {
            // Parse the data
            const profile = JSON.parse(body);
            // Print the data
            printMessage(username, profile.badges.length, profile.points.JavaScript);
          } catch (error) {
            printError(error);
          }
        });
      } else {
        const message = `There was an error getting the profile for ${username} (${http.STATUS_CODES[response.statusCode]})`;
        const statusCodeError = new Error(message);
        printError(statusCodeError);
      }

    });

    request.on('error', printError);
  } catch (error) {
    printError(error);
  }
}

// Export file
module.exports.get = get;