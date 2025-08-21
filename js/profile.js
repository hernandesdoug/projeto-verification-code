let id = "";
async function updateProfile(event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const dateBirth = document.getElementById("date-birth").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch(`http://localhost:3333/user/${id}`, {
    
        method: "put",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
            firstName, lastName, email, dateBirth, phoneNumber,
            password
        })
    });
    if (response.ok) {
        const data = await response.json();
        console.log(data.response);
        alert("User updated successfully!")
    } else {
        const errorData = await response.json();
        console.error("Failed to update user!", errorData.message);
        alert(errorData.message);
    }
    } catch (error) {
        console.error("Unexpected error!", error);
    }   
}
async function deleteProfile(event) {
    event.preventDefault();
    try {
        const response = await fetch(`http://localhost:3333/user/${id}`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data.response);
            window.location.href = "index.html"; 
            alert("User deleted successfully!")
        } else {
            const errorData = await response.json();
            console.error("Failed to delete user!", errorData.message);
            alert(errorData.message);
        }
    } catch (error) {
        console.error("Unexpected error!",error);
    }
}
async function logoutProfile(event) {
    localStorage.clear();
    window.location = "index.html";
}
async function recoverProfile() {
    try {
        const response = await fetch(`http://localhost:3333/user/${id}`);

        if (response.ok) {
            const data = await response.json();
            const firstName = document.getElementById("first-name");
            firstName.value = data.firstName;
            const lastName = document.getElementById("last-name");
            lastName.value = data.lastName;
            const email = document.getElementById("email");
            email.value = data.email;
            const dateBirth = document.getElementById("date-birth");
            dateBirth.value = data.dateBirth;
            const phoneNumber = document.getElementById("phone-number");
            phoneNumber.value = data.phoneNumber;
            const password = document.getElementById("password");
            password.value = data.password;
            console.log(data);
        } else {
            const errorData = await response.json();
            console.error("Failed to recover data!", errorData.message);
            alert(errorData.message);
        }
    } catch (error) {
        console.error("Unexpected error!", error);
    }

}
document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const param = params.get("id");
    id = param;
    console.log(id);
    recoverProfile();
});