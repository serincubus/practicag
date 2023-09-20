console.log("hola a todos");
let num1 = 20;
let num2 = 5;
let operador = "sumar"

switch(operador){
   case "sumar" : 
   console.log(num1 + num2);
   break;
   case "restar":
   console.log(num1 - num2);
   break;
   case "multiplicar":
   console.log(num1 * num2);
   break;
   case "dividir":
   console.log(num1 / num2);
   break;
   default:
   console.log("ingrese la operacion correcta") 
}  