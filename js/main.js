
// 1) Introduction:

// Escribir en la web atravez de JS
// document.write(
//     `<h3>
//         Texto escrito atravez de JS con el comando: "document.write"
//     </h3>`
// );

// alert('Mensaje usando la función "alert"');
// alert("Hola");
// ["Bienvenidos a", "Todointerconectado"].forEach(alert);

console.log("Imprime en consola");



// declaración de variables, su valor puede cambiar
// para crear una variable se usan las palabras reservadas:
// var (ya no se usa)
// let (variables que cambia su valor)
// const (variables que no cambia su valor)

// los nombres de las variables no pueden tener:
// Números en el inicio: let 123userName; ❌
// Símbolos especiales al inicio: let #userName; ❌
// llamarse de la misma manera que las palabras reservadas Ej: let let; ❌
/* 
Si se puede: 
    let _userName; ✔
    let $userName: ✔
*/
// Podemos user números pero estos tienen que estar en el medio o al final.
// Si se puede poner nombre largos, es una buene plactiva.

// Libro recomendado: Código Limpio. Manual de estilo para el desarrollo ágil de software
// En el nombramiento de variables se escriben en inglish
// Aplicamos la metodología lawerCamelCase para nombrar las variables, primera palabra empieza en minuscula y las siguientes en mayuscula. Ej: userName


// variable constantes, su valor no puede cambiar
const pi = 3.14;
console.log(pi);
// document.write(pi);
// pi = 30;


let userName = 'Francisco ';
console.log(userName);
// document.write(userName);
userName = 'Juan ';
console.log(userName);


let age;
console.log(age); // underfined significa indifinido.


let ages = null;
console.log(ages); // null significa vacio.


// En ves de poner un alert vamos a pedir que se ingrese un dato con prompt:
// let savePrompt = prompt("Ingrese edad:");
let birthYear = null;

// document.write(savePrompt);
// console.log(savePrompt);

// calculo
// birthYear = 2022 - savePrompt;

// Alt + 96: ``
// contatenación ${savePrompt}
// document.write(`Tu tienes ${savePrompt} años de edad y naciste en ${birthYear}!`);


// 2) Tipos de datos:

// Datos Primitivos: Representan un valor.
// Datos Tipo Objetos: Representan varios Valores.

/* Datos Primitivos: 
    Number
    Strings
    Booleans
    Null
    Undefined
    Symbols
*/

/* Datos Tipo Objetos:
    Arrays
    Object
    Date, RegExp, Error ...
*/


//< Number:
let variable, number;

number =  (2**53-1); console.log(number);
number = -(2**53-1); console.log(number);

number = 22 / 0; console.log(number);
number = -22 / 0; console.log(number);
number = "Hola" * 0; console.log(number);

variable = 2022;   console.log(variable);
variable = 10.25;  console.log(variable);
variable = "Hola"; console.log(variable);

// Bigint:
let numberBigint = 123456789123456789123456789123456789012345677899645454545454545n;
console.log(numberBigint);


// String:
let text = 'Todointerconectado';
console.log(text);

let types = 
`Tipos primitivos de datos:
1 Number
2 Strindg
3 Booleans
4 Null
5 Undefined
6 Symbol
`;

console.log(types);

// Booleanos: Tiene dos valores: True o False
let rememberMe = false;

// Underfined: Valor no asignado
let name; console.log(name);

// Null: Valor repressenta vacio
let nameNull = null; console.log(nameNull);


// Datos Tipo Objetos: Arrays
let options = [1,2,3];

console.log(options);

console.log(options[0]);
console.log(options[1]);
console.log(options[2]);



// Datos Tipo Objetos: Objetos
let option = {
    option1: 1,
    option2: 2,
    option3: 3
};
console.log(option);


let user = {
    name: "Francisco",
    age: 29,
    membership: true
};
console.log(user);


// 4) Operadores
// 5 + 8 : 5 y 8 son los operado y el simbolo + es el operador

// Operadores unarios (un operador)
// Operadores binarios (dos operadores)
// Operadores ternario (tres operadores)


/* Aritméticos: 
    Más:   +
    Menos: -
    Multiplicación: *
    Divición: /
    Modulo:   %
    Potenciación: **
    Incremento: ++
    Decremento: --
*/

let operador1 = 3;
let operador2 = 2;
let resultado, resto;

// Más
resultado = operador1 + operador2;
console.log(resultado);

// Menos
resultado = operador1 - operador2;
console.log(resultado);

// Multiplicación
resultado = operador1 * operador2;
console.log(resultado);

// Divición
resultado = operador1 / operador2;
console.log(resultado);

// Modulo
resto = operador1 % operador2;
console.log(resto);

// Potenciación
resultado = operador1 ** operador2;
console.log(resultado);

// Incremento
operador1 = 3;
resultado = ++operador1;  // operador1 = 3+1 = 4
console.log(resultado);
console.log(operador1);

operador1 = 3;
resultado = operador1++;  // operador1 = resultado = 3
console.log(resultado);
  // luego operador1 = 3+1 = 4
console.log(operador1);


// Decremento
operador2 = 2;
resultado = --operador2;  // operador1 = 2-1 = 1
console.log(resultado);
console.log(operador2);

operador2 = 2;
resultado = operador2--;  // operador1 = resultado = 3
console.log(resultado);
  // luego operador2 = 2-1 = 1
console.log(operador2);


/* Asignación: 
    Igual: =
    Más igual: +=
    Menos igual: -=
    Multiplicación igual: *=
    Divición igual: /=
    Modulo igual: %=
    Potencia igual: **=
*/

// Igual
resultado = 5;

// Más igual
resultado = 5;
resultado += 3; // 5+3 = 8
console.log(resultado);

// Menos igual
resultado = 5;
resultado -= 3; // 5-3 = 2
console.log(resultado);

// Multiplicación igual
resultado = 5;
resultado *= 3; // 5*3 = 15
console.log(resultado);

// Divición igual
resultado = 5;
resultado /= 3; // 5/3 = 1.66
console.log(resultado);

// Modulo igual
resultado = 5;
resultado %= 3; // 5%3 = 2
console.log(resultado);

// Potencia igual
resultado = 5;
resultado **= 3; // 5**3 = 125
console.log(resultado);

/* Comparación: 
    Mayor que: >
    Menor que: <
    Mayor igual que: >=
    Menor igual que: <=
    Igual que (sin tamar en cuenta el tipo): ==
    Extrictamente Igual que : ===
    Diferentes: !=
    Extrictamente diferentes: !==
*/

console.log(2 > 3);
console.log(2 < 3);
console.log(2 >= 3);
console.log(2 <= 3);
console.log(2 == "2");
console.log(2 === "2");
console.log(2 != 2);
console.log(2 !== "2");

/* Lógicos: 
    AND: &&
    OR: ||
*/

let operado1 = true;
let operado2 = false;
console.log(operado1 && operado2);
/* AND:
operado1 |  operado2 | resultado
---------|-----------|----------
true     |   true    |  true
true     |   false   |  false
false    |   true    |  false
false    |   false   |  false
*/

operado1 = true;
operado2 = false;
console.log(operado1 || operado2);
/* OR:
operado1 |  operado2 | resultado
---------|-----------|----------
true     |   true    |  true
true     |   false   |  true
false    |   true    |  true
false    |   false   |  false
*/



// Ternario: ?
resultado = (30 === '30') ? 'Si es igual': 'NO es igual';
console.log(resultado);

resultado = (30 === 30) ? 'Si es igual': 'NO es igual';
console.log(resultado);


// 5) IF - Else

/*
if(condition){
    código si se cumple
}
else {
    código si no se comple
}
*/

/*
if(condition){
    código si se cumple
}
else if(condition){
    código si no se comple -> código si se cumple
}
*/

/*
    let condition = 1;

    document.write('<h1>linea de código 1<br></h1>');
    document.write('<h1>linea de código 2<br></h1>');
    document.write('<h1>linea de código 3<br></h1>');

    if(condition == 1) {
        document.write('<h1>Sí se cumple el IF 1<br></h1>');
    }
    else if(condition == 2) {
        document.write('<h1>Se cumple el IF 2<br></h1>');
    }
    else {
        document.write('<h1>NO se cumple el IF<br></h1>');
    }

    document.write('<h1>linea de código 4<br></h1>');
*/

// 6) Switch

