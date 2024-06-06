var nameElement = document.getElementById("name");
nameElement.addEventListener("focus", function () {
  nameElement.classList.remove("infoSubmit");
});

var addressElement = document.getElementById("address");
addressElement.addEventListener("focus", function () {
  addressElement.classList.remove("infoSubmit");
});

var sportsElement = document.getElementById("sports");
sportsElement.addEventListener("focus", function () {
  sportsElement.classList.remove("infoSubmit");
});

var openingElement = document.getElementById("opening");
openingElement.addEventListener("focus", function () {
  openingElement.classList.remove("infoSubmit");
});

var closingElement = document.getElementById("closing");
closingElement.addEventListener("focus", function () {
  closingElement.classList.remove("infoSubmit");
});

var contactElement = document.getElementById("contact");
contactElement.addEventListener("focus", function () {
  contactElement.classList.remove("infoSubmit");
});

var descriptionElement = document.getElementById("description");
descriptionElement.addEventListener("focus", function () {
  descriptionElement.classList.remove("infoSubmit");
});

document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var sports = document.getElementById("sports").value;
    var opening = document.getElementById("opening").value;
    var closing = document.getElementById("closing").value;
    var contact = document.getElementById("contact").value;
    var description = document.getElementById("description").value;

    document.getElementById("name").classList.add("infoSubmit");
    document.getElementById("address").classList.add("infoSubmit");
    document.getElementById("sports").classList.add("infoSubmit");
    document.getElementById("opening").classList.add("infoSubmit");
    document.getElementById("closing").classList.add("infoSubmit");
    document.getElementById("contact").classList.add("infoSubmit");
    document.getElementById("description").classList.add("infoSubmit");

    var data = {
      name: name,
      address: address,
      sports: sports,
      opening: opening,
      closing: closing,
      contact: contact,
      description: description,
    };

    console.log(data);
    });
