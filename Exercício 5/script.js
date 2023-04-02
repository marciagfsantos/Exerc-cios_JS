//Ligar e desligar a lâmpada

//Crie uma página com a imagem de uma lâmpada apagada, e que ao clicar a lâmpada acenda.
//Utilizar imagens e manipulação do DOM para mudar a imagem da lâmpada ao clicar na lâmpada.

function SubstituirImagem() {
    var image= document.getElementById('Lâmpada')  

    if (image.src.match('OFFLampada')) {
        image.src='img/ONLampada.jpg';
    } else {
       image.src='img/OFFLampada.jpg';
    }
}

