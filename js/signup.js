function mostraLogin(){
  window.location = "index.html"        
}

document.addEventListener("DOMContentLoaded", function () {
  const login= document.getElementById("slider-login");  
  login.addEventListener("click", mostraLogin);
}); 
