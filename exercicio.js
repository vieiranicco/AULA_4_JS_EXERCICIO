function calculadora() {
    let valorEmReal = parseFloat(prompt("Digite o valor em Real - R$:"))
    const cotacaoYuan = parseFloat(1.25)
    const resultado = (valorEmReal * cotacaoYuan)
    const formatado = resultado.toLocaleString('zh-cn', {style: 'currency', currency: 'CNY'})

    alert("Seu valor em Yuan é: " +  formatado)
    console.log ("Seu valor em Yuan é:", formatado)
}

calculadora()
