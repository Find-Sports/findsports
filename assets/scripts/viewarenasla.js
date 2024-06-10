// URL do seu servidor JSON
const url = 'http://localhost:3000/arena'; 

// Função para buscar dados do servidor JSON e exibir na tela do usuário
$.getJSON(url, function(arena) {
    $.each(arena, function(i, user) {
        const userDiv = `
            <div>
                <h2>${user.name}</h2>
                <p>Endereço: ${user.address}</p>
                <p>Esportes: ${user.sports.join(', ')}</p>
                <p>Abertura: ${user.opening}</p>
                <p>Fechamento: ${user.closing}</p>
                <p>Contato: ${user.contact.phone}</p>
                <p>Descrição: ${user.description}</p>
            </div>
        `;
        $('#container').append(userDiv);
    });
});