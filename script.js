function tabuada() {
    var num = document.getElementById('txtn')
    var tabuada = document.getElementById('seltab')

    if(num.value.length == 0) {
        window.alert('insira um número, por favor!')
    } else {
        var n = Number(num.value)
        var c = 1
        tabuada.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tabuada ${c}`
            tabuada.appendChild(item)
            c++
        }
    }
}