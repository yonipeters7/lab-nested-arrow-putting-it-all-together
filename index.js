// This function creates a secure login tracker for a user
// It uses a closure to keep track of login attempts privately
function createLoginTracker(userInfo) {
  // Tracks the number of login attempts
  let attemptCount = 0;
  // Maximum allowed attempts before account locks
  const maxAttempts = 3;

  // Return an inner arrow function that handles each login attempt
  return (passwordAttempt) => {
    // If the account is already locked
    if (attemptCount >= maxAttempts) {
      return "Account locked. Too many failed attempts.";
    }

    // If the password is correct, allow login
    if (passwordAttempt === userInfo.password) {
      return `Welcome, ${userInfo.username}! Login successful.`;
    }

    // Otherwise, increase attempt count
    attemptCount++;
    const remaining = maxAttempts - attemptCount;

    // If no attempts remain, lock the account
    if (remaining === 0) {
      return "Account locked. Too many failed attempts.";
    } else {
      // Otherwise, show how many attempts are left
      return `Incorrect password. Attempts left: ${remaining}`;
    }
  };
}

// Export the function so it can be tested by the grading system
module.exports = { createLoginTracker };
