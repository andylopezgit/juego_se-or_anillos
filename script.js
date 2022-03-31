console.log('Desde archivo Script.js')
// variables y elementos HTML
let barraEnergia_1 = document.getElementById('barra_energia_j_1')
let barraEnergia_2 = document.getElementById('barra_energia_j_2')
let nombre_barra_1 = document.getElementById('nombre_barra_1')
let nombre_barra_2 = document.getElementById('nombre_barra_2')
const btn_atacarJugador_1 = document.getElementById('atacar_j_1')
const btn_atacarJugador_2 = document.getElementById('atacar_j_2')
const pNombre1 = document.getElementById('div_nombre_1')
const pEnergia1 = document.getElementById('div_energia_1')
const pVida1 = document.getElementById('div_vida_1')
const pNombre2 = document.getElementById('div_nombre_2')
const pEnergia2 = document.getElementById('div_energia_2')
const pVida2 = document.getElementById('div_vida_2')
const btn_curar_1 = document.getElementById('btn_curar_1')
const btn_curar_2 = document.getElementById('btn_curar_2')
let resultado = document.getElementById('resultado')







function monitorvida(energia) {
    if (energia === 0) {
        resultado.innerHTML = "FIN DEL JUEGO"
    } else {

    }
}


//declaro clase

class Personaje {
    constructor(nombre, energia, vida) {
        this.nombre = nombre
        this.hp = vida
        this.ene = energia
    }

    atacar(tipoAtaque) {
        return (tipoAtaque)

    }

    recuperar(tipoCura) {
        return (tipoCura)
    }

}


function rayo(ata, vic) {
    let atacante = ata
    let victima = vic

    const restaHp = 25
    const restaEne = 15

    atacante.ene = atacante.ene - restaEne
    victima.hp = victima.hp - restaHp
    let e = victima.hp * 4
    if (atacante.nombre === 'Gandalf') {
        barraEnergia_2.style.width = `${e}px`
    } else {
        barraEnergia_1.style.width = `${e}px`
    }



    console.log(`'${atacante.nombre}, ataca a ${victima.nombre}, ${atacante.nombre} pierde ${restaEne} de Energia y la victima: ${victima.nombre} pierde  ${restaHp} de Vida'`)
    actualizarPantalla()
    return estaMuerto(victima)

}

function actualizarPantalla() {
    pNombre1.innerHTML = personaje_1.nombre
    pEnergia1.innerHTML = personaje_1.ene
    pVida1.innerHTML = personaje_1.hp
    pNombre2.innerHTML = personaje_2.nombre
    pEnergia2.innerHTML = personaje_2.ene
    pVida2.innerHTML = personaje_2.hp
}

// recuperacion con Medicamentos
function medicamentos(personaje) {
    let topeVida = 100
    let perRecuperar = personaje
    let recupero = 25
    let e
    let barra

    if (personaje.nombre == 'Gandalf') {
        barra = barraEnergia_1
    } else {
        barra = barraEnergia_2
    }


    if (perRecuperar.hp < topeVida) {
        perRecuperar.hp = perRecuperar.hp + recupero
        let e = perRecuperar.hp * 4
        barra.style.width = `${e}px`
    } else {
        console.log(id)
        perRecuperar.hp = perRecuperar.hp + recupero
        barra.style.width = `${e}px`
    }
}

// comprobar daño

function estaMuerto(personaje) {
    return (`${personaje.nombre} sigue vivo`)
}

//  INICIALIZANDO EL JUEGO

// inicializando los personajes
let personaje_1 = new Personaje("Gandalf", 300, 100)
let personaje_2 = new Personaje("Legolas", 150, 100)






// inicionalizando los paneles de los jugadores
pNombre1.innerHTML = personaje_1.nombre
pEnergia1.innerHTML = personaje_1.ene
pVida1.innerHTML = personaje_1.hp

nombre_barra_1.innerHTML = personaje_1.nombre
nombre_barra_2.innerHTML = personaje_2.nombre

pNombre2.innerHTML = personaje_2.nombre
pEnergia2.innerHTML = personaje_2.ene
pVida2.innerHTML = personaje_2.hp




btn_curar_1.addEventListener('click', () => {
    personaje_1.recuperar(medicamentos(personaje_1))
    pVida1.innerHTML = personaje_1.hp
})

btn_curar_2.addEventListener('click', () => {
    console.log('aca')
    personaje_2.recuperar(medicamentos(personaje_2))
    pVida2.innerHTML = personaje_2.hp
})

btn_atacarJugador_1.addEventListener('click', () => {
    personaje_1.atacar(rayo(personaje_1, personaje_2))
    //monitorvida(eneJ1)
})

btn_atacarJugador_2.addEventListener('click', () => {
    personaje_2.atacar(rayo(personaje_2, personaje_1))
    //monitorvida(eneJ2)
})