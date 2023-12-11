const prompt = require('prompt-sync')();
/*IMPORTE AQUI O ARQUIVO verificaIdade.js*/
const validaIdade = require('./verificaIdade')


while (true){
    const nome = prompt('Nome completo: ');
    const rg = prompt('RG: ');
    const cpf = prompt('CPF: ');
    const nascimento = prompt('Nascimento: ');

    if(/*FAÇA AQUI A VERIFICAÇÃO DA IDADE UTILIZANDO O ARQUIVO QUE VOCÊ IMPORTOU*/
    validaIdade.eMaior(nascimento)
    ){
        const eleitor = prompt('Título de eleitor: ');
    }else{
        const eleitor = undefined;
    }

    console.log('Nome:', nome);
    console.log('RG:', rg);
    console.log('CPF:', cpf);
    console.log('Data de Nascimento:', nascimento);
    eleitor !== undefined ? console.log('Eleitor: ', eleitor): console.log();

    const confirm = prompt('Confirma?');

    if(confirm == 'S' || confirm == 's'){
        break;
    }else{
        // console.clear();
    }

}