// Import profile
const profile = require('./profile');
const print = require('./print');

// Input required users in command line
const users = process.argv.slice(2);
users.forEach(profile.get);

print.error;
print.message;
