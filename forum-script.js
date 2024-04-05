const newPostForm = document.getElementById('new-post');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const postsList = document.getElementById('posts');

// Sample post data (for demonstration purposes only)
const posts = [
  { id: 1, title: 'Post 1', content: 'This is post 1.' },
  { id: 2, title: 'Post 2', content: 'This is post 2.' },
];

newPostForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = titleInput.value;
  const content = contentInput.value;

  // Generate a new post ID
  const newPostId = posts.length + 1;

  // Add the new post to the sample data
  posts.push({ id: newPostId, title, content });

  // Display the new post
  displayPost(newPostId);

  // Clear the form fields
  titleInput.value = '';
  contentInput.value = '';
});

function displayPost(postId) {
  const post = posts.find((post) => post.id === postId);

  if (post) {
    const postElement = document.createElement('li');
    postElement.id = `post-${postId}`;
    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
      <button onclick="deletePost(${postId})">Delete</button>
    `;
    postsList.appendChild(postElement);
  }
}

function deletePost(postId) {
  // Remove the post from the sample data
  posts = posts.filter((post) => post.id !== postId);

  // Remove the post element from the DOM
  const postElement = document.getElementById(`post-${postId}`);
  if (postElement) {
    postElement.remove();
  }
}

// Display existing posts
for (const post of posts) {
  displayPost(post.id);
}