const serverURL = 'http://localhost:3000';

// Cadastrar arena
$('#editUser').submit(function(e) {
    e.preventDefault();
  
    $.ajax({
        url: `${serverURL}/user-edit`,
        type: 'PUT',
        headers: {'Authorization': `Bearer ${sessionStorage.getItem('currentUserToken')}`},
        data: JSON.stringify({
            name: $("#name").val(),
            gender: $("#gender").val(),
            birthDate: $("#birthDate").val(),
            country: $("#country").val(),
            state: $("#state").val(),
            city: $("#city").val(),
            neighborhood: $("#neighborhood").val(),
            sports: $("#sports").val(),
            contact: {
                phone: $("#phone").val()
            },
        }),
        contentType: 'application/json',
        success: function(response) {
            console.log('User edited successfully:', response);
            // Animação (InfoSubmit) para os campos de input
            ["name", "gender", "birthDate", "country", "state", "city", "neighborhood", "sports", "phone"].forEach(id => {
                $("#" + id).addClass("infoSubmit");
            });
        },
        error: function(error) {
            console.error('Error editing user:', error);
        }
    });
});

// Animação (InfoSubmit) para os campos de input
["name", "gender", "birthDate", "country", "state", "city", "neighborhood", "sports", "phone"].forEach(id => {
  $("#" + id).on("focus", function() {
      $(this).removeClass("infoSubmit");
  });
});

// Máscara para o campo de telefone
$(document).ready(function(){
  $('#phone').mask('(00)00000-0000');
});

var element = document.querySelector('#sports');
var choices = new Choices(element);