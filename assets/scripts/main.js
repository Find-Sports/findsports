// Backend URL
const serverURL = 'http://localhost:3000';


// Dropdown menu
let userMenu = document.getElementById("userMenu");
let userNotification = document.getElementById("userNotification");

function toggleUserMenu() {
    if (!userNotification.classList.contains("active")) {
        userMenu.classList.toggle("active");
    }
}

function toggleNotificationMenu() {
    if (!userMenu.classList.contains("active")) {
        userNotification.classList.toggle("active");
    }
}

// Logout
$('#logoutButton').click(function() {
    // Limpa o token de usuário armazenado
    sessionStorage.removeItem('currentUserToken');

    // Redireciona o usuário para a página de login
    window.location.href = '../pages/landing.html';
});

// Enviar notificação para o usuário
$('#sendNotification').click(function() {
    $.ajax({
        url: `${serverURL}/send-notification`,
        type: 'POST',
        headers: {'Authorization': `Bearer ${sessionStorage.getItem('currentUserToken')}`},
        data: JSON.stringify({
            id: 'unique-notification-id', // Substitua por um ID de notificação único
            content: "Olá! Você tem uma nova mensagem.",
            sender: 'sender-id', // Substitua pelo ID do remetente
            receiver: 'receiver-id' // Substitua pelo ID do destinatário
        }),
        contentType: 'application/json',
        success: function(response) {
            console.log('Notification sent successfully:', response);
        },
        error: function(error) {
            console.error('Error sending notification:', error);
        }
    });
});

// Get Notifications
$(document).ready(function() {
    $.ajax({
        url: `${serverURL}/notifications`,
        type: 'GET',
        success: function(notifications) {
            notifications.forEach(function(notification) {
                var userElement = `
                    <div class="notification">
                        <p class="content">${notification.username}</p>
                        <button class="button2">Aceitar</button>
                    </div>
                `;
                $('#notificationContainer').append(userElement);
            });
        },
        error: function(error) {
            console.error('Erro ao buscar usuários:', error);
        }
    });
});