function converterParaSegundos(minutos, segundos) {
    let totalSegundos = (minutos * 60) + segundos
    return totalSegundos
}

function calcularTempoPlaylist(playlist) {
     playlist = []
    let totalMinutos = 0
    let totalSegundos = 0
    for (let i = 0; i < 5; i++) {
        playlist[i]= {}
        playlist[i].titulos = Number(prompt("Digite o titulo da música: "))
        playlist[i].minutos = Number(prompt("Digite os minutos da música: "))
        playlist[i].segundos = Number(prompt("Digite os segundos da música: "))
       totalMinutos = totalMinutos + playlist.minutos
       totalSegundos = totalSegundos + playlist.segundos
    }
    return converterParaSegundos(totalMinutos, totalSegundos)
}

alert(calcularTempoPlaylist())