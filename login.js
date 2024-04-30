function logar() {
    
    var login = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;


    if(login == "admin" && senha == "1234") {
        alert("Sucesso!");
        location.href = "quiz.html";
    }
    else {
        alert("Usuario ou senha incorretos")
    }
}