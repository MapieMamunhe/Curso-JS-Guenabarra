let amigo = {nome: 'Jose',
sexo: 'M', 
peso: 85.4,
engordar(p = 0){
    this.peso += p;
}};
console.log(`${amigo.nome} pesa ${amigo.peso}`);
amigo.engordar(2);
console.log(`Engordou, agora pesa ${amigo.peso}`);