// var sortPeople = function (names, heights) {
//   let mayor = 0,
//     menor = 99999999999,
//     small;
//   const orden = [];
//   for (let i = 0; i < names.length; i++) {
//     if (heights[i] > mayor) {
//       mayor = heights[i];
//       orden.push(names[i]);
//     } else if (heights[i] < menor) {
//       menor = heights[i];
//       small = names[i];
//     } else {
//       orden.push(names[i]);
//     }
//   }
//   orden.push(small);
//   return orden;
// };

// var sortPeople = function (names, heights) {
//   let mayor = 0,
//     menor = Infinity,
//     smallest,
//     midle; // Usamos Infinity para representar el menor valor posible
//   const orden = [];

//   // Encontrar la altura máxima y mínima
//   for (let i = 0; i < names.length; i++) {
//     if (heights[i] > mayor) {
//       mayor = heights[i];
//     }
//     if (heights[i] < menor) {
//       menor = heights[i];
//     }
//   }

//   // Agregar los nombres correspondientes a la altura más pequeña al arreglo 'orden'
//   for (let i = 0; i < names.length; i++) {
//     if (heights[i] === mayor) {
//       orden.push(names[i]);
//     } else if (heights[i] === menor) {
//       smallest = names[i];
//     } else {
//       midle = names[i];
//     }
//   }
//   orden.push(midle);
//   orden.push(smallest);
//   return orden;
// };

//Mejor solucion
var sortPeople = function (names, heights) {
  //e declara la función sortPeople que toma dos parámetros: names, que es un arreglo de nombres, y heights, que es un arreglo de alturas.
  let length = heights.length; //Se declara una variable length que almacena la longitud del arreglo heights, es decir, el número de elementos en el arreglo.
  let map = new Map(); //Se crea un nuevo objeto Map llamado map.
  for (let i = 0; i < length; i++) {
    //Se inicia un bucle for que recorre los elementos del arreglo heights. En cada iteración, se utiliza el método set del objeto Map para asignar el nombre correspondiente a cada altura. Esto significa que se mapea cada altura con su nombre correspondiente en el objeto map
    map.set(heights[i], names[i]);
  }
  //Después de completar el bucle, el objeto map contiene pares clave-valor donde las claves son las alturas y los valores son los nombres correspondientes.
  heights.sort((a, b) => b - a); //Se ordena el arreglo heights en orden descendente utilizando el método sort. La función de comparación (a, b) => b - a asegura que los elementos se ordenen de mayor a menor.
  let res = []; //Se declara un arreglo vacío res, que se utilizará para almacenar los nombres ordenados según las alturas.
  for (let height of heights) {
    //Se inicia un bucle for-of que recorre cada altura en el arreglo heights
    res.push(map.get(height)); //En cada iteración, se utiliza el método get del objeto map para obtener el nombre correspondiente a la altura actual y se agrega a la matriz res.
  }
  return res; //Después de completar el bucle, la matriz res contiene los nombres ordenados según las alturas correspondientes.
};
console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150]));
