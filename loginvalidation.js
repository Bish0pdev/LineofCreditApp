// Check if user is logged in
const isLoggedIn = localStorage.getItem('Loggedin') !== null;

// If not logged in, redirect to login page
if (!isLoggedIn) {
  window.location.href = 'login.html';
}
document.addEventListener('DOMContentLoaded', getUsername);
function getUsername() {
    const username = localStorage.getItem('username');
    if (username) {
      document.getElementById('usernameSpan').textContent = username;
    } else {
      document.getElementById('usernameSpan').textContent = 'Guest';
    }
  }
function logout() {
    localStorage.removeItem("Loggedin");
    window.location.href = 'login.html';
}