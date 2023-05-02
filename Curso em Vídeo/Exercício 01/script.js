function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours() 
    var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora < 12) {
        //Bom dia!
        img.src = './img/morning.webp'
        document.body.style.background = '#6262ff'
    } else if (hora >=12 && hora < 18) {
        //Boa tarde!
        img.src = './img/afternoon.webp'
        document.body.style.background = '#ffa500'
    } else {
        //Boa noite!
        img.src = './img/night.webp'
        document.body.style.background = '#00003d'
    }
}
