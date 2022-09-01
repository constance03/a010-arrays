// Com os arrays criados, agora vamos observar os arrays.
const numeros = [6,10,13]
const strings = ["oi", "tudo bem", "com voce"]
const misto = ["teste", 34, false]

// Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log(`Quantidade de itens na array de numeros: ${numeros.length}`); 
console.log(`Quantidade de itens na array de strings: ${strings.length}`); 
console.log(`Quantidade de itens na array mista: ${misto.length}`); 

// Imprima o primeiro item do primeiro array, o segundo item do segundo array,
// e o terceiro item do terceiro array;
console.log(`Primeiro item do primeiro array (numeros): ${numeros[0]}`);
console.log(`Segundo item do segundo array (strings): ${strings[1]}`);
console.log(`Terceiro item do terceiro array (misto): ${misto[2]}`);

// Imprima uma informação booleana verdadeira sobre a inclusão de um item do primeiro array,
// e uma informação booleana falsa sobre a inclusão de um item ao terceiro array. 
console.log(`Inclui o item '6' na array numeros? ${numeros.includes(6)}`);
console.log(`Inclui o item '56' na array mista? ${misto.includes(56)}`);
