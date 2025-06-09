function mostraLogin(){
  window.location = "index.html"        
}

document.addEventListener("DOMContentLoaded", function () {
  const login= document.getElementById("slider-login");  
  login.addEventListener("click", mostraLogin);

  document.getElementById('olho').addEventListener('mousedown', function() {
    document.getElementById('password').type = 'text';
  });
  
  document.getElementById('olho').addEventListener('mouseup', function() {
    document.getElementById('password').type = 'password';
  });
  
  document.getElementById('olho').addEventListener('mousemove', function() {
    document.getElementById('password').type = 'password';
  });
}); 
