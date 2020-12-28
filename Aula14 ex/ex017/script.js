function tabuada(){
    var num = document.querySelector("input#numero");
    var area = document.getElementById("tabuada");
    if(num.value.length == 0){
        alert("Preencha o campo numero");
    }else{
        var n = Number(num.value);
        var c = 1;
        area.innerHTML = '';
        do{
            var item = document.createElement('option');
            item.text =(`${n} x ${c} = ${n*c}`);
            area.appendChild(item);
            c++;
        }while(c <= 10);
    }
}