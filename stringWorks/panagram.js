var text="THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG".toLowerCase()


var alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase()

isPanagram=true

for(let ch of alphabets){

    if(!text.includes(ch)){

        isPanagram=false

        break

    }
}

console.log(isPanagram);