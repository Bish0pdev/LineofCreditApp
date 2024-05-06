function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if username and password are correct (in a real app, this would be done on the server)
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (username === savedUsername && password === savedPassword) {
      document.getElementById('loginMessage').innerText = 'Login successful!';
      // Redirect to the homepage or another page
      localStorage.setItem("Loggedin", "y");
      window.location.href = 'index.html';
    } else {
      document.getElementById('loginMessage').innerText = 'Invalid username or password. Please try again.';
    }
  }

  function createAccount(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Save new username and password to localStorage
    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);
    var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
    localStorage.setItem('acccreated_date', today)
    alert('Account created successfully! You can now login.');
    document.getElementById('createAccountSection').style.display = 'none';
    document.getElementById('loginSection').style.display = 'block';
    localStorage.removeItem('entries');
  }

  function changePassword(event) {
    event.preventDefault();
    const forgotUsername = document.getElementById('forgotUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Update password in localStorage
    localStorage.setItem('password', newPassword);

    alert('Password changed successfully! You can now login with your new password.');
    document.getElementById('forgotPasswordSection').style.display = 'none';
    document.getElementById('loginSection').style.display = 'block';
  }

  function goBack(sectionId) {
    document.getElementById(sectionId).style.display = 'none';
    document.getElementById('loginSection').style.display = 'block';
  }

