let cont = 0;
let p1 = prompt("Qual é o nome da parte da bicicleta onde você senta?");
let p2 = prompt("Como são chamadas as rodas da bicicleta?");
let p3 = prompt("Qual é o componente que você gira para mudar as marchas da bicicleta?");
let p4 = prompt("Qual é o nome da parte da bicicleta onde você segura enquanto pedala?");
let p5 = prompt("O que significa 'MTB' em termos de bicicletas?");
let p6 = prompt("O que significa 'BMX' em termos de bicicletas?");
let p7 = prompt("Como é chamada a parte da bicicleta onde você coloca os pés enquanto pedala?");
let p8 = prompt("Qual é o nome da peça que conecta o guidão à roda dianteira da bicicleta?");
let p9 = prompt("Qual é a parte da bicicleta que mantém a corrente no lugar?");
let p10 = prompt("Qual a melhor estação do ano para andar de bicicleta");
let msg = document.getElementById("msg");
let resultMsg = "";

if (p1 == "selim") {
    resultMsg += "VOCÊ ACERTOU A PRIMEIRA QUESTÃO";
    cont++;
} else {
    resultMsg += "ERROU A PRIMEIRA QUESTÃO";
}

if (p2 == "rodas") {
    resultMsg += "VOCÊ ACERTOU A SEGUNDA QUESTÃO";
    cont++;
} else {
    resultMsg += "ERROU A SEGUNDA QUESTÃO";
}

if (p3 == "cambio") {
    resultMsg += "VOCÊ ACERTOU A TERCEIRA QUESTÃO";
    cont++;
} else {
    resultMsg += "ERROU A TERCEIRA QUESTÃO";
}

if (p4 == "guidao") {
    resultMsg += "VOCÊ ACERTOU A QUARTA QUESTÃO";
    cont++;
} else {
    resultMsg += "ERROU A QUARTA QUESTÃO";
}

if (p5 == "mountain bike") {
    resultMsg += "VOCÊ ACERTOU A QUINTA QUESTÃO";
    cont++;
} else {
    resultMsg += "ERROU A QUINTA QUESTÃO";
}

if (p6 == "bicycle motocross") {
    resultMsg += "VOCÊ ACERTOU A SEXTA QUESTÃO";
    cont++;
} else {
    resultMsg += "ERROU A SEXTA QUESTÃO";
}

if (p7 == "pedal") {
    resultMsg += "VOCÊ ACERTOU A SÉTIMA QUESTÃO";
    cont++;
} else {
    resultMsg += "ERROU A SÉTIMA QUESTÃO";
}

if (p8 == "garfo") {
    resultMsg += "VOCÊ ACERTOU A OITAVA QUESTÃO";
    cont++;
} else {
    resultMsg += "ERROU A OITAVA QUESTÃO";
}

if (p9 == "tensionador de corrente" || p9 == "derailleur traseiro") {
    resultMsg += "VOCÊ ACERTOU A NONA QUESTÃO";
    cont++;
} else {
    resultMsg += "ERROU A NONA QUESTÃO";
}

if (p10 == "primavera") {
    resultMsg += "VOCÊ ACERTOU A DÉCIMA QUESTÃO";
    cont++;
} else {
    resultMsg += "ERROU A DÉCIMA QUESTÃO";
}

msg.innerHTML = `VOCÊ ACERTOU ${cont} QUESTÕES:${resultMsg}`;
