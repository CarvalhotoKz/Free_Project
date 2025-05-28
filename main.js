'use strict'; // Modo restrito

// verifica se o CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async() => {
    limparFormulario();
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;

    if(cepValido(cep.value)){
        const dados  = await fetch(url);
        const addres = await dados.json();

        // hasOwnProperty retorna um valor booleano indicando se o objetivo pussui a propriedade especifica no parenteses
        if(addres.hasOwnProperty('erro')){
            alert("CEP não encontrado"); 
        } else{
            preencherFormulario(addres);
        }
    }
}

limparFormulario = () => {
    document.getElementById('rua').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cep').value = '';
}

preencherFormulario = (endereco) => {
    
}