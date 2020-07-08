console.log("hanoi")
//BLOCK VALUES
const block1 = "1"
const block2 = "2"
const block3 = "3"

//EMPTY POLES
let arrayA = []
let arrayB = [ , , ,]
let arrayC = [ , , ,]

//POLE SELECTORS
let poleA = document.querySelector(".poleA")
let poleB = document.querySelector(".poleB")
let poleC = document.querySelector(".poleC")

//BLOCK SELECTORS
let block1click = document.querySelector(".block1")
let block2click = document.querySelector(".block2")
let block3click = document.querySelector(".block3")


console.log(block1, block2, block3)

arrayA = [block1, block2, block3]

let x = ""
let y = ""
// if (arrayA[x] > arrayA[y]) {
//     console.log("allowed")
// } else {
//     console.log("not allowed")
// }

//POLE ONCLICK
let poleAclick = poleA.addEventListener("click", function (e){
    e.preventDefault()
    console.log("you clicked array a")
})
let poleBclick = poleB.addEventListener("click", function (e){
    console.log(arrayB)
})
let poleCclick = poleC.addEventListener("click", function (e){
    console.log(arrayC)
})

//BLOCK ONCLICK
let clickB1 = block1click.addEventListener("click", function(e){console.log(arrayA[0])})
let clickB2 = block2click.addEventListener("click", function(e){
    console.log(arrayA[1])
})
let clickB3 = block3click.addEventListener("click", move)
function move(e){
    e.preventDefault()
    block3click.classList.add("poleB")
    
    poleB.prepend(block3click)
    console.log(arrayA, arrayB)
}
function removeFromA(block){
    arrayA.splice(arrayA.length, 1)
}



function addToB(block) {
    if (arrayB.length == 0) {              
         arrayB.append(block[x])
  } if (arrayB.length >= 1 && block[x] < block[y]){
        arrayB.splice(1,1)
  }

function removeFromB(block){
    arrayB.splice(arrayB.length, 1)
}

function removeFromC(block){
    arrayC.splice(arrayC.length, 1)
}


// function addToB(block){
//       else if (arrayB.length == 1 && block[x] <block[y]){
//             arrayB.splice(1,1,block[x])
//         }  else if (arrayB.length == 2 && block[x] < block[y]) {
//             arrayB.splice(2,1,block[x])}
        