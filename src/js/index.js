

const botao = document.querySelector(".btn-plataforma");

const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click",() => {

    elementoPlataformas.classList.toggle("ativo");

// AS LINHAS DE CODIGO ABAIXO FORAM SUBSTITUIDAS POR .TOGGLE, dando o msm resultado.


    // const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");

    // if (botaoEstaAberto) {
    //     elementoPlataformas.classList.remove("ativo");
    // } 
    // else{
    //     elementoPlataformas.classList.add("ativo");
    // }

});