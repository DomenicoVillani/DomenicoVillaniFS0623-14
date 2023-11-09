const numeroCaselleTabellone = 76
const numeroCaselleTabellonemin = 1


function numeroRandom(){ // da fare un while per i numeri gia' usciti, fai un array dove inserisci ogni volta il numero inserito,poi confronti l'intero  array con il nuovo numero
    const x = Math.floor(Math.random() * numeroCaselleTabellone) + numeroCaselleTabellonemin; 
    let y = 1
    const confrontoCelle = document.querySelectorAll(("p"))
    for(let i = 0; i<numeroCaselleTabellone; i++){
        if(x === y){
            confrontoCelle[i].classList.add("selected")
        }
        y++
    }

    return x
}

const creaTabella = function(numeroCaselle) {
    const contenitoreTabellone = document.querySelector("#tabellone")
    for(let i=0; i<numeroCaselle; i++){
       const contenitoreCasella = document.createElement("div")
       const numeroCella = document.createElement("p")
       numeroCella.innerText = i + 1
       contenitoreCasella.appendChild(numeroCella)
       contenitoreTabellone.appendChild(contenitoreCasella)
    }
}

creaTabella(numeroCaselleTabellone)