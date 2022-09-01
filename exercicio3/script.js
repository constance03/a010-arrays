//Crie três novos arrays, chamados nomeDoArrayOriginalCopia, e faça o que se pede abaixo 
//nas cópias dos arrays originais;
const numeros = [6,10,13]
const numerosCopia = numeros.slice()
const strings = ["oi", "tudo bem", "com voce"]
const stringsCopia = strings.slice()
const misto = ["teste", 34, false]
const mistoCopia = misto.slice()

// Adicione um item number ao primeiro array. Exibir o original e a cópia;
numerosCopia.push(56)
console.log(`Array original: ${numeros} \nCopia: ${numerosCopia}`)

// Remova o último item do segundo array. Exibir o original e a cópia;
stringsCopia.pop()
console.log(`Array original: ${strings} \nCopia: ${stringsCopia}`)

// Remova o segundo item do terceiro array. Exibir o original e a cópia;
mistoCopia.splice(1,1)  //segundo item = index 1
console.log(`Array original: ${misto} \nCopia: ${mistoCopia}`)
