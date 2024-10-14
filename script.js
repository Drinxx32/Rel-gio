function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'manhã redonda.png'
        document.body.style.background ='#fde1b7'

    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde!
        img.src = 'tarde redonda.png'
        document.body.style.background ='#ffa939'
    } else{
        img.src = 'noite redonda.png'
        document.body.style.background ='#012346'
        //Boa noite!
    } 


}
