function Entrar(){
    let usuario = document.getElementById("usuario").value;
    let senha = document.getAnimations("senha").value;

    const usuarioCorreto = "admin";
    const senhaCorreta = "1234";

    let footer = document.getElementById("footer");
    let mensagem = document.getElementById("mensagem");

    if (usuario !== usuarioCorreto && senha !== senhaCorreta) {
        footer.classList.add("erro");
        mensagem.innerHTML = "Usuário ou senha incorretos";
    } else {
        footer.classList.remove("erro");
        mensagem.innerHTML = "Login realizado com sucesso";
        window.open("menu.html", "_blank");
    }
}