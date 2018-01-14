// Import profile
const profile = require('./profile');

// Input required users in command line
const users = process.argv.slice(2);
users.forEach(profile.get);
