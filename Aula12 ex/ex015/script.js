function verificar(){
    var data = new Date();
    var anoActual = data.getFullYear();
    var fano = document.getElementById("txtAno");
    var res = document.getElementById("res");
    if((fano.value.length == 0) || (fano.value > anoActual)){
        window.alert("ERRO! Verfique os dados e tente novamente");
    }else{
        var fsex = document.getElementsByName("radsex");
        var idade = anoActual - fano.value;
        var genero = '';
        var img = document.createElement(`img`);
        img.setAttribute(`id`, `foto`);
        if(fsex[0].checked){
            genero = 'Homem';
            if(idade < 5){
                //bebe
                img.setAttribute("src", "bebe.png");
            }else{
                if(idade < 10){
                    //crianca
                    img.setAttribute("src","criancahomem.png");
                }else{
                    if(idade<30){
                        //jovem
                        img.setAttribute("src","jovemhomem.png");
                    }else{
                        if(idade<55){
                            //adulto
                            img.setAttribute("src","adultohomem.png");
                        }else{
                            //idoso
                            img.setAttribute("src","idosohomem.png");
                        }
                    }
                }
            }
        }else{
            if(fsex[1].checked){
                genero = 'Mulher';
            }
            if(idade < 5){
                //bebe
                img.setAttribute("src", "bebe.png");
            }else{
                if(idade < 10){
                    //crianca
                    img.setAttribute("src","criancamulher.png");
                }else{
                    if(idade<30){
                        //jovem
                        img.setAttribute("src","jovemmulher.png");
                    }else{
                        if(idade<55){
                            //adulto
                            img.setAttribute("src","adultomulher.png");
                        }else{
                            //idoso
                            img.setAttribute("src","idosomulher.png");
                        }
                    }
                }
            }
        }
        res.style.textAlign = "center";
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.append(img);
        
    }
}