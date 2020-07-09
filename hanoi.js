console.log("hanoi");
//BLOCK VALUES
const block1 = "1";
const block2 = "2";
const block3 = "3";

//EMPTY POLES
let arrayA = [];
//where is the block in the tree
// only move last arr element if last
//element.b1set.size etc
//colummn b1set too
let arrayB = [, , ,];
//locations of blocks
let arrayC = [, , ,];

//POLE SELECTORS
let poleA = document.querySelector(".poleA");
let poleB = document.querySelector(".poleB");
let poleC = document.querySelector(".poleC");

//BLOCK SELECTORS
let block1click = document.querySelector(".block1");
let block2click = document.querySelector(".block2");
let block3click = document.querySelector(".block3");

console.log(block1, block2, block3);

arrayA = [block1, block2, block3];

let x = "";
let y = "";

function allowDrop(e) {
  e.preventDefault();
}
function drag(e) {
  console.log(e.target.id);
  e.dataTransfer.setData("text", e.target.id);
}

function drop(e, block) {
  e.preventDefault();
  var data = e.dataTransfer.getData("text");
  console.log(data);
  e.target.appendChild(document.getElementById(data));
  console.log(block1click);
}

block1click.addEventListener("click", (e) => {
  console.log(block1click);
  allowDrop(e);
  drag(e);
  drop(e, block1click);
});

block2click.addEventListener("click", () => {
  allowDrop(e);
  drag(e);
  // ondrop = block2drop.drop(e)
});

block3click.addEventListener("click", () => {
  allowDrop(e);
  drag(e);
});

function positionCheck() {}

//POLE ONCLICK
// let poleAclick = poleA.addEventListener("click", function (e){
//     e.preventDefault()
//     console.log("you clicked array a")
// })
// let poleBclick = poleB.addEventListener("click", function (e){
//     console.log(arrayB)
// })
// let poleCclick = poleC.addEventListener("click", function (e){
//     console.log(arrayC)
// })

// //BLOCK ONCLICK

// let clickB1 = block1click.addEventListener("click", moveB1)
// let clickB2 = block2click.addEventListener("click", moveB2)
// let clickB3 = block3click.addEventListener("click", moveB3)

// //FUNCTIONS
// function moveB3(e){
//     e.preventDefault()
//     poleB.append(block3click)
// }
// function moveB2(e){
//     e.preventDefault()
//     poleB.prepend(block2click)
// }
// function moveB1(e){
//     e.preventDefault()
//     poleB.prepend(block1click)
// }

// function moveB3(e){
//     e.preventDefault()
//     poleC.append(block3click)
// }
// function moveB2(e){
//     e.preventDefault()
//     poleC.prepend(block2click)
// }
// function moveB1(e){
//     e.preventDefault()
//     poleC.prepend(block1click)}

// function removeFromA(block){
//     arrayA.splice(arrayA.length, 1)
// }

// function addToB(block) {
//     if (arrayB.length == 0) {
//          arrayB.append(block[x])
//   } if (arrayB.length >= 1 && block[x] < block[y]){
//         arrayB.splice(1,1)
//   }
// }

// function removeFromB(block){
//     arrayB.splice(arrayB.length, 1)
// }

// function removeFromC(block){
//     arrayC.splice(arrayC.length, 1)
// }

// function setUpListeners() {
//     var b1 = ['one', 'two', '...etc.'];

//     window.addEventListener('load', function() {
//       doSomethingWithSomeb1(b1);
//       // b1 is now part of the callback's scope.
//     });
//   }
