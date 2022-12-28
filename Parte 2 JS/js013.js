// Condição multipla - Switch
/*
switch (expressão) {
case valor 1:

    break
case valor 2:

    break
    
case valor 3:

    break    
default:

    break
}

Domingo
..
Sábado


*/

var agora = new Date()  
var diasem = agora.getDay()

switch(diasem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    default:
        console.log('Sábado')
        break
        
}