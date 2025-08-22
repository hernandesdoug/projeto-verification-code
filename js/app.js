
function showEmail() {
  const slider = document.getElementById("slider")
  const email = document.getElementById("frm-email");
  const phoneNumber = document.getElementById("frm-phone");
  email.classList.add("active");
  phoneNumber.classList.remove("active");
  slider.classList.add("slider-check")
}

function showPhone() {
  const slider = document.getElementById("slider")
  const phoneNumber = document.getElementById("frm-phone");
  const email = document.getElementById("frm-email");
  phoneNumber.classList.add("active");
  email.classList.remove("active");
  slider.classList.remove("slider-check")
}

async function validateLogin(event) {
  event.preventDefault()
  const email = document.getElementById("log-email").value;
  const password = document.getElementById("password").value;

  const loginData = {
    email: email,
    password: password
  };

  try {
    const response = await fetch("http://localhost:3333/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(loginData)
    });

    if (response.ok) {
        const data = await response.json();
        console.log(data);
        const id = data.id;
        const url = `profile.html?id=${id}`;
        window.location.href = url;
    } else {
        const errorData = await response.json();
        console.error("Login failed", errorData.message);
        alert(errorData.message);
    }
  } catch (error) {
    const errorData = await response.json();
    console.error("Login failed", errorData.message);
    alert(errorData.message);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const email = document.getElementById("slider-email");
  const phoneNumber = document.getElementById("slider-phone");
  email.addEventListener("click", showEmail);
  phoneNumber.addEventListener("click", showPhone);

  document.getElementById('olho').addEventListener('mousedown', function () {
    document.getElementById('password').type = 'text';
  });

  document.getElementById('olho').addEventListener('mouseup', function () {
    document.getElementById('password').type = 'password';
  });

  document.getElementById('olho').addEventListener('mousemove', function () {
    document.getElementById('password').type = 'password';
  });
});



