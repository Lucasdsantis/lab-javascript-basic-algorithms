// Iteration 1: Names and Input
let hacker1 = "jailson"
console.log (`The driver's name is ${hacker1}`)

let hacker2 = "guilherme"
console.log (`The navigator name is ${hacker2}`)
// Iteration 2: Conditionals
 if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
 }else if(hacker2.length > hacker1.length){
     console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
 }else{
    console.log(`Wow, you both have equally long names,${hacker1.length} characters!`)
 }

// Iteration 3: Loops
// 3.1
let hacker1big = hacker1.toUpperCase()
let newhacker = ""

for (let i =0; i < hacker1.length; i++){
     newhacker += hacker1big[i] + " "
     }
     console.log(newhacker)

   
//3.2
let back = ""

for (let i = hacker2.length - 1; i >= 0 ; i--){
    back += hacker2[i]
}
console.log(back)
//3.3
let order = hacker1.localeCompare(hacker2)

for(let i = 0; i< hacker1.length; i++){
    if(order === -1){
        console.log("The driver's name goes first.")
        break;
    }else if(order === 1){
       console.log("Yo, the navigator goes first definitely.")
       break;
    }else{
        console.log("What?! You both have the same name?")
        break;
    }
}

