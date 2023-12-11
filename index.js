// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function handleCats(){
    console.log(`Initial cats length: ${cats.length}`)
    console.log(`Old cats: ${cats}`)
    cats.push("Milo", "Otis", "Garfield")
    console.log(`New cats length: ${cats.length}`)
    console.log(`New cats: ${cats}`)
}
handleCats()
