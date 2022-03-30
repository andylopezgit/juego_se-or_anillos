console.log('Desde archivo Script.js')

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
}


// declarando personajes del juego

// let gandalf = {
//     nombre: 'Gandalf',
//     hp: 100,
//     ene: 200,
//     atacar: function (tipoAtaque) {
//         return
//     }
// };

// let legolas = new Object();
// legolas.nombre = 'Legolas';
// legolas.hp = 100;
// legolas.ene = 150;
// legolas.atacar = function () { return };

//tipo de personaje

function rayo(ata, vic) {
    let atacante = ata
    let victima = vic

    const restaHp = 50
    const restaEne = 10

    atacante.ene = atacante.ene - restaHp
    victima.hp = victima.hp - restaEne


    console.log(`'${atacante.nombre}, ataca a ${victima.nombre}, ${atacante.nombre} pierde ${restaEne} de Energia y la victima: ${victima.nombre} pierde  ${restaHp} de Vida'`)

    return estaMuerto(victima)


}

// comprobar daño

function estaMuerto(personaje) {
    return (`${personaje.nombre} sigue vivo`)
}


let personaje_1 = new Personaje("Gandalf", 100, 300)
let personaje_2 = new Personaje("Legolas", 100, 150)
console.log(personaje_1)
console.log(personaje_1.atacar(rayo(personaje_1, personaje_2)))
console.log(personaje_1)