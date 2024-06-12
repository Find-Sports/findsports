const serverURL = 'http://localhost:3000';

// Cadastrar arena
$('#registerArena').submit(function(e) {
  e.preventDefault();

  $.ajax({
      url: `${serverURL}/arena-register`,
      type: 'POST',
      data: JSON.stringify({
          name: $("#name").val(),
          address: $("#address").val(),
          sports: [$("#sports").val()],
          opening: $("#opening").val(),
          closing: $("#closing").val(),
          contact: {
              phone: $("#phone").val()
          },
          description: $("#description").val(),
          ownerId: sessionStorage.getItem('currentUserId')
      }),
      contentType: 'application/json',
      success: function(response) {
          console.log('Arena cadastrada com sucesso:', response);
      },
      error: function(error) {
          console.error('Erro ao cadastrar a arena:', error);
      }
  });
});

// // Buscar arenas
// $.getJSON(serverURL, function(arena) {
//   $.each(arena, function(i, user) {
//       const userDiv = `
//           <div>
//               <h2>${user.name}</h2>
//               <p>Endereço: ${user.address}</p>
//               <p>Esportes: ${user.sports.join(', ')}</p>
//               <p>Abertura: ${user.opening}</p>
//               <p>Fechamento: ${user.closing}</p>
//               <p>Contato: ${user.contact.phone}</p>
//               <p>Descrição: ${user.description}</p>
//           </div>
//       `;
//       $('#container').append(userDiv);
//   });
// });




// Animação (InfoSubmit) para os campos de input
["name", "address", "sports", "opening", "closing", "phone", "description"].forEach(id => {
  $("#" + id).on("focus", function() {
      $(this).removeClass("infoSubmit");
  });
});

// Máscara para o campo de telefone
$(document).ready(function(){
  $('#phone').mask('(00)00000-0000');
});

