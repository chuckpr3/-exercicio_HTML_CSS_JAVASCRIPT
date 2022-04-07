function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let resultado = document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = 'Impossivel Contar!'
        //window.alert('[ERRO] Faltam Dados! ')
    } else {
        resultado.innerHTML = 'Contando: <br>'
        // pega o valor dentro de inicio, fim, passo e converte para numero.
        let i = Number(inicio.value) 
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo Invalido! Considerando Passo 1')
            p = 1
        }
        if (i < f) {
            //Contagem Crescente
            for(let contador = i; contador <= f; contador += p){
                resultado.innerHTML += `${contador} \u{1F449}`
            }
        } else{
            //Contagem Regressiva
            for(let contador = i; contador >= f; contador -= p){
                resultado.innerHTML += ` ${contador} \u{1F449}`
            }
        }
        resultado.innerHTML += ` \u{1F3C1}`
        
    }
}

