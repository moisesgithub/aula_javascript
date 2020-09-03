//Introdução ao JavaScript

/*var nome = "Moises Pereira";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo!";
//alert(idade - idade2);
//alert("Seja Bem Vindo, " + nome + " tem " + idade + " anos ");
console.log(nome);
console.log(n1 * n2);
//console.log(frase.replace("Japão", "Brasil")); substitui a frase!
//console.log(frase.toUpperCase("Japão", "Brasil")); frase com as letras maiúscula!
console.log(frase.toLowerCase()); 
//alert(frase.replace("Japão", "Brasil" ));*/


//Array

/*var lista = ["maça", " pêra", " laranja"];
lista.push(" uva"); // adiciona mais um elemento!
//lista.pop(); // retira elmentos!
//console.log(lista[1]);
//console.log(lista);
//alert(lista[1]);
//console.log(lista.length); // mostra a quant de elementos na lista!
//console.log(lista.reverse());
console.log(lista.toString()); // a lista passa ser uma string!
console.log(lista.join(" - "));*/

// Dicionário
/*
var frutas = {nome:"maça", cor:"vermelha"}
console.log(frutas.nome);
alert(frutas.cor);
*/
/*
var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

//Condicionais
/*
//var idade = 18;
var idade = prompt("Informe a sua idade!");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}*/

// Laços de repetição 

/*
var count = 0;
while (count <= 10){
    console.log(count);
    count++;
}
*/
/*
var count;
for(count = 0; count <= 5; count++){
    alert(count);
}
*/
/*
// Date
var d = new Date();
alert(d.getMonth());
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

//Desenvolva páginas web com JavaScript

function clicou(){
    document.getElementById("Agradecimento"). innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("Agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://bibliajfa.com.br/bibliacast-jfa/"); // Abre em outra janela!
    //window.location.href = "https://bibliajfa.com.br/bibliacast-jfa/"; // Abre na mesma janela!
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse aqui"; // Aqui não precisa usar o id
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse aqui";
    //alert("trocar texto");
}

function voltar(elemento){
     elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1, n2){
    return n1 + n2;
}
var validar = 0; // variável global
function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false;
    }
    return validar;
}
var idade = prompt("Informe a sua idade!");
validaIdade(idade)
console.log(validar);
*/

/*
function setReplace(frase ,nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil!"));
*/

