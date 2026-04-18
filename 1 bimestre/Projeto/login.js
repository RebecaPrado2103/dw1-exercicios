document.getElementById("btnLogin").addEventListener("click", function () {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    const usuarioCorreto = "admin";
    const senhaCorreta = "1234";

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        mensagem.textContent = ""; // limpa mensagem
        window.open("menu.html", "_blank");
    } else {
        mensagem.textContent = "Usuário ou senha incorretos!";
        mensagem.style.color = "red";
    }
});