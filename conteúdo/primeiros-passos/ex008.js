console.log(`\n Trabalhando com loops`);
const listadedestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadecomprador = 12;
const estaacompanhada = false;
let tempassagemcomprada = true;
const destino = "Salvador";

console.log(`\n Destinos possíveis:`);
console.log(listadedestinos);

const podecomprar = idadecomprador >= 18 || estaacompanhada;

let contador = 0;
let destinoexiste = false;
while (contador < 3) {
  if (listadedestinos[contador] == destino) {
    console.log("Destino existe");
    destinoexiste = true
    break;
  }
  contador += 1;
}

console.log("Destino existe: ", destinoexiste)