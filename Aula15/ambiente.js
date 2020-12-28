let num = [6, 7, 9];
console.log(num);
num.sort()
console.log(`O vetor tem ${num.length} posicoes`)
console.log(`O primeiro valor do vetor e ${num[0]}`)
num.push(1)
num.sort()
console.log(`Ordenando o vetor ${num}`)
for(let pos in num){
    console.log(`A posicao ${pos} contem o valor ${num[pos]}`)
}