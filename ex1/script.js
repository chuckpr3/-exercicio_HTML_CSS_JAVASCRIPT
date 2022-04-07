function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
   var hora = data.getHours()
    //var hora = 8
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        //Bom Dia!
        img.src = 'dia.png'
        document.body.style.background = 'rgb(226, 205, 159)'

    }else if( hora >= 12 && hora <= 18){
        //Boa Tarde!
        img.src = 'tarde.png'
        document.body.style.background = 'rgb(220, 140, 80)'

    }else{
        //Boa Noite!
        img.src = 'noite.png'
        document.body.style.background = 'rgb(117, 73, 101)'
    }
    
}