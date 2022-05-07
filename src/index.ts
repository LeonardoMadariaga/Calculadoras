let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let operacion = document.getElementById("operacion");
let btnCalcular = document.getElementById("calcular");
btnCalcular.addEventListener("click", () => {
  let num1: number = Number(numero1.value);
  let num2: number = Number(numero2.value);
  let opcion: number = Number(operacion.value);
  let resultado: number = 0;
  let linea: string = "-";
  for (let i: number = 0; i <= 40; i++) {
    linea = linea + "-";
  }
  if (opcion === 1) {
    resultado = num1 + num2;
  } else if (opcion === 2) {
    resultado = num1 - num2;
  } else {
    console.log("ingrese una opcion correcta");
  }
  console.log(linea);
  console.log("El resultado es: ", resultado);
  console.log(linea);
});
//------------------------------------------
// OPCION CON METEDOS
/*
let dibujarGuiones = (guiones: number) => {
  let linea: string = "-";
  for (let i: number = 0; i <= guiones; i++) {
    linea = linea + "-";
  }
  console.log(linea);
};
let calcularResultado = (
  numero1: number,
  numero2: number,
  opcionMenu: number
): number => {
  let resultado: number = 0;
  if (opcionMenu == 1) {
    resultado = numero1 + numero2;
  } else if (opcionMenu == 2) {
    resultado = numero1 - numero2;
  }
  return resultado;
};
btnCalcular.addEventListener("click", () => {
  let total: number = calcularResultado(
    Number(numero1.value),
    Number(numero2.value),
    Number(operacion.value)
  );
  dibujarGuiones(40);
  console.log("El resultado es: ", total);
  dibujarGuiones(40);
});
*/
