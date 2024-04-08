var twoSum = function (nums, target) {
  //copeo y pego la funcion de leetcode
  for (let i = 0; i < nums.length; i++) {
    //creo un primer bucle para recorrer el arreglo desde el indice 0
    for (let j = i + 1; j < nums.length; j++) {
      // creo un segundo arreglo para recorrer un indice mas que el anterio j = i+1 esto hace que el primer bucle empieze desde 1 y que el siguiente empieze desde el inidce 2 y cada vez que itere el bucle anidado j siempre ira un indice adelante de i
      if (nums[i] + nums[j] === target) {
        //ponemos nums[i] + nums[j] porque nums contiene el arreglo que le pasamos por los parametros y los sumamos y target es el parametro que le pasa leetcode en este caso 9
        return [i, j]; //si entra al condicionla es porque si se cumplio que los indices sumados uno alado del otro den 9
      }
    }
  }
  return nums[i]; //retornamos el array de i porque no hubo solucion alguna
  //   return console.log("no hubo solucion");
};
//caso 1
console.log("Case 1:", twoSum([2, 7, 11, 15], 9)); //imprimimos en consola de vs code para verificar si nuestro primer caso de leetcode es correcto twoSum() mandamos a ejecutar la funcion y despues le pasamos el primer parametro que en este caso es un arreglo [aqui ponemos los datos necesarios] y depues ingresamo el segundo parametro que seria el target que en este caso es 9
//caso 2
console.log("Case 2:", twoSum([3, 2, 4], 6));
//caso 3
console.log("Case 3:", twoSum([3, 3], 6));
