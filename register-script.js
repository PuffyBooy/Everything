const registerForm = document.getElementById('register');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  // Sample user data (for demonstration purposes only)
  const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
  ];

  // Check if the username already exists
  const existingUser = users.find((user) => user.username === username);

  if (existingUser) {
    alert('Username already exists.');
  } else {
    // Add the new user to the sample data
    users.push({ username, password });
    alert(`Welcome, ${username}! You have successfully registered.`);

    // Clear the form fields
    usernameInput.value = '';
    passwordInput.value = '';
    confirmPasswordInput.value = '';
  }
});
