// Cálculo de aposentadoria
// Crie um programa para calcular a aposentadoria de uma pessoa.

//Comece criando constantes para armazenar nome, sexo, idade e contribuicao(em anos), por exemplo:

const nome ="Marcia"
const sexo = "M"
const idade = 43
const contribuicao = 20

const regra = (idade + contribuicao )

if(sexo == "M"){
    if(contribuicao >= 35 || regra >= 95){
        console.log(`${nome} voce pode se aposentar`)
    }else{
        console.log(`${nome} voce ainda nao pode se aposentar ainda faltam ${35 -contribuicao} anos`)
    }
}

if(sexo == "F"){
    if(contribuicao >= 25 || regra >= 85){
        console.log(`${nome} voce pode se aposentar`)
    }else{
        console.log(`${nome} voce ainda nao pode se aposentar ainda faltam ${ 25 - contribuicao} anos`)
    }
}