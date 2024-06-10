$(document).ready(function() {
    const userId = sessionStorage.getItem('currentUserId');

    if (!userId) {
        window.location.href = '../pages/landing.html'; // substitua por sua página de login
    }
});