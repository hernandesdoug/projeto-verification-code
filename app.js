
function mostraEmail() {
  const slider = document.getElementById("slider")
  const email = document.getElementById("frm-email");
  const telefone = document.getElementById("frm-phone");
  email.classList.add("active");
  telefone.classList.remove("active");
  slider.classList.add("slider-check")
}

function mostraTelefone() {
  const slider = document.getElementById("slider")
  const telefone = document.getElementById("frm-phone");
  const email = document.getElementById("frm-email");
  telefone.classList.add("active");
  email.classList.remove("active");
  slider.classList.remove("slider-check")
}

document.addEventListener("DOMContentLoaded", function () {
  const email = document.getElementById("slider-email");
  const telefone = document.getElementById("slider-phone");
  email.addEventListener("click", mostraEmail);
  telefone.addEventListener("click", mostraTelefone);
});



