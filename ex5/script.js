let numero = document.getElementById('txtnumero')
let lista = document.getElementById('selectvalor')
let resultado = document.getElementById('result')
let valores = []

function adicionar() {
    if (isNumero(numero.value) && !inLista(numero.value, valores)){
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado.`
        lista.appendChild(item)
        resultado.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encotrado na lista.')
    }
    numero.value = ''
    numero.focus()
}
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}
function inLista(n ,l) {
    if(l.indexOf(Number(n)) != -1 ){
        return true
    }else{
        return false
    }
    
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]    
        }

        media = soma / tot
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        resultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        resultado.innerHTML += `<p>A média dos valores digitado é ${media}.</p>`
    }
    
}
