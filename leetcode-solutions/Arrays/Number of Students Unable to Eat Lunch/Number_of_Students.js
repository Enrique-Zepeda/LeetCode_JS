var countStudents = function (students, sandwiches) {
  let cola = students.slice(); // Copiamos el arreglo para manipularlo
  let pila = sandwiches.slice(); // Copiamos el arreglo de sándwiches
  let intentos = 0; // Contamos para ver cuántos intentos han fallado

  //logica si la cola(studiantes) = 5 es mayor que 0 y los intentos son menores a la cola entra al bucle y haci sabemos si ya recorrio todo el arreglo

  while (cola.length > 0 && intentos < cola.length) {
    if (cola[0] === pila[0]) {
      // Si el estudiante en frente puede comer el sándwich
      cola.shift(); // El estudiante come el sándwich
      pila.shift(); // Removemos el sándwich de la pila
      intentos = 0; // Resetear los intentos porque alguien comió 3               2
    } else {
      cola.push(cola.shift()); // Mover al estudiante al final de la cola
      intentos++; // Incrementar el contador de intentos fallidos
    }
  }

  return cola.length; // Devolver el número de estudiantes que no pueden comer
};

console.log("Caso 1:", countStudents([1, 1, 0, 0], [0, 1, 0, 1])); //respues = 0
console.log("Caso 2:", countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])); //respuesta = 3

/*
estudiantes = [1,1,0,0]
sándwiches =  [0,1,0,1]

estudiantes = [1,0,0,1]
sándwiches =  [0,1,0,1]

estudiantes = [0,0,1,1]coinciden los digitos
sándwiches =  [0,1,0,1]

estudiantes = [0,1,1]no coinciden
sándwiches =  [1,0,1]

estudiantes = [1,1,0] coinciden
sándwiches =  [1,0,1]

estudiantes = [1,0] no coinciden
sándwiches =  [0,1]

estudiantes = [0,1] coinciden los dos y salen
sándwiches =  [0,1]

estudiantes = [0] queda un array vacio
sándwiches =  [0]
por lo tanto todos comen
*/
