function calcular(){
    let x = parseInt(document.getElementById("inputConsumo").value);

    let resp = "";
    
    let footer = document.getElementById("footer");
    let mensagem = document.getElementById("mensagem");

    if(x<0){
        footer.classList.add("erro");
        mensagem.innerHTML = "Não é possível utilizar números negativos";
        document.getElementById("resultado").innerHTML = "-";
        return;
    }else{
        footer.classList.remove("erro");
        mensagem.innerHTML = "Cálculo realizado com sucesso";
    }
    
    
    if(x<=5){
        resp = 94.19;
    }else if(x<=10){
        resp = 94.19 + (x-5)*2.91;
    }else if(x<=15){
        resp = 108.74 + (x-10)*16.23;
    }else if(x<=20){
        resp = 189.89 + (x-15)*16.31;
    }else if(x<=30){
        resp = 271.44 + (x-20)*16.45;
    }else{
        resp = 435.94 + (x-30)*27.84;
    }
    document.getElementById("resultado").innerHTML=resp.toFixed(2);
}