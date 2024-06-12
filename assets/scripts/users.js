const serverURL = 'http://localhost:3000';

$(document).ready(function() {
    $.ajax({
        url: `${serverURL}/users`,
        type: 'GET',
        success: function(users) {
            users.forEach(function(user) {
                var userElement = `
                    <div class="user">
                        <h2>${user.username}</h2>
                        <p>Country: ${user.country}</p>
                        <p>State: ${user.state}</p>
                        <p>City: ${user.city}</p>
                        <p>Neighborhood: ${user.neighborhood}</p>
                        <p>Sports: ${user.sports.join(', ')}</p>
                        <p>Birth Date: ${user.birthDate}</p>
                        <p>Gender: ${user.gender}</p>
                        <p>Teams: ${user.teams.join(', ')}</p>
                        <p>Rating: ${user.rating}</p>
                        <p>Likes: ${user.likes}</p>
                        <p>Dislikes: ${user.dislikes}</p>
                    </div>
                `;
                $('#users').append(userElement);
            });
        },
        error: function(error) {
            console.error('Erro ao buscar usuários:', error);
        }
    });
});