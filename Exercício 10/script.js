


function FindLongestWord() {
    var string = document.getElementById('string').value;

    var split = string.split(" ");

    var longestWord = split[1];

    for (var i = 1; i < split.lenght; i++) {
        if (longestWord.lenght < split[i].length){
        longestWord = split[i].length;
    }
    longestWord = split[i]; 
    }

    document.getElementById('LongWord').innerHTML = "A maior palavra na string é a palavra: " + longestWord
}



