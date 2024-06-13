const serverURL = 'http://localhost:3000';

// Cadastrar evento
$('#registerEvento').submit(function(e) {
  e.preventDefault();

  $.ajax({
      url: `${serverURL}/evento-register`,
      type: 'POST',
      data: JSON.stringify({
          name: $("#name").val(),
          address: $("#address").val(),
          sports: [$("#sport").val()],
          datetime: $("#datetime").val(),
          description: $("#description").val()
      }),
      contentType: 'application/json',
      success: function(response) {
          console.log('Evento cadastrada com sucesso:', response);
      },
      error: function(error) {
          console.error('Erro ao cadastrar a evento:', error);
      }
  });
});

// Animação (InfoSubmit) para os campos de input
["name", "address", "sport", "datetime", "description"].forEach(id => {
  $("#" + id).on("focus", function() {
      $(this).removeClass("infoSubmit");
  });
});
