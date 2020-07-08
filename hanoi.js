console.log("hanoi")
const block1 = 1
const block2 = 2
const block3 = 3
const block4 = 4

let arrayA = []
let arrayB = [ , , , ,]
let arrayC = [ , , , ,]

let poleA = document.querySelector(".poleA")
let poleB = document.querySelector(".poleB")
let poleC = document.querySelector(".poleC")

let block1move = document.querySelector(".block1")
let block2move = document.querySelector(".block2")
let block3move = document.querySelector(".block3")


console.log(block1, block2, block3, block4)

arrayA = [block1, block2, block3, block4]

let x = ""
let y = ""
if (arrayA[x] > arrayA[y]) {
    console.log("allowed")
} else {
    console.log("not allowed")
}
block1 < block3
console.log(arrayC)


poleA.addEventListener("click", function (e){
    console.log(arrayA)
})
poleB.addEventListener("click", function (e){
    console.log(arrayB)
})
poleC.addEventListener("click", function (e){
    console.log(arrayC)
})

block1move.addEventListener("click", function(e){
    console.log(arrayA[0])
})
block2move.addEventListener("click", function(e){
    console.log(arrayA[1])
})
block3move.addEventListener("click", function(e){
    console.log(arrayA[2])
})