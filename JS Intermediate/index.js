
/* 
comentários em bloco



// variable declaration
// var, let, const

console.log("I like pizza");
console.log("It´s really good!") // sem ponto e virgula

// window.alert("I Really like Pizza") // alerta ao inves de escrever diretamente no documento

// comentario simples



let firstname = "Maurilio";
let age = 21;
let student = true;

age = age +1;

console.log("Hello ",firstname,"you are", age, "and student",student);

document.getElementById("p1").innerHTML = "Hello " + firstname;
document.getElementById("p2").innerHTML = "you are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;

arithmetic expression is a combination of
operands (values, variables, etc.)
operator (+ - * / %)
that can be evaluated to a value
ex. y = x + 5


let students = 29; 

//students = students + 1;

students = students * 2;
console.log(students);

students = students / 2;
console.log(students);

document.write("sua idade é: ",students)

modstudents = students % 2;
console.log(modstudents);
document.write("<br> Mod: ",modstudents)

students += 1;
console.log(students);
students -= 1;
console.log(students);
students *= 2;
console.log(students);
students /= 2;
console.log(students);

/*
operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division
    4. addition & subtraction

*/

let result1 = 1 + 2 * (7); // resulta 15 pois faz na ordem de precedentes
let result2 = (1 + 2 * (3 + 4)); // resulta 15 pois faz na ordem de precedentes
console.log(result1);
console.log(result2);












