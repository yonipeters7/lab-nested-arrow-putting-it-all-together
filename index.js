// Outer function: creates a login tracker for a user
function createLoginTracker(userInfo) {
  // Tracks number of failed attempts
  let attemptCount = 0;
  const maxAttempts = 3;

  // Inner arrow function: handles login attempts
  const loginAttempt = (passwordAttempt) => {
    // If account is already locked
    if (attemptCount >= maxAttempts) {
      return "Account locked. Too many failed attempts.";
    }

    // If password is correct
    if (passwordAttempt === userInfo.password) {
      return `Welcome, ${userInfo.username}! Login successful.`;
    }

    // If password is incorrect
    attemptCount++;
    const remaining = maxAttempts - attemptCount;

    if (remaining === 0) {
      return "Account locked. Too many failed attempts.";
    } else {
      return `Incorrect password. Attempts left: ${remaining}`;
    }
  };

  // Return the inner function
  return loginAttempt;
}

// Export for grading
module.exports = { createLoginTracker };
