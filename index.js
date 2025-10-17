// Define the outer function
function createLoginTracker(userInfo) {
  // Initialize the attempt counter
  let attemptCount = 0;

  // Return an inner function to handle login attempts
  return (passwordAttempt) => {
    // If the account is already locked
    if (attemptCount >= 3) {
      return "Account locked due to too many failed login attempts";
    }

    // Increment the attempt count
    attemptCount++;

    // Check the password
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {
      if (attemptCount < 3) {
        return `Attempt ${attemptCount}: Login failed`;
      } else {
        return "Account locked due to too many failed login attempts";
      }
    }
  };
}

// ---- Example test code (you can remove or comment this out later) ----

// Create a tracker for a specific user
const login = createLoginTracker({ username: "user1", password: "password123" });

console.log(login("wrong"));       // Attempt 1: Login failed
console.log(login("wrongAgain"));  // Attempt 2: Login failed
console.log(login("password123")); // Login successful
console.log(login("test"));        // Account locked due to too many failed login attempts

// Export function for tests (required)
module.exports = createLoginTracker;
