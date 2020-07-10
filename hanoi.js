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
let arrayB = [];
let arrayC = [];

arrayA = [block4click, block3click, block2click, block1click];

console.log(arrayA[0], arrayA[3])

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
    e.preventDefault();
  document.querySelector("[draggable") == true;
}

//LAND THE BLOCK
function drop(e) {
  e.preventDefault();
  var data = e.dataTransfer.getData("text");
  e.target.appendChild(document.getElementById(data));
  console.log("i'm dropped");
}
//EVENT LISTENERS- DRAGSTART
poleA.addEventListener("dragstart", drag);
poleB.addEventListener("dragstart", drag);
poleC.addEventListener("dragstart", drag);

//EVENT LISTENERS- DRAGOVER
poleA.addEventListener("dragover", dragover);
poleB.addEventListener("dragover", dragover);
poleC.addEventListener("dragover", dragover);

//EVENT LISTENERS- DROP
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
function takeLast(arr) {
  let length = arr.length;
  console.log(arr, arr.length);
  x = arr.splice(length - 1, 1);
  console.log(x);
  return length, x;
};
takeLast(arrayA)

// x = x[0].dataset.value





function preventLand(z) {
    z.document.classList.remove('draggable')
}
//COMPARE BLOCK SIZES
function compareBlocks(x, y) {
  if (x < y) {
    function drop(e) {
        console.log("I've landed")
    }
}
compareBlocks(block1Value, block4Value);





//ADD ELEMENT TO NEW ARRAY
function pushOnNew(arr) {
  y = arr.splice(0, 1, x);
//   console.log(arr, y);
  return arr.length;
}
pushOnNew(arrayB);
// y = y[0].dataset.value

console.log(x, y);

//EXAMINE ARRAYS
function printArrays(arr) {
  for (let i = 0; i < arr.length; i++) {
    return arr[i], arr[i].length;
  }
  if ((arr = [])) {
    return [];
  }
}
// printArrays(arrayA);
// printArrays(arrayB);
// printArrays(arrayC);

//WINCHECK
function winCheck() {
  if ((arrayC = [block1click, block2click, block3click, block4click])) {
    draggable == false;
    console.log("game over");
  } else {
    draggable == true;
    console.log("keep playing");
  }
}

function moveBlock(){
    function drag(e){
    console.log("so far")}
    function takeLast(arr){
    console.log("so far", arr)}
    for (let i = 0; i < draggable.length; i++) {
        draggable[i].addEventListener("dragstart", drag);
      }
      console.log("so far")
}
}
// moveBlock()