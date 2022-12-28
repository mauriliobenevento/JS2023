var agora = new Date()  
var hora = agora.getHours() 

if (hora <= 12) {
    console.log(hora, 'hr Bom dia')
} else if (hora > 12 && hora <18) {
    console.log(hora, ' Boa tarde')
} else if (hora > 18 && hora <=24){
    console.log(hora, 'Boa noite')
    }
else {
    console.log('Uma boa madruga por ai')
}

