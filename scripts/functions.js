'use strict'

function letras(frase){
    return(frase.length)
}

function palabras(frase){
    let totalPalabras = frase.split(' ')
    return(totalPalabras.length)
}

function maysc(frase){
    return frase.toLocaleUpperCase()
}

function titulo(frase){
    let fraseSeparada=frase.split(' ')
    return fraseSeparada.map(frase => frase[0].toUpperCase() + frase.slice(1)).join(' ')
}

function letrasReves(frase){
    return frase.split("").reverse().join("");
}

function palabrasReves(frase){
    let fraseSeparada=frase.split(' ')
    return fraseSeparada.reverse( ).join(' ')
}

function palindromo(frase){
    let fraseMinus = frase.toLocaleLowerCase()
    return fraseMinus.endsWith(fraseMinus.charAt(0))
}

module.exports = {
	letras,
	palabras,
	maysc,
	titulo,
	letrasReves,
	palabrasReves,
	palindromo
}