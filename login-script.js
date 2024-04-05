const loginForm = document.getElementById('login');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Sample user data (for demonstration purposes only)
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  // Check if the user exists in the sample data
  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    alert(`Welcome, ${username}!`);
  } else {
    alert('Invalid username or password.');
  }
});