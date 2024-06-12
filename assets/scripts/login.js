const serverURL = 'http://localhost:3000';

// Cadastrar usuário
$('#registerForm').submit(function(event) {
    event.preventDefault();
  
    $.ajax({
        url: `${serverURL}/user-register`,
        type: 'POST',
        data: JSON.stringify({
            username: $("#regUsername").val(),
            password: $("#regPassword").val(),
        }),
        contentType: 'application/json',
        success: function(response) {
            console.log('Usuário Cadastrado:', response);
        },
        error: function(error) {
            console.error('Erro ao cadastrar usuário:', error);
        }
    });
});

// Login
$('#loginForm').submit(function(event) {
    event.preventDefault();
  
    $.ajax({
        url: `${serverURL}/user-login`,
        type: 'POST',
        data: JSON.stringify({
            username: $("#logUsername").val(),
            password: $("#logPassword").val(),
        }),
        contentType: 'application/json',
        success: function(response) {
            console.log('Login Realizado:', response);
            if (response.userId) {
                console.log('Setting currentUserId:', response.userId);
                sessionStorage.setItem('currentUserId', response.userId);
                window.location.href = '../index.html';
            } else {
                console.log('response.id is not set');
            }
        },
        error: function(error) {
            console.error('Erro ao cadastrar usuário:', error);
        }
    });
});