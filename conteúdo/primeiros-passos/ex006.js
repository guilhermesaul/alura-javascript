console.log(`Trabalhando com listas`)
// const salvador = `Salvador`
// const saopaulo = `São Paulo`
// const riodejaneiro = `Rio de Janeiro`
const listadedestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

listadedestinos.push(`Curitiba`) // Adicionando um item na lista
console.log(`Destinos possíveis:`)
// console.log(salvador, saopaulo, riodejaneiro)
console.log(listadedestinos)

listadedestinos.splice(1, 1) // splice deleta itens de listas (primeiro número é de onde você quer começar, segundo numero é quantos numeros você quer continuar deletar)
console.log(listadedestinos[1], ", ", listadedestinos[0])