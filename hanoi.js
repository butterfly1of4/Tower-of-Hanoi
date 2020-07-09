console.log("hanoi");


//BLOCK VALUES
const blocks = {
    block1: 1,
    block2: 2,
    block3: 3
}
//POLE SELECTORS
let poleA = document.querySelector(".poleA");
let poleB = document.querySelector(".poleB");
let poleC = document.querySelector(".poleC");

let allpoleA = {
    pole: poleA,
    column: 2,
    rows: [5,4,3]
}

let allpoleB = {
    pole: poleB,
    column: 4,
    rows: [5,4,3]
}
let allpoleC = {
    pole: poleC,
    column: 6,
    rows: [5,4,3]
}

console.log(allpoleA, allpoleB, allpoleC)
//BLOCK SELECTORS
let block1click = document.querySelector(".block1");
var block1Value = block1click.dataset.value 
let block2click = document.querySelector(".block2");
var block2Value = block2click.dataset.value
let block3click = document.querySelector(".block3");
var block3Value = block3click.dataset.value

let rows = Object.keys(blocks).length
console.log(rows)
let poles = [poleA, poleB, poleC];
console.log(poles)
//EMPTY POLES
let arrayA = [];
//where is the block in the tree
// only move last arr element if last
//element.b1set.size etc
//colummn b1set too
let arrayB = [];
//locations of blocks
let arrayC = [];

function findCel (poles,rows,column){
    console.log(poleB.ondrop.draggable)
pole.addEventListener("mouseover", function(e){
    e.preventDefault()
    e.target = document.querySelector(".box")
})
}
console.log(document.querySelector(".box"))
console.log(blocks.block1, blocks.block2, blocks.block3);
console.log(block1Value, block2Value, block3Value)

arrayA = [blocks.block1, blocks.block2, blocks.block3];

let x = "";
let y = "";

function allowDrop(e) {
  e.preventDefault();
}
//maybe add remove class at onset
function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
}

//maybe add class at onset
function drop(e) {
  e.preventDefault();
  var data = e.dataTransfer.getData("text");
  e.target.appendChild(document.getElementById(data));
  console.log(e, data, e.target)
}

// var arrayA.lenghth = (arrayB.length) = (arrayC.length) = Object.keys(blocks).length

// function gridLocation(arr){
//     if (arr.slice(-1)[0] !== undefined){
//         console.log(arr)
//     } else {
//         console.log("empty")
//     }}

// block2click.addEventListener("click", (e) => {
//   allowDrop(e);
//   drag(e);
//   drop(e)
// })

// block3click.addEventListener("click", (e) => {
//   allowDrop(e);
//   drag(e);
//   drop(e)
// });
