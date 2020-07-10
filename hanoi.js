console.log("hanoi");

//BLOCK VALUES

let block1 = 1;
let block2 = 2;
let block3 = 3;
let block4 = 4;

//POLE SELECTORS
const pole = document.getElementsByClassName('box')
let poleA = document.querySelector(".poleA");
let poleB = document.querySelector(".poleB");
let poleC = document.querySelector(".poleC");

//BLOCK SELECTORS
var draggable = document.querySelectorAll("[draggable]")
let block1click = document.querySelector(".block1");
var block1Value = block1click.dataset.value;
let block2click = document.querySelector(".block2");
var block2Value = block2click.dataset.value;
let block3click = document.querySelector(".block3");
var block3Value = block3click.dataset.value;
let block4click = document.querySelector(".block4");
var block4Value = block4click.dataset.value;

//EMPTY POLES

let arrayA = []
//where is the block in the tree
// only move last arr element if last
//element.b1set.size etc
//colummn b1set too
let arrayB = []
//locations of blocks
let arrayC = [];



arrayA = [block1click, block2click, block3click, block4click];
// let rows = Object.keys(blocks).length
// console.log(rows)
// let poles = [poleA, poleB, poleC];
// console.log(poles)

console.log(block1, block2, block3);
console.log(block1Value, block2Value, block3Value,block4Value);


let x = "";
let y = "";
  


function drag(e) {
    // e.preventDefault()
    e.dataTransfer.setData("text", e.target.id)
    console.log("i'm dragged")
   
};

function dragover(e){
    e.preventDefault()
}

function drop(e){
    e.preventDefault()
    var data = e.dataTransfer.getData("text");
  e.target.appendChild(document.getElementById(data))
  console.log("i'm dropped")
}

for (let i =0; i < draggable.length; i++){
    draggable[i].addEventListener("dragstart", drag)
}


poleA.addEventListener("dragstart", drag)
poleB.addEventListener("dragstart", drag)
poleC.addEventListener("dragstart", drag)

poleA.addEventListener("dragover", dragover)
poleB.addEventListener("dragover", dragover)
poleC.addEventListener("dragover", dragover)

poleA.addEventListener("drop", drop)
poleB.addEventListener("drop", drop)
poleC.addEventListener("drop", drop)

block1click.addEventListener("dragstart", drag)
block1click.addEventListener("dragover", dragover)
block1click.addEventListener("drop", drop)


block2click.addEventListener("dragstart", drag)
block2click.addEventListener("dragover", dragover)
block2click.addEventListener("drop", drop)

block3click.addEventListener("dragstart", drag)
block3click.addEventListener("dragover", dragover)
block3click.addEventListener("drop", drop)

block4click.addEventListener("dragstart", drag)
block4click.addEventListener("dragover", dragover)
block4click.addEventListener("drop", drop)


function takeLast(arr){
    let length= arr.length
    console.log(arr, arr.length)
    x = arr.splice((length-1),1)
    console.log(arr, x)
    return length
}
takeLast(arrayA)

function pushOnNew(arr){
    arr.splice(0,1,x)
    console.log(arr)
    return arr.length
}
pushOnNew(arrayB)

function printArrays(arr){
    for (let i = 0; i < arr.length; i++){
        console.log(arr, arr.length)
        return arr[i], arr[i].length
    }
    if (arr = []){
        console.log([])
        return []
    }
}
printArrays(arrayA)
printArrays(arrayB)
printArrays(arrayC)
// function checkArrays(arr){
//     for (let i = arr.length; i >0; i--){
//         if (arr[i] == arr.length-1){
//             document.querySelector("[draggable]") == true
    
//             console.log("i'm available")
//         } else {
//             document.querySelector("[draggable]") == false
//             console.log("I'm not avaialble")
//         }
//     }   
// }

