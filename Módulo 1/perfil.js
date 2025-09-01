function apresentarPerfil() {

console.log("Apresentação: ");    

const nome = "Nivair"
let ano = 2025
let anoNascimento = 2000

let idade = (ano - anoNascimento)

let maiorIdade = ""

if (idade >= 18) {
    maiorIdade = "Maior de idade"
} else {
    maiorIdade = "Menor de idade"
}

console.log(`Olá, sou ${nome}. Tenho ${idade} anos. Sou ${maiorIdade}`)
}

apresentarPerfil()
