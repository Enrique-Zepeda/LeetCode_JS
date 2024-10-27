//Codigo mio
// function compareTriplets(a, b) {
//   const initialValue = 0;
//   const initialValue1 = 0;
//   const alice = [];
//   const bob = [];
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] > b[i]) {
//       alice[alice.length] = +1;
//     } else if (a[i] < b[i]) {
//       bob[bob.length] = +1;
//     } else if ((a[i] = b[i])) {
//     }
//   }
//   const alicePoints = alice.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue
//   );
//   const bobPoints = bob.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue1
//   );

//   const puntaje = [alicePoints, bobPoints];
//   return puntaje;
// }

// console.log(compareTriplets([1, 2, 3], [3, 2, 1]));

//Mejor solucion

function compareTriplets(a, b) {
  let alicePoints = 0;
  let bobPoints = 0;

  // Loop through each index of the triplets
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      alicePoints++; // Alice earns a point if her score is higher
    } else if (a[i] < b[i]) {
      bobPoints++; // Bob earns a point if his score is higher
    }
  }

  return [alicePoints, bobPoints]; // Return the scores as an array
}

// Test the function with given sample inputs
console.log(compareTriplets([5, 6, 7], [3, 6, 10])); // Output should be [1, 1]
console.log(compareTriplets([17, 28, 30], [99, 16, 8])); // Output should be [2, 1]
