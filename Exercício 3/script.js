
//Objeto pessoa

/*Crie um documento html com um formulário, com os campos: 
 nome, idade e data de nascimento.*/

// Ao clicar em um botão, passar valores dos inputs para um objeto pessoa.

function GetFormData() {
    document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault()
})

let Name = document.getElementById('name').value; 

let Age = document.getElementById('age').value;

let Birthdate = document.getElementById('birthdate').value;


let Person = 
{Name: Name, 
Age:Age, 
Birthdate:Birthdate}

console.log(Person)
}