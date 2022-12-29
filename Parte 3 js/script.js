
// Emoji https://unicode.org/emoji/charts/full-emoji-list.html

function contar(){
    let t1 = document.getElementById('n1')
    let t2 = document.getElementById('n2')
    let t3 = document.getElementById('n3')
   
    if(t1.value.length == 0 || t2.value.length == 0 || t3.value.length == 0){
        resp.innerHTML = 'Faltam dados: '
    } else {
       resp.innerHTML = 'Contando: <br>'
       let i = Number(t1.value)
       let f = Number(t2.value)
       let p = Number(t3.value)

       if( p <= 0){
        window.alert('Passo inválido! Vou considear como 1...')
        p = 1
       }


        if (i < f ){
            for(let c = i; c <= f; c += p){
                resp.innerHTML += ` ${c} \u{1F449}`
               }
    
        } else{
            for(let c = i; c >= f; c -= p){
                resp.innerHTML += ` ${c} \u{1F449}`
               }
               
        }
        resp.innerHTML += `\u{1F3C1}`

    }

}

