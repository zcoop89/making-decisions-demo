/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

let kenobiAttack = 20
let anikanAttack = 30

if (anikanAttack > kenobiAttack) {
    console.log("Anikan has a better attack than Kenobi")
} else if (kenobiAttack > anikanAttack) {
    console.log("Kenobi has a better attack than Anikan")
} else {
    console.log("Anikan and Kenobi have the same attack")
}

let kenobiHealth = 100
let kenobiDefense = 0

if (kenobiHealth > anikanAttack) {
    kenobiHealth -= anikanAttack
    console.log(`Kenobi's Health is now ${kenobiHealth}`)
} else {
    console.log("Kenobi was slain")
}

kenobiDefense += 25

for (let i = 0; i < 5; i++) {
    let damage = anikanAttack - kenobiDefense
    kenobiHealth -= damage
    console.log(`Kenobi's health is now ${kenobiHealth}`)
}

while (kenobiHealth > 0) {
    let damage = anikanAttack - kenobiDefense
    kenobiHealth -= damage
    if (kenobiHealth > 0) {
        console.log(`Kenobi's health is now ${kenobiHealth}`)
    } else {
        console.log("Kenobi has been slain")
    }
}