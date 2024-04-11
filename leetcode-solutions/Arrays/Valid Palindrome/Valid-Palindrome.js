var isPalindrome = function (s) {
  let string = s.toString().toLowerCase(); // Convertir a cadena y a minúsculas
  let stringJunto = string.replace(/[\s,:]/g, ""); // Eliminar espacios, comas y dos puntos
  let reversedString = stringJunto.split("").reverse().join(""); // Revertir la cadena

  console.log(stringJunto); // Mostrar la cadena sin los caracteres no deseados
  console.log(reversedString); // Mostrar la cadena revertida

  return stringJunto === reversedString; // Comprobar si es un palíndromo
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // Llamar a la función con un string
