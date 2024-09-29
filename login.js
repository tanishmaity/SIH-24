document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const predefinedUsers = [
        { username: 'user1@example.com', password: 'password123', name: 'Tushar' },
        { username: 'user2@example.com', password: 'mypassword', name: 'Tanish' },
        { username: 'user3@example.com', password: 'securepass', name: 'Nibedita' }
    ];

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = predefinedUsers.find(u => u.username === username && u.password === password);

    if (user) {
        alert('Login successful');
        // Store the user's name in localStorage
        localStorage.setItem('loggedInUser', user.name);
        // Redirect to home page
        window.location.href = 'new-web.html';
    } else {
        alert('Invalid username or password');
    }
});
