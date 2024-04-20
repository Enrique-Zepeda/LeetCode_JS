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

var sortPeople = function (names, heights) {
  let mayor = 0,
    menor = Infinity,
    smallest,
    midle; // Usamos Infinity para representar el menor valor posible
  const orden = [];

  // Encontrar la altura máxima y mínima
  for (let i = 0; i < names.length; i++) {
    if (heights[i] > mayor) {
      mayor = heights[i];
    }
    if (heights[i] < menor) {
      menor = heights[i];
    }
  }

  // Agregar los nombres correspondientes a la altura más pequeña al arreglo 'orden'
  for (let i = 0; i < names.length; i++) {
    if (heights[i] === mayor) {
      orden.push(names[i]);
    } else if (heights[i] === menor) {
      smallest = names[i];
    } else {
      midle = names[i];
    }
  }
  orden.push(midle);
  orden.push(smallest);
  return orden;
};
console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150]));
