function tabuada() {
    let numero = document.getElementById('txtnumero')
    let resultado = document.getElementById('selecttabuada')
    
    if (numero.value.length == 0){
        window.alert('Por Favor, digite um numero!')
    } else{
        let num = Number(numero.value)
        let c = 1
        resultado.innerHTML = ``
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            resultado.appendChild(item)
            c++
        }
    }
    
}