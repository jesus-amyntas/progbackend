let n1 = parseInt(document.getElementById('nota1').value);
let n2 = parseInt(document.getElementById('nota2').value);

function soma(){

    let sum = n1 + n2;
    let med = sum/2;
    let aprovado = med >= 60;
    let recuperacao = med == 50 && med <= 59;
    let reprovado = med <50;
    if (aprovado){
        prompt('voce esta aprovado')
    }
    if(recuperacao){
        prompt('voce esta em recuperaçao')
    }
    if(reprovado){
        prompt('voce esta reprovado')
    }
}
console.log(soma(60,60))