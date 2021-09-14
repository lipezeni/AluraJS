// parâmetros de função

            //2     //2
function soma(num1, num2) {
    return num1 + num2;
}

//console.log(soma(2, 2));
//console.log(soma(245, 20));
//console.log(soma(500, 60))

// parâmetros x argumentos

//ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}.`;
}

//console.log(nomeIdade(14, "Felipe"));

function multiplica(fator1, fator2) {
    return fator1 * fator2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)));

//function multiplica(fator1 = 1, fator2 = 1) {
//    return fator1 * fator2;
//}

//console.log(multiplica(soma(4, 5)))