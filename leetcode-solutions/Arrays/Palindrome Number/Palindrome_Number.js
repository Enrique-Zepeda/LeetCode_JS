var isPalindrome = function (x) {
  const cadena = x.toString(); //aqui convierto el numero en un string llamado cadena
  let newArray = []; //aqui creo un arreglo vacio
  console.log(cadena); //aqui se ve la cadena que el numero en string
  for (let i = 0; i < cadena.length; i++) {
    //hago un ciclo for para guardar la cadena en un nuevo arreglo donde voy a ivertir los digitos
    console.log(cadena[i]);
    const elemento = cadena[i];
    newArray.unshift(elemento); //agrego siempre al principio del arreglo el elemento
  }
  const reverse = newArray.join(""); //uso join para canvertir el arreglo a string y quitarle las ,
  console.log(reverse);
  if (cadena === reverse) {
    //reviso si coinciden y si es verdadero es un palindromo
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(121));
console.log(isPalindrome(123));
