console.log("hanoi");

//BLOCK VALUES

let block1 = 1;
let block2 = 2;
let block3 = 3;
let block4 = 4;

//POLE SELECTORS
const pole = document.getElementsByClassName("box");
let poleA = document.querySelector(".poleA");
let poleB = document.querySelector(".poleB");
let poleC = document.querySelector(".poleC");

//BLOCK SELECTORS
var draggable = document.querySelectorAll("[draggable]");
let block1click = document.querySelector(".block1");
var block1Value = block1click.dataset.value;
let b1 = document.querySelector("#b1");
let block2click = document.querySelector(".block2");
var block2Value = block2click.dataset.value;
let b2 = document.querySelector("#b2");
let block3click = document.querySelector(".block3");
var block3Value = block3click.dataset.value;
let b3 = document.querySelector("#b3");
let block4click = document.querySelector(".block4");
var block4Value = block4click.dataset.value;
let b4 = document.querySelector("#b4");

//EMPTY POLES

let arrayA = [];
//where is the block in the tree
// only move last arr element if last
//element.b1set.size etc
//colummn b1set too
let arrayB = [];
//locations of blocks
let arrayC = [];

arrayA = [block1click, block2click, block3click, block4click];

console.log(block1, block2, block3);
console.log(block1Value, block2Value, block3Value, block4Value);

//EXTRA VARIABLES
let x = "";
let y = "";

//PICK UP THE BLOCK
function drag(e) {
  // e.preventDefault()
  e.dataTransfer.setData("text", e.target.id);
  console.log("i'm dragged");
}

//DRAG THE BLOCK
for (let i = 0; i < draggable.length; i++) {
  draggable[i].addEventListener("dragstart", drag);
}

//ALLOW THE BLOCK TO LAND
function dragover(e) {
document.querySelector("[draggable") == true;
  e.preventDefault();
}

//LAND THE BLOCK
function drop(e) {
  e.preventDefault();
  var data = e.dataTransfer.getData("text");
  e.target.appendChild(document.getElementById(data));
  console.log("i'm dropped");
}
//EVENT LISTENERS- POLEA
poleA.addEventListener("dragstart", drag);
poleB.addEventListener("dragstart", drag);
poleC.addEventListener("dragstart", drag);

//EVENT LISTENERS- POLEB
poleA.addEventListener("dragover", dragover);
poleB.addEventListener("dragover", dragover);
poleC.addEventListener("dragover", dragover);

//EVENT LISTENERS- POLEC
poleA.addEventListener("drop", drop);
poleB.addEventListener("drop", drop);
poleC.addEventListener("drop", drop);

//EVENT LISTENERS- BLOCK1
block1click.addEventListener("dragstart", drag);
block1click.addEventListener("dragover", dragover);
block1click.addEventListener("drop", drop);

//EVENT LISTENERS- BLOCK2
block2click.addEventListener("dragstart", drag);
block2click.addEventListener("dragover", dragover);
block2click.addEventListener("drop", drop);

//EVENT LISTENERS - BLOCK3
block3click.addEventListener("dragstart", drag);
block3click.addEventListener("dragover", dragover);
block3click.addEventListener("drop", drop);

//EVENT LISTENERS- BLOCK4
block4click.addEventListener("dragstart", drag);
block4click.addEventListener("dragover", dragover);
block4click.addEventListener("drop", drop);

//REMOVE THE LAST ELEMENT FROM AN ARRAY
let last = function takeLast(arr) {
  let length = arr.length;
  console.log(arr, arr.length);
  x = arr.splice(length - 1, 1);
  console.log(x);
  return length, x;
};
last(arrayA);
// takeLast(arrayA)

// x = x[0].dataset.value

//ADD ELEMENT TO NEW ARRAY
function pushOnNew(arr) {
  y = arr.splice(0, 1, x);
  console.log(arr, y);
  return arr.length;
}
pushOnNew(arrayB);
// y = y[0].dataset.value

console.log(x, y);

//EXAMINE ARRAYS
function printArrays(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr, arr.length);
    return arr[i], arr[i].length;
  }
  if ((arr = [])) {
    console.log([]);
    return [];
  }
}
printArrays(arrayA);
printArrays(arrayB);
printArrays(arrayC);

//COMPARE BLOCK SIZES
function compareBlocks(x, y) {
  if (x > y) { 
    draggable == false
    console.log("can't land")
  } else {
      draggable == true
      console.log("can land")
  }
}
compareBlocks(block1Value, block4Value)

//WINCHECK
function winCheck(){
    if (arrayC = [block1click, block2click, block3click, block4click]) {
        draggable ==  false
        console.log("game over")
    }
    else {
        draggable == true;
        console.log("keep playing")
    }
}