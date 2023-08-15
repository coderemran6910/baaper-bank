document.getElementById("btn-submit").addEventListener("click", (event)=>{
    const email_input = document.getElementById("email");
    const email = email_input.value; 
    console.log(email);

    const password_input = document.getElementById("password");
    const password = password_input.value; 
    console.log(password);

    if (email === "coderemran6910@gmail.com" && password === "coderemran" ) {
        window.location.href = "./bank.html";
    }else{
       alert(" Invalid User, Lathi na khaite taratari bagh")
    }
})