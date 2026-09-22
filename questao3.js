function celciusParaFarenheit(){
    let celcius = Number(prompt("Digite a temperatura em celcius"))
    let farenheit = (celcius * 1.8) + 32
    return farenheit
}
alert(celciusParaFarenheit())