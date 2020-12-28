function contar(){
    var inicio = document.querySelector("input#inicio");
    var finicio =Number(inicio.value);
    var passo = document.getElementById("passo");
    var rpasso = Number(passo.value);
    var fim = document.querySelector("input#fim");
    var ffim = Number(fim.value);
    var res = document.getElementById("res");
    if(inicio.value.length == 0){
        window.alert("Preencha o campo 'Inicio'");
    }else{
        if(passo.value.length == 0){
            window.alert("Preencha o campo 'Passo'");
        }else {
            if(fim.value.length == 0){
                window.alert("Preencha o campo 'Fim'");
            }else{
                //Contagem
                if(passo.value <= 0){
                    window.alert("Passo deve ser maior que '0'...assumindo '1'");
                    rpasso = 1;
                }
                if(finicio > ffim){
                    res.innerHTML="Contando: <p>"
                    var final = ``;
                    var contador;
                    for(contador = finicio ; contador >= ffim; contador -= rpasso ){
                        final += `${contador}`;
                        if(!((contador-rpasso) < Number(fim.value))){
                            final+=`, `;
                        }
                    }
                    res.innerHTML += `${final} </p>`;
                }else{
                    res.innerHTML="Contando: <p>"
                    var final = ``;
                    var contador;
                    for(contador = finicio ; contador <= ffim; contador += rpasso ){
                        final += `${contador}`;
                        if(!((contador+rpasso) > Number(fim.value))){
                            final+=`, `;
                        }
                    }
                    res.innerHTML += `${final} </p>`;
                }
            }
        }
    }
    
}