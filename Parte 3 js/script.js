
// Emoji https://unicode.org/emoji/charts/full-emoji-list.html

function contar(){

    // atribuir o conteúdo das digitações a novas variaveis  
    let t1 = document.getElementById('n1')
    let t2 = document.getElementById('n2')
    let t3 = document.getElementById('n3')
   
    
    // Verificar se os contéudos são zerados. Obs não entendi a diferença para nulos
    if(t1.value.length == 0 || t2.value.length == 0 || t3.value.length == 0){
        resp.innerHTML = 'Faltam dados: '
    } else {
       resp.innerHTML = 'Contando: <br>'
       
    // transformar os conteúdos das váriáveis em valor ou pelo menos forçar isso
       let i = Number(t1.value)
       let f = Number(t2.value)
       let p = Number(t3.value)

       
    // Verificar se foi digitado exatamente o 0  
    if( p <= 0){
        window.alert('Passo inválido! Vou considear como 1...')
        p = 1
       }


    // se o inicio for menor que o fim faz a contagem crescente senão faz decrescente
    // Creio que nao seria necessario criar a var c, podendo usar o i apenas, mas vou deixar para outro momento o teste
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

