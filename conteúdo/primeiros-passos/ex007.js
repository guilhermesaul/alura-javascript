console.log(`Trabalhando com condicionais`)
const listadedestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadecomprador = 12;
const estaacompanhada = true

console.log(`Destinos possíveis:`)
console.log(listadedestinos)

if (idadecomprador >= 18)  {
    console.log("Comprador maior de idade")
    listadedestinos.splice(1, 1) // removendo item
} else {
    // A pessoa é menor de idade
    if (estaacompanhada) {
        console.log("Comprador está acompanhado(a)")
        listadedestinos.splice(1, 1)
    } else {
        console.log("Comprador menor de idade e não posso vender")
    }
}

console.log(listadedestinos)

// console.log(idadecomprador > 18) // False ou True
// console.log(idadecomprador < 18) // False ou True
// console.log(idadecomprador >= 18) // False ou True
// console.log(idadecomprador <= 18) // False ou True
// console.log(idadecomprador == 18) // False ou True