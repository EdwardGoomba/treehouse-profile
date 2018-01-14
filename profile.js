// Import modules
const https = require('https');
const http = require('http');
const print = require('./print');

// Get user data
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
            print.message(username, profile.badges.length, profile.points.JavaScript);
          } catch (error) {
            print.error(error);
          }
        });
      } else {
        const message = `There was an error getting the profile for ${username} (${http.STATUS_CODES[response.statusCode]})`;
        const statusCodeError = new Error(message);
        print.error(statusCodeError);
      }

    });

    request.on('error', print.error);
  } catch (error) {
    print.error(error);
  }
}

// Export file
module.exports.get = get;
