function Calculate() {
    let fNumber = document.getElementById('number').value;
    let result = document.getElementById('result');

    return result.innerHTML = factorial(fNumber)
}

function factorial(number){
    if (number <= 1) {
        return 1
    } else {
        return number * factorial(number-1);
    }

}