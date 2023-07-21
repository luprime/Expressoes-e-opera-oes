/*
    aula 1

    new

    *left-hand-side expression
    *criar um novo objeto
*/

//let name = new String('Lucas')
//name.surName = "Menezes"
//let age = new Number(26)
//console.log(name.surName, age)

/*
    aula 2

    Operadores unários
    typeof
    delete
*/
/*
const person = {
    name: 'lucas',
    age: 25
}
delete person.age

console.log(person)
*/

/*
    aula 3 - Operadores Aritiméticos
*/
//    multiplicação *
//console.log(3 * 5)
//    divisão /
//console.log(12 / 2)
//    soma +
//console.log(34+87)
//    subtração -
//console.log(34-23)

//    resto da divisão % (oq sobra depois de dividir)
//remainder = 11 % 3
//console.log(remainder)
//    incremento ++ (vai incrementar um valor)
//let increment = 0
//increment++
//console.log(increment)
//    decremento -- 
//let decrement = 0
//decrement--
//console.log(decrement)
//    exponencial **
//console.log(3**3)

// aula 4 - Grouping operator()
//let total = (2 + 3) *5
//console.log(total)

// aula 5 - Operadores de comparação

// Irá comparar valores e retornar um Boolean como resposta à comparação

//let one = 1
//let two = 2

// == igual a
//console.log(two == 1)
//console.log(one == "1")

// != diferente de
// console.log(one != two)
// console.log(one != 1)
// console.log(one != "1")

// === estritamente igual a 
//console.log(one === "1")
//console.log(one === 1)

// !== estritamente diferente
//console.log(two !== "2")
//console.log(two !== 2)

// > maior que 
// console.log(one > two)

// >= maior igual a
// console.log(one >= 1)
// console.log(two >= 1)

// < menor que
// console.log(one < two)

// <= manor igual a
// console.log(one <= two)
// console.log(one <= 1)
//console.log(one <= 0)

// aula 6 - Operadores de atribuição (assignment)
//let x

//console.log(x)

// assignment
// x = 1

// addition assignment
// x +=2

// subtraction assignment
// x -= 1

// multiplication assignment
// x *= 2

// division assignment
// x /= 2

// aula 7 - operadores lógicos (logical operators)

// -2 valores booleanos, quando verificados, resultará em verdadeiro ou falso

//let pao = true
//let queijo = true

// AND &&
//console.log(pao && queijo)

// OR ||
// console.log(pao || queijo)

// NOT !
// console.log(!queijo)

// aula 8 - Operador condicional (Ternário)

// dependendo da condição, nós receberemos valores diferentes
// condição então valor 1 se não valor 2
// condition ? value1  : value2

// exemplos 

// café da manhã top
//let pao = true
//let queijo = true

//const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'

//console.log(niceBreakfast)

// maior de 18

//let age = 16

//const canDrive = age >= 18 ? 'Can drive' : "Can't drive"

//console.log(canDrive)

// aula 9 - Operador de String (String operator)

// comparison (comparação)
//console.log('a' == 'b')
// concatenation (concatenação)
// Retorna a união de duas Strings
//let alpha = 'alpha'
//console.log(alpha + 'bet')

// aula 10 - Type conversion (typecasting) vs Type coersion

//console.log(Number('9') + 5)

/*
    FALSY
    quando um valor é considerado false em contextos onde um booleano
    é obrigatório (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

//console.log( "" ? 'verdadeiro' : 'falso')

/*
    TRUTHY
    quando um valor é considerado true em contextos onde um booleano
    é obrigatório (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

//console.log( "false" ? 'verdadeiro' : 'falso')

/*
    aula 11 - Operator precedence
    precedência de operadores

    * grouping                  ()
    * negação e incremento      ! ++ --
    * multiplicação e divisão   * /
    * adição e subtração        + -
    * relacional                < <= >= >
    * igualdade                 == != === !==
    * AND                       &&
    * OR                        ||
    * condicional               ?:  
    * assignment (atribuição)   = += -= *= %=
    

*/

//console.log((2 + 5) * 10)