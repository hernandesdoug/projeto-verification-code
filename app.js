function mostraEmail(){
    const email = document.getElementById("frm-email");
    const telefone = document.getElementById("frm-phone");
    email.classList.add("active");
    telefone.classList.remove("active");    
    
}

function mostraTelefone(){
    const telefone = document.getElementById("frm-phone");
    const email = document.getElementById("frm-email");
    telefone.classList.add("active");
    email.classList.remove("active");
   
}


