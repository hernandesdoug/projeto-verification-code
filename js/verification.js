let id = "";
let email = "";

async function verifyCode(event) {  
    event.preventDefault();

    try {
        const response = await fetch(`http://localhost:3333/user/${id}`, {
              method: "get",
              headers: {
                "Content-Type": "application/json; charset=utf-8"
              },
              body: JSON.stringify({ id, code })
        })
        if(response.ok){
            const data = await response.json();
            console.log(data);
            const id = data.id;
            const url = `welcome.html?id=${id}`;
            window.location.href = url;  
        }else {
            const errorData = await response.json();
            console.error("Login failed", errorData.message);
            alert(errorData.message);
        }
    } catch (error) {
        console.error("Unexpected error!", error);
    }

}
document.addEventListener("DOMContentLoaded", function (){
    const botao = document.querySelector("button");
    const inputs = document.querySelectorAll("input");
    
    window.addEventListener('load', () => inputs[0].focus());
    
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const currentInput = input;
            const nextInput = input.nextElementSibling;
            
            if(currentInput.value.length > 1){
                currentInput.value = currentInput.value.slice(1);
            }
            if(nextInput !== null && nextInput.hasAttribute('disabled') && currentInput.value !== '') {
                nextInput.removeAttribute('disabled');
                nextInput.focus();
            }
            if(!inputs[inputs.length - 1].disabled && inputs[inputs.length - 1].value !== ''){
                botao.classList.add('ativo');
            } else {
                botao.classList.remove('ativo');
            }
        });
        input.addEventListener('keyup', evento => {
            if(evento.key === 'Backspace'){
                if (input.previousElementSibling !== null){
                    evento.target.value = '';
                    evento.target.setAttribute('disabled', true);
                    input.previousElementSibling.focus();
                }
            }
        })
    })
    let params = new URLSearchParams(window.location.search);
    let param = params.get("id");
    id = param;
    let paramEmail = params.get("email");
    email = paramEmail;
    let emailText = document.getElementById("get-email");
    emailText.innerHTML = paramEmail;
})






