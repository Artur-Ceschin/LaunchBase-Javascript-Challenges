// Cálculo de IMC
// Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

//Comece criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa, por exemplo:
const nome = "Artur"
const peso = 65
const altura = 1.86
const sexo = "M"

//A partir desses dados armazene em uma constante chamada imc o cálculo do índice de massa corporal definido pela fórmula abaixo:
const IMC = peso / (altura * altura)


if(IMC >= 30){
    console.log(`${nome} você está acima do peso seu IMC é de ${IMC.toFixed(2)}`)
} else{
    console.log(`${nome} você não está acima do peso seu IMC é de ${IMC.toFixed(2)}`)
}
IMC.toFixed(2)

