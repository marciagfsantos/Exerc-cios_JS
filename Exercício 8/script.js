// Contador de números pares
// Contador de números pares, de 0 a 100 quantos números são? 
// Apresente o resultado no console.
 

var total = 0;

for (let i = 0; i <= 100; i++) {
    if (i%2 ==0)
    total = total +1
}

console.log ('De 0 a 100, ' + total + ' são números pares')

