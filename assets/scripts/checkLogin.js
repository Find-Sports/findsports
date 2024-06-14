$(document).ready(function() {
    const userToken = sessionStorage.getItem('currentUserToken');

    if (!userToken) {
        window.location.href = '../pages/landing.html'; // substitua por sua página de login
    }
});