function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);



    if(tipoIngresso == 'pista'){
        comprarPista(quantidade);

    }else if(tipoIngresso == 'inferior'){
        comprarInferior(quantidade);

    }else{
        comprarSuperior(quantidade);
    }
    
}

function comprarPista(quantidade){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if(quantidade <= qtdPista && quantidade > 0){
        qtdPista = qtdPista - quantidade;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso');

    }else{
        alert('Quantidade indisponível para pista');
    }
}

function comprarInferior(quantidade){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if(quantidade <= qtdInferior && quantidade > 0){
        qtdInferior = qtdInferior - quantidade;
        document.getElementById('qtd-inferior').textContent =qtdInferior;
        alert('Compra relizada com sucesso');

    }else{
        alert('Quantidade indisponível para tipo cadeira inferior');
    }
}

function comprarSuperior(quantidade){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if(quantidade <= qtdSuperior && quantidade > 0){
        qtdSuperior = qtdSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso');
        
        
    }else{
        alert('Quantidade indisponível para tipo cadeira superior');
    }
}

