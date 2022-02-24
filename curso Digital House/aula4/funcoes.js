function soma(numero1,numero2){
    const total  = numero1 + numero2;
    //console.log(10 + 10)
    console.log(total);
    return
};


function podetirarCarteiraDeMotorista(idade){
    if (idade < 18){
        return 'Pessoa menor de idade. infelizmente nao pode'
    }else {
        return 'opa, pode tirar CNH'
    }
}

//soma(10,20);
console.log(podetirarCarteiraDeMotorista(19));
//soma(true,false); true = 1, false = 0 