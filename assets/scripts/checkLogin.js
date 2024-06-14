// Verificar se o usuário está logado
$(document).ready(function() {

    const userToken = sessionStorage.getItem('currentUserToken');

    if (!userToken) {
        redirectToLogin();
    } else {
        // Verifique a validade do token no servidor
        $.ajax({
            url: `${serverURL}/verify-token`, // substitua por seu endpoint de verificação de token
            method: 'POST',
            headers: {'Authorization': `Bearer ${userToken}`},
            success: function(response) {
                if (!response.valid) {
                    redirectToLogin();
                }
            },
            error: function() {
                redirectToLogin();
                
            }
        });
    }
});

function redirectToLogin() {
    window.location.href = '../pages/landing.html'; // substitua por sua página de login
}