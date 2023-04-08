
let products = [
    {name: "Banana", category: "Fruta", price: 1.29}, 
    {name: "Manga", category: "Fruta", price: 2.29},
    {name: "Pepino", category: "Legumes", price: 1.99},
    {name: "Iogurte", category: "Lacticínios", price: 1.99},   
    {name: "Pão", category: "Padaria", price: 0.49}       
];

let myList = document.getElementById('productList');

for(i = 0; i < products.lenght; i++) {
    
    let product = products[i];
    
    let listItem = document.createElement("li");
    
    listItem.textContent = product.name + " (" + product.category + "): " + product.price + " €/Kg";
    
    myList.appendChild(listItem);
}