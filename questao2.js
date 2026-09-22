function ehPar(){
    let num = Number(prompt("Digite o número: "))
    let verif = num%2
    if(verif == 0){
        return verif == verif
    } else {
        return verif !== verif
    }


}

alert(ehPar())
