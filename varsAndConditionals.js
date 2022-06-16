/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let backpack = []

backpack.push("Lightsaber")
backpack.push("jedi robe", "food")
    console.log(backpack)

 let belt = backpack.shift()
 
 backpack.splice(1, 0, "coat")
  
 let bag = []

 bag.unshift("flint", "blanket", "toothbrush")
 
 backpack.push(bag.slice(0, 3))

//console.log(bag)
//console.log(backpack.length)
//console.log(belt)
 
for(let i = 0; i < bag.length; i++) {
    console.log(bag[i])
}

for(let i = 0; i < 3; i++) {
    console.log(backpack[i]) 
}
    
