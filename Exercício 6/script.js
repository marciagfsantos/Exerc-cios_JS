//Calculadora Javascript

//Crie um página com dois inputs e um botão para cada operação: soma, subtração, multiplicação e divisão.

function Soma() {
    var Number1 = parseInt(document.getElementById('Number1').value);
    var Number2 = parseInt(document.getElementById('Number2').value);
    var Result = Number1 + Number2

    alert('A soma entre os números indicados é igual a ' + Result)
}

function Subtração() {
    var Number1 = parseInt(document.getElementById('Number1').value);
    var Number2 = parseInt(document.getElementById('Number2').value);
    var Result = Number1 - Number2

    alert('A subtração entre os números indicados é igual a ' + Result)
}

function Multiplicação() {
    var Number1 = parseInt(document.getElementById('Number1').value);
    var Number2 = parseInt(document.getElementById('Number2').value);
    var Result = Number1 * Number2

    alert('A multiplicação entre os números indicados é igual a ' + Result)
}

function Divisão() {
    var Number1 = parseInt(document.getElementById('Number1').value);
    var Number2 = parseInt(document.getElementById('Number2').value);
    var Result = Number1 / Number2

    alert('A divisão entre os números indicados é igual a ' + Result)
}