


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};

// Secure Login Feature
// This program creates a simple login system that limits the number of login attempts a user can make.
// It uses nested and arrow functions to demonstrate closures and scope in JavaScript.

function createLoginTracker(userInfo) {
    // Track how many login attempts have been made
    let attemptCount = 0;
    const maxAttempts = 3; // Limit to three attempts

    // Inner arrow function that runs each time the user tries to log in
    const loginAttempt = (passwordAttempt) => {
        // If the account is already locked, stop right away
        if (attemptCount >= maxAttempts) {
            return "Account locked. Too many failed attempts.";
        }

        // Add one to the attempt count each time they try
        attemptCount++;

        // If the password is correct, log them in
        if (passwordAttempt === userInfo.password) {
            return `Welcome, ${userInfo.username}! Login successful.`;
        } 
        // If they’ve reached the max attempts, lock the account
        else if (attemptCount === maxAttempts) {
            return "Account locked. Too many failed attempts.";
        } 
        // Otherwise, tell them how many attempts remain
        else {
            return `Incorrect password. Attempts left: ${maxAttempts - attemptCount}`;
        }
    };

    // Return the inner function so it keeps access to attemptCount
    return loginAttempt;
}

//Example testing (optional)
// Uncomment these lines if you want to test it in your terminal:
const user = { username: "Yoni", password: "secure123" };
const attemptLogin = createLoginTracker(user);
console.log(attemptLogin("wrongpass")); // 1st try
console.log(attemptLogin("1234"));      // 2nd try
console.log(attemptLogin("secure123")); // success
console.log(attemptLogin("secure123")); // locked