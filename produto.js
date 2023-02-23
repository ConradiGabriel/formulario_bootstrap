function calcular(){
    validaDesc();
    let nTotal = quantidade.value * unitario.value;
    total.value = nTotal;
}

function validaDesc(){
    if(descricao.value.trim() === ""){
        descricao.style.background = "yellow";
        mensagem.innerHTML = "Preencha a descrição do produto!";
        $('#alerta').modal('show');
    } else {
        descricao.style.background = "white";
    }
}