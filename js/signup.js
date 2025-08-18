function mostraLogin(){
  window.location = "index.html"        
}

async function signUp(event){
  event.preventDefault();
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const dateBirth = document.getElementById("date-birth").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("get-email").value;
  const phoneNumber = document.getElementById("phone-number").value;

  try{
    const response = await fetch("http://localhost:3333/user",{
        method:  "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
            firstName,
            lastName,
            email,
            dateBirth,
            phoneNumber,
            password})
    });
    if(response.ok){
        const data = await response.json();
        console.log(data);
        localStorage.clear();
        const id = data.id;
        const emailData = email;
        const url = `verification.html?id=${id}&email=${emailData}`;
        window.location.href = url;          
    }else {
        const errorData = await response.json();
        console.error("Login failed", errorData.message);
        alert(errorData.message);
    }
} catch(error){
    console.error("Unexpected error!", error);
}
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
