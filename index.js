


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};

// Function that creates a login tracker for a given user
function createLoginTracker(userInfo) {
  let attemptCount = 0; // Tracks number of failed attempts
  const maxAttempts = 3; // Maximum allowed attempts

  // Return an inner function that takes a password attempt
  return (passwordAttempt) => {
    // If account is already locked
    if (attemptCount >= maxAttempts) {
      return "Account locked. Too many failed attempts.";
    }

    // If password is correct
    if (passwordAttempt === userInfo.password) {
      return `Welcome, ${userInfo.username}! Login successful.`;
    } 
    // If password is incorrect
    else {
      attemptCount++;
      if (attemptCount >= maxAttempts) {
        return "Account locked. Too many failed attempts.";
      } else {
        const attemptsLeft = maxAttempts - attemptCount;
        return `Incorrect password. Attempts left: ${attemptsLeft}`;
      }
    }
  };
}

// Export for testing
module.exports = {
  createLoginTracker
};
