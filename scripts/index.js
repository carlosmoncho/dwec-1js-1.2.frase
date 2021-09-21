'use strict'
let frase = prompt('introduce una cadena')
console.log(letras(frase))
console.log(palabras(frase))
console.log(maysc(frase))
console.log(titulo(frase))
console.log(letrasReves(frase))
console.log(palabrasReves(frase))
if(palindromo(frase)){
    console.log('Sí es un palíndromo')
}else {
    console.log('No es un palíndromo')
}