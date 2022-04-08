let screenNumber = [];  // VAlOR DIGITADO
let op = '';            // OPERAÇÃO SELECIONADA

let currentValue = 0;   // ÚLTIMO VALOR DIGITADO
let memoryValue = 0;    // VALOR DA MEMÓRIA

const screen = document.querySelector('#screen'); // DISPLAY


//NÚMEROS DIGITADOS && APARECER NO DISPLAY
function number(n){
    
    //VERIFICANDO SE É UM PONTO
    if(n === '.'){
        //VERIFICANDO SE FOI DIGITADO ALGUM NÚMERO
        if(screenNumber.length === 0){
            screenNumber.push(0,n)
        }
        else{
            // VERIFICANDO SE POSSUI ALGUM PONTO NA ARRAY
            if (screenNumber.every(e => e != '.')){
                screenNumber.push(n);
            };
        }
    }
    else{
        screenNumber.push(n);
    };

    //CONCATENANDO VALORES e ATUALIZANDO A TELA
    screen.innerHTML = concat();
};

function operation(opr){
    currentValue = concat();

    if(memoryValue != 0){
        if(op == "/"){
            memoryValue /= currentValue;
        }
        else if(op == "x"){
            memoryValue *= currentValue;
        }
        else if(op == '-'){
            memoryValue -= currentValue;
        }
        else if(op == '+'){
            memoryValue += currentValue;
        }
    }

    if(op == '' && memoryValue == 0){
        memoryValue = currentValue;
    }
    //TESTE
    console.log("MEMORIA " + memoryValue)
    console.log("ATUAL " + currentValue)
    console.log("OP " + op)
    console.log('---------------------')

    op = opr;

    screenNumber = [];
    screen.innerHTML = memoryValue;
}
function result(){
    //Pegar valor atual
    //Fazer operação com a memoria
    //Zerar Operação
    //Zerar valor atual
    //Mostrar resultado

    operation('');
    op = '¨';
    currentValue = 0;

    console.log("MEMORIA " + memoryValue)
    console.log("ATUAL " + currentValue)
    console.log("OP " + op)
    console.log(screenNumber)
    console.log('---------------------')
}

function calc(o, value){
    let result = 0;

    if(o == ''){
        return value;
    }
    else if(o == "/"){

    }
    else if(o == "x"){

    }
    else if(o == '-'){

    }
    else if(o == '+'){
        result = memoryValue + value;

        return result
    }
};


//ZERAR E DELETAR VALORES
function zero(){
    screenNumber = [];
    op = '';
    
    currentValue = 0;
    memoryValue = 0;

    screen.innerHTML = memoryValue;
}
function del(){
    if(screenNumber.length > 0){
        screenNumber.pop();
    }

    currentValue = concat();
    
    if(currentValue == 0){
        screen.innerHTML = 0;
    }
    else{
        screen.innerHTML = currentValue;
    }
};

// FUNÇÃO PARA CONCATENAR VALORES
function concat(){
    let number = '';

    for(i=0; i < screenNumber.length; i++){
        number += screenNumber[i];
    };

    return parseFloat(number);
};


/* BUGS EM CORREÇÃO:

 • Digitar valor "0" várias vezes
 • Digitar mais de 12 caracteres
 • Atualizar tela ao apagar número

*/