/* Ejercicios de Repaso
Ejercicio – Calcular Promedio
• El DT de los infantiles del equipo de fútbol desea
saber el promedio de la edad de los chicos
• La edad de los chicos va de 3 a 7 años. Las
edades son cargadas al azar (use la función
aleatorio(menorValor, mayorValor), es decir
aleatorio(3,7))
• Muestre todas las edades y el promedio de las
mismas */

let equipo: number[] = new Array(6);
let min: number = 3;
let max: number = 7;

function aleatorio(menorValor: number, mayorValor: number): number {
  return Math.floor(Math.random() * (mayorValor + 1 - menorValor) + menorValor);
}
function sacarPromedio(arreglo: number[]): number {
  let resultado: number = 0;
  let promedio: number = 0;
  for (let i: number = 0; i < arreglo.length; i++) {
    resultado += arreglo[i];
  }
  promedio = resultado / arreglo.length;
  return promedio;
}

for (let i: number = 0; i < equipo.length; i++) {
  equipo[i] = aleatorio(min, max);
}

console.log(`edades ${equipo} - promedio edades ${sacarPromedio(equipo)}`);
