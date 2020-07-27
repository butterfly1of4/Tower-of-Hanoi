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
let b1 = document.querySelector("#b1");
let valueB1 = b1.dataset.value;

let block2click = document.querySelector(".block2");
let b2 = document.querySelector("#b2");
let valueB2 = b2.dataset.value;

let block3click = document.querySelector(".block3");
let b3 = document.querySelector("#b3");
let valueB3 = b3.dataset.value;
let block4click = document.querySelector(".block4");
let b4 = document.querySelector("#b4");
let valueB4 = b4.dataset.value;

//EMPTY POLES
let arrayA = [];
let arrayB = [];
let arrayC = [];

arrayC = [block4click, block3click, block2click, block1click];

console.log(arrayC[0], arrayC[3]);

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




function landBlockOnB(){
  console.log(arrayB)

}
landBlockOnB()