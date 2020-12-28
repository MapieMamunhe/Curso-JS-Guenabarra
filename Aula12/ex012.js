var agora = new Date();
var hora = agora.getHours();
if(hora<12){
    console.log(`Sao ${hora} horas, bom dia`);
}else{
    if(hora<18){
        console.log(`Sao ${hora} horas, boa tarde`);
    }else{
        if(hora<24){
            console.log(`Sao ${hora} horas, boa noite`);
        }
    }
}
