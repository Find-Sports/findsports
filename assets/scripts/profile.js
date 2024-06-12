// Fetch users from the server
fetch('http://localhost:3000/users')
  .then(response => response.json())
  .then(users => {
    // Get the element where you want to display the users
    const userContainer = document.getElementById('user-container');

    // Create HTML for each user
    users.forEach(user => {
      const userElement = document.createElement('div');
      userElement.innerHTML = `
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <a href="/profile/${user.id}">View profile</a>
      `;

      // Add the user HTML to the page
      userContainer.appendChild(userElement);
    });
});