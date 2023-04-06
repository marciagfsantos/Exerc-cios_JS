// Reverse string
/*Crie um documento HTML que tenha 1 input de texto, e ao clicar em um botão exiba uma mensagem 
com o que foi digitado no input ao contrário.*/ 




function reverseString() {
    let text = document.getElementById('text').value;
    document.getElementById('resultado').innerHTML = text.split("").reverse().join(""); 
}







