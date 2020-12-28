var valoresInseridos =[]
let res = document.getElementById("res");
function inserir(){
    let valor = document.querySelector("input#numero");
    let n = Number(valor.value);
    let valores = document.getElementsByTagName("option");
    if(valor.value.length == 0){
        alert("Preencha o campo");
    }else{
        if(n > 100 || n < 1){
            alert("VALOR INVALIDO! POR FAVOR, TENTE NOVAMENTE");
        }else{
           let area = document.getElementById("valores");
           res.innerHTML = '';
           if(valoresInseridos.indexOf(n) == -1){
               valoresInseridos.push(n);
                let item = document.createElement("option");
                item.text = `O valor ${n} foi inserido`;
                area.appendChild(item);
           }else{
               alert("Valor ja inserido");
           }
        }
    }
    valor.value = '';
    valor.focus();
}

function calcSoma(n){
    let total = 0;
    for(let pos in n){
        total += n[pos];
    }
    return total;
}
function calcMedia(n){
    let total = calcSoma(n);
    return (total/n.length);
}
function maiorMenor(n){
    let maiorMenor = [n[0], n[0]];
    for (let i = 0; i < n.length; i++){
        if(maiorMenor[0] < n[i]){
            maiorMenor[0] = n[i];
        }
        if(maiorMenor[1] > n[i]){
            maiorMenor[1] = n[i];
        }
    }
    return maiorMenor;
}
function finalizar(){
    let area  = document.getElementsByTagName("option");
    if(area.length ==0){
        alert("Insira pelo menos 1 numero");
    }else{
        let maiorEmenor = maiorMenor(valoresInseridos);
        let maior= maiorEmenor[0];
        let menor = maiorEmenor[1];
        let media = calcMedia(valoresInseridos);
        let total =calcSoma(valoresInseridos);

        res.innerHTML = '';
        res.innerHTML += `Ao todo temos ${valoresInseridos.length} numeros<br>`;
        res.innerHTML +=`O maior valor é ${maior} <br>`;
        res.innerHTML +=`O menor valor é ${menor} <br>`;
        res.innerHTML +=`A soma de todos valores é ${total} <br>`;
        res.innerHTML +=`A media dos valores é ${media} <br>`;
        //Limpando os campos
        document.getElementById("valores").innerHTML ='';
        valoresInseridos =[];
    }
    
    
    
}