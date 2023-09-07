/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   var tam= array.length;

   return array[tam-1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var NuevaMatriz =[];
   for(let i=0; i<array.length;i++){
      datoActual=array[i]+1;
      NuevaMatriz.push(datoActual);
   }
 return NuevaMatriz;  
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var PlabraJunta = palabras.join(' ');
   return PlabraJunta;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   for(let i = 0; i<array.length; i++){
      if(array[i]=== elemento){
         return true;
      }
      }
      return  false;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var sum1=0;
   var sum2=0;
   for(let i=0; i<arrayOfNums.length; i++){
sum1=arrayOfNums[i];
sum2=sum1+sum2;
   }
  return sum2; 
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
  var sumOne;
  var sumTwo =0;
   for(let i=0; i<resultadosTest.length; i++){
      sumOne=resultadosTest[i];
      sumTwo=sumOne+sumTwo;
   }
   var prom1=sumTwo/resultadosTest.length;
   return prom1;
}


function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
var valorGrande=0;

   for(i=0; i<arrayOfNums.length; i++){
      
      if(arrayOfNums[i]>valorGrande){
         valorGrande=arrayOfNums[i]; }
       }
      
         
     
return valorGrande;    
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
  var  multiplicacion =1;
   if(arguments.length === 0){
      return 0;
   }else if(arguments.length === 1) {
      return arguments [0];
   }
   else{
      for(let i =0; i<arguments.length; i++){
      multiplicacion=multiplicacion*arguments[i];
      }
      return multiplicacion;
   }

}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   contador=0;
   for(let i=0; i<array.length;i++){
if(array[i]>18)
contador++;
   }
   return contador;
}


function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:

   if(numeroDeDia == 6 || numeroDeDia== 2 || numeroDeDia == 3|| numeroDeDia== 4 || numeroDeDia== 5)
   {
      return 'Es dia laboral'
   }else if (numeroDeDia==1 || numeroDeDia == 7){
      return 'Es fin de semana'
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var numeroStr = num.toString();
   var matriStr = numeroStr.split('');

   if(matriStr[0]==='9'){
      return true;
   }else{
      return false;
   }


}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
  var c=0;
   for(i=0; i<array.length-1;i++){
      if(array[i]===array[i+1]){
         c++;
      }
   }
   if(c==array.length-1){
      return true;
   }else{
      return false;}
  
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var NuevoArreglo = [];
   for(let i=0; i<array.length; i++){
      if(array[i]==="Enero" || array[i]==="Marzo" || array[i]==="Noviembre"){
           NuevoArreglo.push(array[i]);
      }
   }
   if(NuevoArreglo.length ==3){
      return NuevoArreglo;
   }
   else{
      return "No se encontraron los meses pedidos"
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var Tabla = [];

   for(let i=0; i<11; i++){

      Tabla.push(6*i);
   }
return Tabla;   
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
var nvoArr =[];
   for(i=0; i<array.length;i++){
      if(array[i]>100){
         nvoArr.push(array[i]);
      }
   }
   return nvoArr;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
  var ArrayNvo =[];
  var suma = num;
   for(let i=0; i<10; i++){
      suma=suma+2;
      if(suma==i){
        
         break;
      }else { 
      ArrayNvo.push(suma);
   }
   }
   if(ArrayNvo.length<10){
      return "Se interrumpió la ejecución"
   }else if(ArrayNvo.length==10){
      return ArrayNvo;
   }
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var nvoArray =[];
   for ( let i=0;i<10;i++){
      if(i==5){
      continue;
      }
      else{
         num=num+2;
      nvoArray.push(num);}
      }
   return nvoArray;   
   
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
