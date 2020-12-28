function carregar(){
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`;
    if(hora < 12){
        //bom dia
        document.body.style.backgroundColor = "#c8a64c";
        img.src = "fotomanha.png";
    }else{
        if(hora<18){
            //boa tarde
            document.body.style.backgroundColor="#e58248";
            img.src = "fototarde.png";
        }else{
            //boa noite
            document.body.style.backgroundColor = "#5c90e7";
            img.src = "fotonoite.png";
        }
    }
}

