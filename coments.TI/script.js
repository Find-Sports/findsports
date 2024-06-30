document.addEventListener('DOMContentLoaded', function () {
    const userSearch = document.getElementById('userSearch');
    const userName = document.getElementById('userName');
    const userContainer = document.getElementById('userContainer');
    const commentForm = document.getElementById('commentForm');
    const commentsList = document.getElementById('commentsList');

    let currentUser = '';

    userSearch.addEventListener('input', function () {
        currentUser = userSearch.value.trim();
        if (currentUser) {
            userName.textContent = `Comentários sobre ${currentUser}`;
            userContainer.style.display = 'block';
            loadComments(currentUser);
        } else {
            userContainer.style.display = 'none';
        }
    });

    commentForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const comment = document.getElementById('comment').value;

        saveComment(currentUser, username, comment);
        loadComments(currentUser);

        commentForm.reset();
    });

    function loadComments(user) {
        const comments = JSON.parse(localStorage.getItem(`comments_${user}`)) || [];
        commentsList.innerHTML = '';
        comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.innerHTML = `
                <h3>${comment.username}</h3>
                <p>${comment.text}</p>
            `;
            commentsList.appendChild(commentElement);
        });
    }

    function saveComment(user, username, text) {
        const comments = JSON.parse(localStorage.getItem(`comments_${user}`)) || [];
        comments.push({ username, text });
        localStorage.setItem(`comments_${user}`, JSON.stringify(comments));
    }
});
